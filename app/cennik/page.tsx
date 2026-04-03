import type { Metadata } from "next";
import { MotionReveal } from "@/components/motion-reveal";
import { CennikBlocks } from "@/components/cennik-blocks";

export const metadata: Metadata = {
  title: "Cennik",
  description:
    "Cennik manicure i stylizacji paznokci we Włocławku, BASE STUDIO. Hybryda, żel, przedłużenia.",
};

export default function CennikPage() {
  return (
    <div className="bg-[var(--bg)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-semibold text-[#7D8E74]">
            Cennik
          </h1>
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[#6B6B6B]">
            Aktualne ceny usług. Umów wizytę telefonicznie lub przez formularz.
          </p>
        </MotionReveal>
        <div className="mt-12">
          <CennikBlocks />
        </div>
      </div>
    </div>
  );
}
