import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { ContactForm } from "@/components/contact-form";
import { MAPS_EMBED, SITE } from "@/lib/constants";

export function LocationSection() {
  return (
    <SectionShell
      id="kontakt-preview"
      className="scroll-mt-20 bg-[color-mix(in_srgb,var(--blush)_10%,var(--bg))] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-[var(--sage)] to-[var(--blush)] bg-clip-text text-transparent">
              Lokalizacja i kontakt
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Zapraszamy do {SITE.address}. Napisz lub zadzwoń — chętnie umówimy
            wizytę.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <MotionReveal className="overflow-hidden rounded-2xl border border-border shadow-md">
            <iframe
              title="Mapa — BASE STUDIO salon paznokci Włocławek"
              src={MAPS_EMBED}
              className="aspect-[4/3] min-h-[280px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold">
                Napisz do nas
              </h3>
              <ContactForm idPrefix="home" className="mt-6" />
            </div>
          </MotionReveal>
        </div>
      </div>
    </SectionShell>
  );
}
