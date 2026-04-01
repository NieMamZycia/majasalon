"use client";

import dynamic from "next/dynamic";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";

const TestimonialsSwiper = dynamic(
  () =>
    import("@/components/testimonials-swiper").then((m) => ({
      default: m.TestimonialsSwiper,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[min(380px,72vh)] items-center justify-center text-sm text-muted-foreground">
        Ładowanie opinii…
      </div>
    ),
  }
);

export function TestimonialsSection() {
  return (
    <SectionShell
      id="opinie"
      className="section-wash-blush scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-[var(--sage)] to-[var(--blush)] bg-clip-text text-transparent">
              Opinie
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Goście BASE STUDIO dzielą się wrażeniami po wizycie we Włocławku.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.08} className="mt-8">
          <TestimonialsSwiper />
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
