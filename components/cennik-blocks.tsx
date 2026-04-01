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
          className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-foreground">
            {cat.title}
          </h3>
          <ul className="mt-4 space-y-3">
            {cat.rows.map((row) => (
              <li
                key={row.name}
                className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-sm text-muted-foreground">{row.name}</span>
                <span className="shrink-0 text-sm font-semibold text-primary">
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
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Pełny cennik
          </Link>
        </div>
      )}
    </div>
  );
}
