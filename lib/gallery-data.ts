import { IMAGES } from "@/lib/constants";

export type GalleryFilter = "all" | "manicure" | "pedicure" | "hybryda";

export type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<GalleryFilter, "all">;
};

/** Kategorie przypisane demonstracyjnie do zdjęć z galerii. */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: IMAGES.gallery[0],
    alt:
      "Manicure naturalny, realizacja BASE STUDIO salon paznokci Włocławek",
    category: "manicure",
  },
  {
    src: IMAGES.gallery[1],
    alt: "Stylizacja hybrydowa Włocławek, BASE STUDIO",
    category: "hybryda",
  },
  {
    src: IMAGES.gallery[2],
    alt: "Pedicure i pielęgnacja stóp, BASE STUDIO Włocławek",
    category: "pedicure",
  },
  {
    src: IMAGES.gallery[3],
    alt: "Manicure klasyczny, salon BASE STUDIO",
    category: "manicure",
  },
  {
    src: IMAGES.gallery[4],
    alt: "Hybryda z połyskiem, Włocławek BASE STUDIO",
    category: "hybryda",
  },
  {
    src: IMAGES.gallery[5],
    alt: "Zdobienia i manicure artystyczny Włocławek",
    category: "manicure",
  },
  {
    src: IMAGES.gallery[6],
    alt: "Pedicure hybrydowy, BASE STUDIO",
    category: "pedicure",
  },
  {
    src: IMAGES.gallery[7],
    alt: "Hybryda french, salon paznokci Włocławek",
    category: "hybryda",
  },
  {
    src: IMAGES.gallery[8],
    alt: "Pedicure relaksacyjny Włocławek BASE STUDIO",
    category: "pedicure",
  },
  {
    src: IMAGES.gallery[9],
    alt: "Manicure i stylizacja, galeria BASE STUDIO",
    category: "manicure",
  },
];

export const GALLERY_FILTER_LABELS: Record<GalleryFilter, string> = {
  all: "Wszystkie",
  manicure: "Manicure",
  pedicure: "Pedicure",
  hybryda: "Hybryda",
};
