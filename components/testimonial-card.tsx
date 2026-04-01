import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
  initials: string;
};

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "h-full border-white/40 bg-gradient-to-br from-[var(--blush)]/95 via-[var(--mauve)]/88 to-[var(--sage)]/85 shadow-xl backdrop-blur-sm transition-shadow hover:shadow-2xl",
        className
      )}
    >
      <CardContent className="flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <div
            className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/35 text-sm font-bold text-[var(--studio-text)] shadow-inner"
            aria-hidden
          >
            {testimonial.initials}
          </div>
          <div>
            <p className="font-semibold text-[var(--studio-text)]">
              {testimonial.name}
            </p>
            <div
              className="mt-0.5 flex gap-0.5"
              aria-label={`Ocena ${testimonial.rating} na 5`}
            >
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-[var(--coral)] text-[var(--coral)]"
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </div>
        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--studio-text)]/90">
          „{testimonial.quote}”
        </blockquote>
      </CardContent>
    </Card>
  );
}
