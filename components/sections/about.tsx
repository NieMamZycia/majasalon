import Image from "next/image";
import { Sparkles, Heart, Award } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { IMAGES } from "@/lib/constants";

const features = [
  {
    icon: Sparkles,
    title: "Precyzja",
    text: "Dbamy o każdy detal — kształt, skórki i trwałość stylizacji.",
  },
  {
    icon: Heart,
    title: "Atmosfera",
    text: "Przytulne wnętrze i czas tylko dla Ciebie.",
  },
  {
    icon: Award,
    title: "Jakość",
    text: "Sprawdzone produkty i aktualne trendy manicure.",
  },
];

export function AboutSection() {
  return (
    <SectionShell
      id="o-nas"
      className="section-wash-blush scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-[var(--sage)] to-[var(--blush)] bg-clip-text text-transparent">
              O nas
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            BASE STUDIO to miejsce we Włocławku, gdzie stylizacja paznokci łączy się
            z profesjonalną pielęgnacją.
          </p>
        </MotionReveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <MotionReveal className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src={IMAGES.salon}
              alt="Wnętrze salonu paznokci BASE STUDIO we Włocławku — manicure i pedicure"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </MotionReveal>

          <div>
            <MotionReveal delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Tworzymy stylizacje dopasowane do Twojego stylu — od klasycznego
                manicure po zaawansowane zdobienia. Stawiamy na higienę, komfort i
                naturalny efekt, który przetrwa codzienne wyzwania.
              </p>
            </MotionReveal>
            <ul className="mt-10 space-y-6">
              {features.map((f, i) => (
                <MotionReveal key={f.title} delay={0.15 + i * 0.08}>
                  <li className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--blush)]/40 text-primary">
                      <f.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-medium text-foreground">{f.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                    </div>
                  </li>
                </MotionReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
