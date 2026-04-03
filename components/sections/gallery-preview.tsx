import Link from "next/link";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { FilterableMasonry } from "@/components/filterable-masonry";

export function GalleryPreviewSection() {
  return (
    <SectionShell
      id="galeria-preview"
      className="section-wash-sage scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-[var(--sage)] to-[var(--blush)] bg-clip-text text-transparent">
                Galeria
              </span>
            </h2>
            <p className="mt-3 max-w-2xl text-[#6B6B6B]">
              Odkryj moją kolekcję kreatywnych prac. Każdy element pokazuje dbałość o
              szczegóły i zaangażowanie w dostarczanie wyników przekraczających
              oczekiwania.
            </p>
          </div>
          <Link
            href="/galeria"
            className="badge-gradient rounded-full px-4 py-2 text-sm font-semibold text-[var(--studio-text)] shadow-sm hover:shadow-md"
          >
            Cała galeria
          </Link>
        </MotionReveal>

        <div className="mt-10">
          <FilterableMasonry />
        </div>
      </div>
    </SectionShell>
  );
}
