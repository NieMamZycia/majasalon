import type { ReactNode } from "react";
import { MotionReveal } from "@/components/motion-reveal";

const CARD_GRADIENT =
  "linear-gradient(180deg, #F0E6DE 0%, #C5D1C0 100%)";
const BTN_GRADIENT =
  "linear-gradient(to right, #C9A99A, #A8B5A0)";

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2 text-sm text-[#4A4A4A]">
      <span className="shrink-0 font-semibold text-[#7D8E74]" aria-hidden>
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

export function PackagesSection() {
  return (
    <section id="pakiety" className="scroll-mt-24 bg-[#FAF7F4] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionReveal>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#7D8E74] sm:text-4xl">
            Pakiety i Vouchery
          </h2>
          <p className="mt-2 text-sm text-[#6B6B6B]">
            Wybierz pakiet lub voucher. Szczegóły usług na stronie{" "}
            <a
              href="/cennik"
              className="font-medium text-[#7D8E74] underline-offset-2 hover:underline"
            >
              cennika
            </a>
            .
          </p>
        </MotionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <MotionReveal delay={0.05}>
            <article
              className="relative flex h-full flex-col rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              style={{ background: CARD_GRADIENT }}
            >
              <span className="absolute right-6 top-6 rounded-full bg-[#B86B3A] px-2.5 py-0.5 text-xs font-semibold text-white">
                -15%
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#3D3D3D]">
                Basic
              </h3>
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
                className="mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                style={{ background: BTN_GRADIENT }}
              >
                Kup pakiet
              </a>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <article
              className="relative flex h-full flex-col rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              style={{ background: CARD_GRADIENT }}
            >
              <span className="absolute left-6 top-6 flex items-center gap-1 rounded-full bg-[#C67D4A] px-2.5 py-0.5 text-xs font-semibold text-white">
                HIT <span aria-hidden>🔥</span>
              </span>
              <span className="absolute right-6 top-6 rounded-full bg-[#B86B3A] px-2.5 py-0.5 text-xs font-semibold text-white">
                -25%
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#3D3D3D]">
                Standard
              </h3>
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
                className="mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                style={{ background: BTN_GRADIENT }}
              >
                Kup pakiet
              </a>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.15}>
            <article
              className="flex h-full flex-col rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
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
                className="mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
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
