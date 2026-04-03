import Link from "next/link";
import { CENNIK, type PriceCategory } from "@/lib/cennik-data";
import { cn } from "@/lib/utils";

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
      {categories.map((cat) => (
        <article
          key={cat.id}
          id={cat.id}
          className="scroll-mt-24 rounded-2xl border border-black/[0.04] border-l-4 border-l-[#9BAA94] bg-[#FAF7F4] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:p-8"
        >
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#3D3D3D]">
            {cat.title}
          </h3>
          <ul className="mt-5 space-y-0">
            {cat.rows.map((row) => (
              <li
                key={row.name}
                className="group flex items-end gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-[#B8C9B5]/15 sm:px-3"
              >
                <div className="flex min-w-0 flex-1 items-baseline gap-2">
                  <span className="text-sm text-[#3D3D3D]">{row.name}</span>
                  <span
                    className="min-h-[1px] min-w-[0.5rem] flex-1 border-b border-dotted border-[#9BAA94]/50"
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
      ))}
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
