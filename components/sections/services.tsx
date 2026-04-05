"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { ServiceCard, serviceCardVariants } from "@/components/service-card";
import { SERVICES } from "@/lib/services-data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export function ServicesSection() {
  return (
    <SectionShell
      id="uslugi"
      className="section-wash-sage scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-[var(--sage)] to-[var(--blush)] bg-clip-text text-transparent">
                Usługi
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Stylizacja paznokci — sprawdź ofertę i wybierz coś dla siebie.
            </p>
          </div>
          <Link
            href="/cennik"
            className="badge-gradient rounded-full px-4 py-2 text-sm font-semibold text-[var(--studio-text)] shadow-sm transition-shadow hover:shadow-md"
          >
            Zobacz cennik
          </Link>
        </MotionReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => (
            <motion.div key={s.slug} variants={serviceCardVariants} className="h-full">
              <ServiceCard service={s} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
