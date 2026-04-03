import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { ContactForm } from "@/components/contact-form";
import { MapEmbed } from "@/components/map-embed";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt do BASE STUDIO Włocławek — umów wizytę na stylizację paznokci. Telefon, e-mail i formularz.",
};

export default function KontaktPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-foreground">
            Kontakt
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Masz pytania lub chcesz umówić wizytę? Zadzwoń, napisz lub skorzystaj
            z formularza, odpowiemy tak szybko, jak to możliwe.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <MotionReveal delay={0.05} className="space-y-6">
            <ul className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <li className="flex gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  <strong className="block text-foreground">Adres</strong>
                  {SITE.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>
                    <strong className="block text-foreground">Telefon</strong>
                    {SITE.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>
                    <strong className="block text-foreground">E-mail</strong>
                    {SITE.email}
                  </span>
                </a>
              </li>
            </ul>
            <div className="flex justify-center sm:justify-start">
              <MapEmbed />
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <ContactForm idPrefix="kontakt" />
          </MotionReveal>
        </div>
      </div>
    </div>
  );
}
