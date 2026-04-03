"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { SectionShell } from "@/components/section-shell";
import { BEFORE_AFTER_ITEMS } from "@/lib/before-after-data";

export function BeforeAfterSection() {
  return (
    <SectionShell
      id="przed-po"
      className="scroll-mt-20 bg-gradient-to-br from-[var(--sage)]/8 to-[var(--blush)]/8 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="badge-gradient mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold text-[var(--studio-text)] shadow-md">
            Transformacje
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-[var(--sage)] to-[var(--blush)] bg-clip-text text-transparent">
              Przed i po
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Zobacz efekty pracy, przykładowe zestawienia (zdjęcia demonstracyjne).
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={item.before}
                    alt="Przed stylizacją, BASE STUDIO Włocławek"
                    style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={item.after}
                    alt="Po stylizacji, BASE STUDIO Włocławek"
                    style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  />
                }
                className="overflow-hidden rounded-2xl shadow-xl"
                style={{ height: 380, maxHeight: "70vh" }}
                defaultPosition={50}
              />
              <p className="text-center text-sm font-semibold text-foreground">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
