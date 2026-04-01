"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-gradient-to-br from-[var(--sage)]/25 to-[var(--blush)]/25"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[var(--sage)] to-[var(--blush)] shadow-2xl"
            >
              <Sparkles className="h-16 w-16 text-white" strokeWidth={1.25} />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 font-[family-name:var(--font-playfair)] text-2xl text-[var(--studio-text)]"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              Przygotowujemy piękno
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                times: [0, 0.5, 1],
              }}
            >
              ...
            </motion.span>
          </motion.p>

          <motion.div className="mt-6 h-1 w-64 overflow-hidden rounded-full bg-white/30">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--sage)] to-[var(--blush)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
