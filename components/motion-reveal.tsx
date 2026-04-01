"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionRevealProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  ...props
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
