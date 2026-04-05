"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { GradientButton } from "@/components/gradient-button";
import { SocialLinks } from "@/components/SocialLinks";
import { FloatingIcons } from "@/components/floating-icons";
import { AnimatedCounter } from "@/components/animated-counter";
import { IMAGES, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y, scale }}
      >
        <Image
          src={IMAGES.hero}
          alt="BASE STUDIO — stylizacja paznokci"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#3e3832]/78 via-[#3e3832]/52 to-[#3e3832]/88"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[var(--coral)]/15 via-transparent to-[var(--sage)]/20"
          aria-hidden
        />
      </motion.div>

      <FloatingIcons />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65 }}
          className={cn(
            "font-[family-name:var(--font-playfair)] text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl",
            "text-gradient-hero drop-shadow-sm"
          )}
        >
          BASE STUDIO Stylizacja Paznokci
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-4 text-center sm:gap-6"
        >
          <div className="rounded-2xl border border-white/15 bg-white/10 px-2 py-4 backdrop-blur-md sm:px-4">
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white sm:text-3xl">
              <AnimatedCounter value={500} suffix="+" duration={1.8} />
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-white/75 sm:text-xs">
              zadowolonych gości
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 px-2 py-4 backdrop-blur-md sm:px-4">
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white sm:text-3xl">
              <AnimatedCounter value={5} suffix="" duration={1.2} />
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-white/75 sm:text-xs">
              lat pasji
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 px-2 py-4 backdrop-blur-md sm:px-4">
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white sm:text-3xl">
              <AnimatedCounter value={98} suffix="%" duration={1.5} />
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-white/75 sm:text-xs">
              poleca znajomym
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <GradientButton href="/kontakt" className="min-w-[200px] px-8 py-3">
            Umów wizytę
          </GradientButton>
          <GradientButton href={SITE.phoneHref} variant="outline-light" className="min-w-[200px] px-8 py-3">
            <Phone className="size-4" />
            {SITE.phone}
          </GradientButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.62 }}
          className="mt-8"
        >
          <SocialLinks size="md" className="justify-center" />
        </motion.div>
      </div>
    </section>
  );
}
