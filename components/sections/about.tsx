import { Award, Heart, Scissors } from "lucide-react";
import { AboutSalonCarousel } from "@/components/about-salon-carousel";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { ABOUT_SALON_SLIDES } from "@/lib/constants";

const features = [
  {
    icon: Scissors,
    title: "Precyzja",
    text: "Dbamy o każdy detal, kształt, skórki i trwałość stylizacji.",
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
] as const;

export function AboutSection() {
  return (
    <SectionShell
      id="o-mnie"
      className="section-wash-blush scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-[var(--sage)] to-[var(--blush)] bg-clip-text text-transparent">
              O mnie
            </span>
          </h2>
        </MotionReveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <MotionReveal>
            <AboutSalonCarousel slides={ABOUT_SALON_SLIDES} />
          </MotionReveal>

          <div className="text-left">
            <MotionReveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-[#6B6B6B]">
                <p>
                  Tutaj zaczyna się moja podróż. Poznaj moje miejsce, mnie i to czym się
                  zajmuję.
                </p>
                <p>Mam na imię Maja i zapraszam Cię do Base Studio.</p>
                <p>
                  W stylizacji paznokci stawiam na jakość i doskonałą obsługę. Dołącz do grona
                  moich klientów, a wspólnie rozwiniemy umiejętności i wspólnie odniesiemy
                  sukces = zadowolenie.
                </p>
                <p>
                  Cieszę się, że jesteś tutaj i jesteś częścią naszej historii.
                </p>
              </div>
            </MotionReveal>

            <ul className="mt-10 space-y-5">
              {features.map((f, i) => (
                <MotionReveal key={f.title} delay={0.15 + i * 0.08}>
                  <li className="flex items-start gap-4">
                    <span
                      className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#F0E0DC]"
                      aria-hidden
                    >
                      <f.icon className="size-6 text-[#9BAA94]" strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="mb-1 font-semibold text-[#3D3D3D]">{f.title}</h3>
                      <p className="text-sm text-[#6B6B6B]">{f.text}</p>
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
