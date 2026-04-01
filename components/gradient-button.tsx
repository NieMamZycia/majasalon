"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GradientButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  block?: boolean;
  variant?: "solid" | "outline-light";
  type?: "button" | "submit";
  onClick?: () => void;
};

export function GradientButton({
  href,
  children,
  className,
  variant = "solid",
  type = "button",
  onClick,
  block = false,
}: GradientButtonProps) {
  const base =
    "relative min-h-10 items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-2.5 text-sm font-semibold transition-shadow focus-visible:ring-2 focus-visible:ring-[var(--coral)] focus-visible:ring-offset-2 focus-visible:outline-none";

  const solid =
    "gradient-btn-shift text-[var(--studio-text)] shadow-md shadow-[var(--coral)]/20 hover:shadow-lg hover:shadow-[var(--coral)]/30";

  const outlineLight =
    "border border-white/50 bg-white/10 text-white backdrop-blur-md hover:bg-white/20";

  const merged = cn(
    base,
    "inline-flex",
    variant === "solid" ? solid : outlineLight,
    block && "w-full",
    className
  );

  const inner = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
  );

  const el =
    href && (href.startsWith("tel:") || href.startsWith("mailto:")) ? (
      <a href={href} className={merged}>
        {inner}
      </a>
    ) : href ? (
      <Link href={href} className={merged}>
        {inner}
      </Link>
    ) : (
    <button type={type} onClick={onClick} className={merged}>
      {inner}
    </button>
  );

  return (
    <motion.span
      className={block ? "flex w-full" : "inline-flex"}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {el}
    </motion.span>
  );
}
