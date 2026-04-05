"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY_ITEMS } from "@/lib/gallery-data";

export function FilterableMasonry() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (GALLERY_ITEMS.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-[#B8C9B5]/60 bg-[#FAF7F4] px-6 py-14 text-center text-sm text-[#6B6B6B]">
        Galeria zostanie wkrótce uzupełniona nowymi realizacjami.
      </p>
    );
  }

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_ITEMS.map((item, i) => (
          <button
            key={item.src + i}
            type="button"
            onClick={() => setLightbox(i)}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-sm ring-1 ring-border/40 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9BAA94]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          aria-label="Zamknij podgląd"
        >
          <span className="relative h-[min(85vh,800px)] w-full max-w-3xl">
            <Image
              src={GALLERY_ITEMS[lightbox].src}
              alt={GALLERY_ITEMS[lightbox].alt}
              fill
              className="rounded-lg object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </span>
        </button>
      )}
    </>
  );
}
