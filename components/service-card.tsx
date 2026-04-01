"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/lib/services-data";
import { cn } from "@/lib/utils";

export const serviceCardVariants = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type ServiceCardProps = {
  service: ServiceItem;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <motion.div
      className={cn("h-full", className)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <Link
        href={service.href}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-md transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--coral)]/15"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--coral)]/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground">
            {service.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          <div className="mt-4 flex items-center justify-between gap-2">
            <span className="rounded-full bg-[var(--sage)]/25 px-3 py-1 text-sm font-semibold text-[var(--studio-text)]">
              {service.priceFrom}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-[var(--coral)]">
              Więcej
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
