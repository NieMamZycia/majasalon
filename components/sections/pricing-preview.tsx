import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { PackagePricing } from "@/components/package-pricing";
import Link from "next/link";

export function PricingPreviewSection() {
  return (
    <SectionShell
      id="cennik-preview"
      className="scroll-mt-20 bg-[var(--bg)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-[var(--sage)] to-[var(--blush)] bg-clip-text text-transparent">
              Pakiety i cennik
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Wybierz pakiet dopasowany do okazji — zawsze możesz też umówić pojedyncze
            usługi. Szczegóły na stronie cennika.
          </p>
        </MotionReveal>
        <MotionReveal delay={0.08} className="mt-12">
          <PackagePricing />
        </MotionReveal>
        <MotionReveal delay={0.12} className="mt-10 text-center">
          <Link
            href="/cennik"
            className="badge-gradient inline-flex rounded-full px-5 py-2 text-sm font-semibold text-[var(--studio-text)] shadow-md transition-shadow hover:shadow-lg"
          >
            Pełna strona cennika
          </Link>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
