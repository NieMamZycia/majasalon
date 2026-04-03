import { IMAGES } from "@/lib/constants";

export type GalleryItem = {
  src: string;
  alt: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: IMAGES.gallery[0],
    alt: "Manicure naturalny, realizacja BASE STUDIO salon paznokci Włocławek",
  },
  { src: IMAGES.gallery[1], alt: "Stylizacja hybrydowa Włocławek, BASE STUDIO" },
  { src: IMAGES.gallery[2], alt: "Stylizacja paznokci, BASE STUDIO Włocławek" },
  { src: IMAGES.gallery[3], alt: "Manicure klasyczny, salon BASE STUDIO" },
  { src: IMAGES.gallery[4], alt: "Hybryda z połyskiem, Włocławek BASE STUDIO" },
  { src: IMAGES.gallery[5], alt: "Zdobienia i manicure artystyczny Włocławek" },
  { src: IMAGES.gallery[6], alt: "Stylizacja hybrydowa, BASE STUDIO" },
  { src: IMAGES.gallery[7], alt: "Hybryda french, salon paznokci Włocławek" },
  { src: IMAGES.gallery[8], alt: "Manicure i stylizacja Włocławek BASE STUDIO" },
  { src: IMAGES.gallery[9], alt: "Manicure i stylizacja, galeria BASE STUDIO" },
];
