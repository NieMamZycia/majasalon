import { MotionReveal } from "@/components/motion-reveal";

export function PromotionsSection() {
  return (
    <section id="promocje" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <MotionReveal>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#7D8E74] sm:text-4xl">
            Aktualne akcje promocyjne
          </h2>
          <p className="mt-6 rounded-2xl border border-dashed border-[#B8C9B5]/60 bg-[#FAF7F4] px-6 py-12 text-[#6B6B6B]">
            Wkrótce pojawią się tutaj aktualne promocje.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
