"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type Slide = { readonly src: string; readonly alt: string };

type AboutSalonCarouselProps = {
  slides: readonly Slide[];
  className?: string;
};

export function AboutSalonCarousel({ slides, className }: AboutSalonCarouselProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-border shadow-lg",
        className,
      )}
    >
      <Carousel opts={{ loop: true, align: "start" }} className="w-full" aria-label="Zdjęcia wnętrza salonu">
        <CarouselContent className="-ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.src} className="basis-full pl-0">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="outline"
          className="left-2 border-white/50 bg-white/90 text-foreground shadow-md hover:bg-white sm:left-3"
          aria-label="Poprzednie zdjęcie"
        />
        <CarouselNext
          variant="outline"
          className="right-2 border-white/50 bg-white/90 text-foreground shadow-md hover:bg-white sm:right-3"
          aria-label="Następne zdjęcie"
        />
      </Carousel>
    </div>
  );
}
