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
      "Manicure we Włocławku w salonie BASE STUDIO — profesjonalna stylizacja paznokci",
    href: "/uslugi/manicure-wloclawek",
  },
  {
    slug: "pedicure",
    title: "Pedicure",
    description:
      "Relaksujący pedicure z opracowaniem stóp i wykończeniem lakierem lub bez.",
    priceFrom: "od 80 zł",
    image: IMAGES.pedicure,
    imageAlt:
      "Pedicure Włocławek — pielęgnacja stóp i paznokci w salonie BASE STUDIO",
    href: "/uslugi/pedicure-wloclawek",
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
      "Przedłużanie i wzmacnianie paznokci żelem — idealne na specjalne okazje.",
    priceFrom: "od 110 zł",
    image: IMAGES.zel,
    imageAlt: "Paznokcie żelowe Włocławek — BASE STUDIO salon paznokci",
    href: "/cennik#zel",
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
  {
    slug: "pielegnacja",
    title: "Pielęgnacja",
    description:
      "Odżywienie, regeneracja i zabiegi wspierające zdrowy wygląd paznokci.",
    priceFrom: "od 30 zł",
    image: IMAGES.pielegnacja,
    imageAlt: "Pielęgnacja dłoni i paznokci salon Włocławek",
    href: "/cennik",
  },
];
