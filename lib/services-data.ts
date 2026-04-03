import { IMAGES } from "@/lib/constants";

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  priceFrom: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "manicure",
    title: "Manicure",
    description:
      "Klasyczny i kombinowany manicure z dbałością o skórki i kształt paznokcia.",
    priceFrom: "od 45 zł",
    image: IMAGES.manicure,
    imageAlt:
      "Manicure we Włocławku w salonie BASE STUDIO, profesjonalna stylizacja paznokci",
    href: "/uslugi/manicure-wloclawek",
  },
  {
    slug: "hybryda",
    title: "Hybryda",
    description:
      "Trwała stylizacja hybrydowa z bogatą gamą kolorów i pięknym połyskiem.",
    priceFrom: "od 90 zł",
    image: IMAGES.hybryda,
    imageAlt: "Stylizacja hybrydowa paznokci salon Włocławek BASE STUDIO",
    href: "/uslugi/hybryda",
  },
  {
    slug: "zel",
    title: "Żel",
    description:
      "Przedłużanie i wzmacnianie paznokci żelem, idealne na specjalne okazje.",
    priceFrom: "od 110 zł",
    image: IMAGES.zel,
    imageAlt: "Paznokcie żelowe Włocławek, BASE STUDIO salon paznokci",
    href: "/cennik",
  },
  {
    slug: "zdobienia",
    title: "Zdobienia",
    description:
      "French, ombre, folie, stemple i artystyczne wzory dopasowane do Twojego stylu.",
    priceFrom: "od 15 zł",
    image: IMAGES.zdobienia,
    imageAlt: "Zdobienia paznokci artystyczne Włocławek BASE STUDIO",
    href: "/galeria",
  },
];
