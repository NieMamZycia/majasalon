import type { Metadata } from "next";
import { MotionReveal } from "@/components/motion-reveal";
import { PackagePricing } from "@/components/package-pricing";

export const metadata: Metadata = {
  title: "Cennik",
  description:
    "Pakiety manicure i pedicure we Włocławku — BASE STUDIO. Basic, Standard i Premium.",
};

export default function CennikPage() {
  return (
    <div className="bg-[var(--bg)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-foreground">
            Cennik — pakiety
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Wybierz pakiet lub zapytaj o pojedyncze usługi — dopasujemy ofertę do Twoich
            potrzeb podczas wizyty we Włocławku.
          </p>
        </MotionReveal>
        <div className="mt-12">
          <PackagePricing />
        </div>
      </div>
    </div>
  );
}
