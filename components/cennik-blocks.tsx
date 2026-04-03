import type { LucideIcon } from "lucide-react";
import { Layers, Palette, Sparkles, Trash2 } from "lucide-react";
import Link from "next/link";
import { CENNIK, type PriceCategory } from "@/lib/cennik-data";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  manicure: Sparkles,
  przedluzenie: Layers,
  usuwanie: Trash2,
  zdobienia: Palette,
};

const CARD_BG =
  "linear-gradient(180deg, #FAF7F4 0%, #F0E6DE 60%, #E0EBE0 100%)";

export function CennikBlocks({
  categories = CENNIK,
  className,
  showAllLink = false,
}: {
  categories?: PriceCategory[];
  className?: string;
  showAllLink?: boolean;
}) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2", className)}>
      {categories.map((cat) => {
        const Icon = CATEGORY_ICONS[cat.id] ?? Sparkles;
        return (
          <article
            key={cat.id}
            id={cat.id}
            className="scroll-mt-24 rounded-2xl border-l-4 border-l-[#9BAA94] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:p-8"
            style={{ background: CARD_BG }}
          >
            <h3 className="flex items-center gap-2 font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#3D3D3D]">
              <Icon
                className="size-5 shrink-0 text-[#7D8E74]"
                strokeWidth={2}
                aria-hidden
              />
              <span className="font-semibold">{cat.title}</span>
            </h3>
            <ul className="mt-5 space-y-0">
              {cat.rows.map((row) => (
                <li
                  key={row.name}
                  className="group flex items-end gap-3 rounded-lg px-2 py-3 transition-colors duration-200 ease-out hover:bg-[rgba(155,170,148,0.08)] sm:px-3"
                >
                  <div className="flex min-w-0 flex-1 items-baseline gap-2">
                    <span className="text-sm font-medium text-[#3D3D3D]">
                      {row.name}
                    </span>
                    <span
                      className="min-h-[1px] min-w-[0.5rem] flex-1 border-b border-dotted border-[#D4C4B5]"
                      aria-hidden
                    />
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-[#7D8E74]">
                    {row.price}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
      {showAllLink && (
        <div className="flex items-center justify-center md:col-span-2">
          <Link
            href="/cennik"
            className="text-sm font-medium text-[#7D8E74] underline-offset-4 hover:underline"
          >
            Pełny cennik
          </Link>
        </div>
      )}
    </div>
  );
}
