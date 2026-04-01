"use client";

import { motion } from "framer-motion";
import { Check, Flame } from "lucide-react";
import { PRICING_PACKAGES } from "@/lib/pricing-packages";
import { GradientButton } from "@/components/gradient-button";
import { cn } from "@/lib/utils";

export function PackagePricing({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid gap-8 md:grid-cols-3 md:items-stretch",
        className
      )}
    >
      {PRICING_PACKAGES.map((pkg, i) => (
        <motion.article
          key={pkg.id}
          layout
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: pkg.featured ? 1.04 : 1.03, y: -4 }}
          className={cn(
            "relative flex flex-col overflow-hidden rounded-3xl border border-white/40 p-8 shadow-lg transition-shadow",
            "bg-gradient-to-br from-[var(--sage)]/90 via-[var(--blush)]/85 to-[var(--mauve)]/80",
            pkg.featured && "ring-2 ring-[var(--coral)] ring-offset-2 ring-offset-[var(--bg)] md:z-10 md:scale-[1.02]"
          )}
        >
          {pkg.featured && pkg.badge && (
            <span className="badge-gradient absolute top-5 right-5 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--studio-text)] shadow-md">
              <Flame className="size-3.5" aria-hidden />
              {pkg.badge}
            </span>
          )}

          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[var(--studio-text)]">
            {pkg.name}
          </h3>
          <p className="mt-2 text-4xl font-bold tracking-tight text-[var(--studio-text)]">
            {pkg.price}
          </p>
          <ul className="mt-8 flex-1 space-y-3">
            {pkg.features.map((line) => (
              <li key={line} className="flex gap-2 text-sm text-[var(--studio-text)]/90">
                <Check
                  className="mt-0.5 size-4 shrink-0 text-[var(--coral)]"
                  strokeWidth={2.5}
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <GradientButton href="/kontakt" block className="justify-center shadow-md">
              Wybierz pakiet
            </GradientButton>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
