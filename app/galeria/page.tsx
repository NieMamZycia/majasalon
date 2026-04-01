import type { Metadata } from "next";
import { MotionReveal } from "@/components/motion-reveal";
import { FilterableMasonry } from "@/components/filterable-masonry";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Galeria realizacji — manicure, pedicure, hybryda. Filtry i lightbox BASE STUDIO Włocławek.",
};

export default function GaleriaPage() {
  return (
    <div className="bg-[var(--bg)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-foreground">
            Galeria
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Filtruj po kategorii, najedź na zdjęcie i otwórz lightbox — przesuń w bok,
            by przełączać realizacje, w dół, by zamknąć.
          </p>
        </MotionReveal>
        <div className="mt-10">
          <FilterableMasonry />
        </div>
      </div>
    </div>
  );
}
