"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { SectionShell } from "@/components/section-shell";
import { BEFORE_AFTER_ITEMS } from "@/lib/before-after-data";
import { cn } from "@/lib/utils";

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
            Przesuń suwak w bok, żeby porównać stan przed i po stylizacji.
          </p>
        </div>

        <div
          className={cn(
            "mx-auto grid",
            BEFORE_AFTER_ITEMS.length > 1
              ? "max-w-7xl gap-y-14 gap-x-10 md:grid-cols-2 md:gap-x-16 lg:gap-x-24"
              : "max-w-lg grid-cols-1 gap-10",
          )}
        >
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={item.before}
                    alt="Przed stylizacją, BASE STUDIO Włocławek"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={item.after}
                    alt="Po stylizacji, BASE STUDIO Włocławek"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                }
                className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5"
                style={{ height: 440, maxHeight: "75vh" }}
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
