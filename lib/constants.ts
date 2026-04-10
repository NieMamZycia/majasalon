export const SITE = {
  name: "BASE STUDIO",
  tagline: "Stylizacja paznokci",
  phone: "+48 660 407 737",
  phoneHref: "tel:+48660407737",
  email: "kontakt@basestudio.pl",
  mailtoHref: "mailto:kontakt@basestudio.pl",
  address: "ul. Sienkiewicza 12A, piętro 1, 87-800 Włocławek",
  addressLines: [
    "ul. Sienkiewicza 12A",
    "piętro 1",
    "87-800 Włocławek",
  ] as const,
  instagram: "https://www.instagram.com/basestudionails/",
  instagramHandle: "@basestudionails",
  facebook: "https://www.facebook.com/profile.php?id=61573267797676",
  facebookLabel: "BASE STUDIO Włocławek",
} as const;

export const IMAGES = {
  hero: "/images/hero-base-studio.png",
  manicure: "/images/uslugi-manicure.png",
  hybryda: "/images/hybryda-uslugi.png",
  zel: "/images/zel-uslugi.png",
  zdobienia: "/images/zdobienia-uslugi.png",
} as const;

/** Zdjęcia wnętrza salonu — sekcja „O mnie” (karuzela). */
export const ABOUT_SALON_SLIDES = [
  {
    src: "/images/about-o-mnie-salon.png",
    alt: "BASE STUDIO — stanowiska manicure, złote logo na ścianie, rośliny i jasne wnętrze salonu",
  },
  {
    src: "/images/about-o-mnie-wnetrze.png",
    alt: "BASE STUDIO — detal wnętrza, światło dzienne i dekoracje na biurku",
  },
  {
    src: "/images/about-salon-4.png",
    alt: "Stanowiska manicure i sofa w salonie BASE STUDIO we Włocławku",
  },
] as const;

export const MAPS_EMBED =
  "https://maps.google.com/maps?q=52.64014352936314,19.045186760163656&z=17&hl=pl&output=embed";
