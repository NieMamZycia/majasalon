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
    priceFrom: "od 60 zł",
    image: IMAGES.manicure,
    imageAlt:
      "Profesjonalna stylizacja paznokci — manicure hybrydowy w kolorze nude, owalny kształt, BASE STUDIO",
    href: "/uslugi/manicure-wloclawek",
  },
  {
    slug: "hybryda",
    title: "Hybryda",
    description:
      "Trwała stylizacja hybrydowa z bogatą gamą kolorów i pięknym połyskiem.",
    priceFrom: "od 100 zł",
    image: IMAGES.hybryda,
    imageAlt: "Stylizacja hybrydowa paznokci salon Włocławek BASE STUDIO",
    href: "/uslugi/hybryda",
  },
  {
    slug: "zel",
    title: "Żel",
    description:
      "Przedłużanie i wzmacnianie paznokci żelem, idealne na specjalne okazje.",
    priceFrom: "od 150 zł",
    image: IMAGES.zel,
    imageAlt: "Paznokcie żelowe Włocławek, BASE STUDIO salon paznokci",
    href: "/cennik",
  },
  {
    slug: "zdobienia",
    title: "Zdobienia",
    description:
      "French, ombre, folie, stemple i artystyczne wzory dopasowane do Twojego stylu.",
    priceFrom: "dopłata +15 zł",
    image: IMAGES.zdobienia,
    imageAlt:
      "Zdobienia i nail art — geometria, cyrkonie, brokat i złote akcenty, BASE STUDIO Włocławek",
    href: "/galeria",
  },
];
