import type { Metadata } from "next";
import { MotionReveal } from "@/components/motion-reveal";
import { FilterableMasonry } from "@/components/filterable-masonry";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Galeria realizacji BASE STUDIO Włocławek — stylizacja paznokci, manicure, hybryda.",
};

export default function GaleriaPage() {
  return (
    <div className="bg-[var(--bg)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-foreground">
            Galeria
          </h1>
          <p className="mt-4 max-w-2xl text-[#6B6B6B]">
            Odkryj moją kolekcję kreatywnych prac. Każdy element pokazuje dbałość o
            szczegóły i zaangażowanie w dostarczanie wyników przekraczających
            oczekiwania.
          </p>
        </MotionReveal>
        <div className="mt-10">
          <FilterableMasonry />
        </div>
      </div>
    </div>
  );
}
