"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function ScrollProgress() {
  const progress = useMotionValue(0);
  const smooth = useSpring(progress, { stiffness: 140, damping: 32, mass: 0.35 });

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      progress.set(total > 0 ? doc.scrollTop / total : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [progress]);

  return (
    <div
      className="pointer-events-none fixed top-0 right-0 left-0 z-[100] h-1 bg-[var(--sage)]/20"
      aria-hidden
    >
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-[var(--sage)] via-[var(--coral)] to-[var(--mauve)]"
        style={{ scaleX: smooth }}
      />
    </div>
  );
}
