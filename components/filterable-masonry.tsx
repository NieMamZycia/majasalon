"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  type PanInfo,
} from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  GALLERY_FILTER_LABELS,
  GALLERY_ITEMS,
  type GalleryFilter,
  type GalleryItem,
} from "@/lib/gallery-data";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const spans = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[5/4]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[3/4]",
];

const filters: GalleryFilter[] = ["all", "manicure", "pedicure", "hybryda"];

type FilterableMasonryProps = {
  className?: string;
  items?: GalleryItem[];
};

export function FilterableMasonry({
  className,
  items = GALLERY_ITEMS,
}: FilterableMasonryProps) {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((it) => it.category === filter);
  }, [filter, items]);

  const openAt = useCallback(
    (item: GalleryItem) => {
      const i = filtered.findIndex((x) => x.src === item.src);
      setActive(i >= 0 ? i : 0);
      setOpen(true);
    },
    [filtered]
  );

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => {
        const n = filtered.length;
        if (n === 0) return 0;
        return (i + dir + n) % n;
      });
    },
    [filtered.length]
  );

  const onPanEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      const { offset, velocity } = info;
      if (offset.y > 100 || velocity.y > 400) {
        setOpen(false);
        return;
      }
      if (offset.x < -70 || velocity.x < -400) go(1);
      if (offset.x > 70 || velocity.x > 400) go(-1);
    },
    [go]
  );

  const current = filtered[active];

  return (
    <>
      <LayoutGroup id="gallery-filters">
        <motion.div layout className="mb-8 flex flex-wrap gap-2 sm:gap-3">
          {filters.map((f) => (
            <motion.button
              key={f}
              type="button"
              layout
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-shadow",
                filter === f
                  ? "badge-gradient text-[var(--studio-text)] shadow-md"
                  : "bg-[var(--sage)]/15 text-[var(--studio-text)] hover:bg-[var(--blush)]/30"
              )}
            >
              {GALLERY_FILTER_LABELS[f]}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className={cn(
            "columns-2 gap-4 space-y-4 sm:columns-3 lg:gap-5",
            className
          )}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((item, i) => (
              <motion.div
                key={`${filter}-${item.src}`}
                layout
                initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="break-inside-avoid"
              >
                <motion.button
                  type="button"
                  layout
                  onClick={() => openAt(item)}
                  whileHover={{ scale: 1.04, rotate: 1.2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className={cn(
                    "group relative block w-full overflow-hidden rounded-2xl border border-border/80 bg-muted shadow-md focus-visible:ring-2 focus-visible:ring-[var(--coral)] focus-visible:outline-none",
                    spans[i % spans.length]
                  )}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-[filter] duration-500 group-hover:brightness-105 group-hover:contrast-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-h-[92vh] max-w-[min(96vw,56rem)] border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-[min(96vw,56rem)]"
          showCloseButton
        >
          <DialogTitle className="sr-only">
            {current?.alt ?? "Powiększone zdjęcie z galerii BASE STUDIO"}
          </DialogTitle>
          {current && (
            <div className="relative flex flex-col gap-3">
              <motion.div
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.15}
                onDragEnd={onPanEnd}
                className="relative aspect-[4/3] w-full cursor-grab overflow-hidden rounded-xl bg-black/90 active:cursor-grabbing"
              >
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="pointer-events-none object-contain select-none"
                  sizes="100vw"
                  priority
                  draggable={false}
                />
              </motion.div>
              <p className="rounded-lg bg-black/55 px-3 py-2 text-center text-xs text-white/90 backdrop-blur-sm">
                Przesuń palcem: w bok — kolejne zdjęcie, w dół — zamknij
              </p>
              <div className="flex justify-center gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="rounded-full border border-white/30 bg-white/10 p-2 text-white backdrop-blur-sm hover:bg-white/20"
                  aria-label="Poprzednie zdjęcie"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="rounded-full border border-white/30 bg-white/10 p-2 text-white backdrop-blur-sm hover:bg-white/20"
                  aria-label="Następne zdjęcie"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
