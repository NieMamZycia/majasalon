"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export function MobileCallButton() {
  return (
    <motion.a
      href={SITE.phoneHref}
      className="fixed right-6 bottom-6 z-[45] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--sage)] to-[var(--blush)] shadow-2xl lg:hidden"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Zadzwoń teraz"
    >
      <Phone className="relative z-10 h-8 w-8 text-white" />
      <motion.span
        className="absolute inset-0 rounded-full bg-[var(--sage)]/30"
        aria-hidden
        animate={{ scale: [1, 1.35, 1], opacity: [0.45, 0, 0.45] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </motion.a>
  );
}
