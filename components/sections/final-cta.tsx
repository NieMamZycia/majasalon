"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { GradientButton } from "@/components/gradient-button";
import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--sage)]/45 via-[var(--blush)]/35 to-[var(--mauve)]/40" />
      <motion.div
        className="pointer-events-none absolute -left-[20%] top-[-30%] size-[min(90vw,520px)] rounded-full bg-[var(--coral)]/30 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-[15%] bottom-[-25%] size-[min(80vw,440px)] rounded-full bg-[var(--sage)]/35 blur-3xl"
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--coral)_0%,_transparent_55%)] opacity-35" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-foreground sm:text-4xl"
        >
          Gotowa na piękne paznokcie?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-muted-foreground"
        >
          Umów wizytę w BASE STUDIO we Włocławku — stylizacja paznokci na
          najwyższym poziomie.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <GradientButton href="/kontakt" className="min-w-[220px] gap-2 px-8 py-3">
            Umów wizytę
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{
                duration: 1.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="size-4" />
            </motion.span>
          </GradientButton>
          <a
            href={SITE.phoneHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "min-w-[200px] border-[var(--coral)]/50 bg-background/80 backdrop-blur-sm"
            )}
          >
            <Phone className="size-4" />
            Zadzwoń
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.28 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Nie wiesz, który pakiet?{" "}
          <Link href="/#pakiety" className="font-semibold text-[var(--coral)] underline-offset-4 hover:underline">
            Zobacz pakiety
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
