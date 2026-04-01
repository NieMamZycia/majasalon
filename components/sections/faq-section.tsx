"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionShell } from "@/components/section-shell";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { SITE } from "@/lib/constants";

export function FAQSection() {
  return (
    <SectionShell id="faq" className="scroll-mt-20 bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="badge-gradient mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold text-[var(--studio-text)] shadow-md">
            FAQ
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-[var(--sage)] to-[var(--blush)] bg-clip-text text-transparent">
              Najczęściej zadawane pytania
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Wszystko, co warto wiedzieć przed wizytą
          </p>
        </div>

        <Accordion
          multiple={false}
          defaultValue={[]}
          className="flex flex-col gap-3"
        >
          {FAQ_ITEMS.map((faq, idx) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${idx}`}
              className="rounded-xl border border-border px-4 transition-colors hover:border-[var(--sage)]/50"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-[var(--sage)]/12 to-[var(--blush)]/12 p-8 text-center">
          <p className="text-lg font-medium text-foreground">
            Nie znalazłaś odpowiedzi?
          </p>
          <a
            href={SITE.phoneHref}
            className="badge-gradient mt-4 inline-flex rounded-full px-8 py-3 text-sm font-semibold text-[var(--studio-text)] shadow-md transition-transform hover:scale-105"
          >
            Zadzwoń: {SITE.phone}
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
