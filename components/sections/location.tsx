import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { ContactForm } from "@/components/contact-form";
import { MapEmbed } from "@/components/map-embed";

export function LocationSection() {
  return (
    <SectionShell
      id="kontakt-preview"
      className="scroll-mt-20 bg-[color-mix(in_srgb,var(--blush)_10%,var(--bg))] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight text-[#7D8E74] sm:text-4xl">
            Lokalizacja i kontakt
          </h2>
          <p className="mt-3 max-w-2xl text-[#6B6B6B]">
            Zapraszamy do Włocławka. Napisz lub zadzwoń, chętnie umówimy wizytę.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <MotionReveal className="flex justify-center lg:justify-start">
            <MapEmbed />
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <ContactForm idPrefix="home" />
          </MotionReveal>
        </div>
      </div>
    </SectionShell>
  );
}
