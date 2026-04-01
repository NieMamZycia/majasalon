"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Palette } from "lucide-react";

export function FloatingIcons() {
  const items = [
    { Icon: Sparkles, className: "left-[8%] top-[22%] text-[var(--blush)]", r: 6, d: 4 },
    { Icon: Heart, className: "right-[10%] top-[30%] text-[var(--mauve)]", r: -5, d: 4.6 },
    { Icon: Palette, className: "left-[14%] bottom-[28%] text-[var(--sage)]", r: 5, d: 5.2 },
    { Icon: Sparkles, className: "right-[16%] bottom-[24%] text-[var(--coral)]", r: -6, d: 4.3 },
  ] as const;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
      aria-hidden
    >
      {items.map(({ Icon, className, r, d }, i) => (
        <motion.div
          key={i}
          className={`absolute opacity-70 drop-shadow-lg sm:opacity-90 ${className}`}
          animate={{
            y: [0, -12, 0],
            rotate: [0, r, 0],
          }}
          transition={{
            duration: d,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.35,
          }}
        >
          <Icon className="size-8 sm:size-10 md:size-12" strokeWidth={1.25} />
        </motion.div>
      ))}
    </div>
  );
}
