import type { ReactNode } from "react";
import { Check, Flame } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { cn } from "@/lib/utils";

const CARD_GRADIENT =
  "linear-gradient(180deg, #FAF7F4 0%, #F0E6DE 40%, #D8E2D4 80%, #C5D1C0 100%)";
const BTN_GRADIENT = "linear-gradient(to right, #C9A99A, #9BAA94)";

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm text-[#4A4A4A]">
      <span
        className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#9BAA94]"
        aria-hidden
      >
        <Check className="size-3 text-white" strokeWidth={3} />
      </span>
      <span className="pt-0.5">{children}</span>
    </li>
  );
}

const discountBadge =
  "absolute top-4 right-4 z-[1] rounded-[20px] bg-[#B86B3A] px-[14px] py-1.5 text-xs font-bold text-white";

export function PackagesSection() {
  return (
    <section id="pakiety" className="scroll-mt-24 bg-[#FAF7F4] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionReveal>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#7D8E74] sm:text-4xl">
            Pakiety i Vouchery
          </h2>
          <p className="mt-2 text-sm text-[#6B6B6B]">
            Wybierz pakiet lub voucher. Najpiękniejszy voucher dostępny w salonie
            stacjonarnie.
          </p>
        </MotionReveal>

        <div className="mt-10 grid items-center gap-6 md:grid-cols-3 md:gap-5 md:py-3">
          <MotionReveal delay={0.05}>
            <article
              className={cn(
                "package-card relative flex h-full flex-col rounded-[20px] p-8 pb-8 pt-14 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out",
                "hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
              )}
              style={{ background: CARD_GRADIENT }}
            >
              <span className={discountBadge}>-15%</span>
              <h3 className="font-serif text-xl font-semibold text-[#3D3D3D]">A</h3>
              <p className="mt-3 text-2xl font-bold tracking-tight text-[#3D3D3D]">
                3 WIZYTY
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                <CheckItem>Rabat 15% na każdą wizytę z pakietu</CheckItem>
                <CheckItem>Dowolne usługi z cennika</CheckItem>
                <CheckItem>Pakiet ważny 12 miesięcy</CheckItem>
                <CheckItem>Elastyczne umawianie terminów</CheckItem>
              </ul>
              <a
                href="/kontakt"
                className="mt-8 inline-flex w-full items-center justify-center rounded-[25px] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-[filter] duration-200 hover:brightness-[0.95]"
                style={{ background: BTN_GRADIENT }}
              >
                Kup pakiet
              </a>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <article
              className={cn(
                "package-card relative z-[2] flex h-full flex-col rounded-[20px] border-2 border-[#9BAA94] p-8 pb-8 pt-14 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out",
                "md:scale-[1.03]",
                "hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
              )}
              style={{ background: CARD_GRADIENT }}
            >
              <div
                className="absolute top-4 right-4 z-[1] flex max-w-[calc(100%-2rem)] flex-wrap items-center justify-end gap-2"
                aria-hidden
              >
                <span className="flex items-center gap-1 rounded-[20px] bg-[#C67D4A] px-[14px] py-1.5 text-xs font-bold text-white">
                  HIT
                  <Flame className="size-3.5 shrink-0" aria-hidden />
                </span>
                <span className="rounded-[20px] bg-[#B86B3A] px-[14px] py-1.5 text-xs font-bold text-white">
                  -25%
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#3D3D3D]">B</h3>
              <p className="mt-3 text-2xl font-bold tracking-tight text-[#3D3D3D]">
                5 WIZYT
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                <CheckItem>Rabat 25% na każdą wizytę z pakietu</CheckItem>
                <CheckItem>Dowolne usługi z cennika</CheckItem>
                <CheckItem>Pakiet ważny 12 miesięcy</CheckItem>
                <CheckItem>Priorytetowe rezerwacje terminów</CheckItem>
              </ul>
              <a
                href="/kontakt"
                className="mt-8 inline-flex w-full items-center justify-center rounded-[25px] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-[filter] duration-200 hover:brightness-[0.95]"
                style={{ background: BTN_GRADIENT }}
              >
                Kup pakiet
              </a>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <article
              className={cn(
                "package-card relative flex h-full flex-col rounded-[20px] p-8 pb-8 pt-12 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out",
                "hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
              )}
              style={{ background: CARD_GRADIENT }}
            >
              <h3 className="font-serif text-xl font-semibold text-[#3D3D3D]">
                Voucher Prezentowy
              </h3>
              <p className="mt-3 text-2xl font-bold tracking-tight text-[#3D3D3D]">
                od 100 zł
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                <CheckItem>Idealny prezent na każdą okazję</CheckItem>
                <CheckItem>Dowolna kwota do wykorzystania</CheckItem>
                <CheckItem>Elegancka karta podarunkowa</CheckItem>
                <CheckItem>Ważny 6 miesięcy od zakupu</CheckItem>
              </ul>
              <a
                href="/kontakt"
                className="mt-8 inline-flex w-full items-center justify-center rounded-[25px] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-[filter] duration-200 hover:brightness-[0.95]"
                style={{ background: BTN_GRADIENT }}
              >
                Kup voucher
              </a>
            </article>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
