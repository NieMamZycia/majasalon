import type { Metadata } from "next";
import { ServiceDetail } from "@/components/service-detail";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pedicure Włocławek",
  description:
    "Pedicure klasyczny i hybrydowy we Włocławku — BASE STUDIO. Pielęgnacja stóp, opracowanie paznokci, relaks.",
  keywords: ["pedicure włocławek", "pedicure hybrydowy", "salon paznokci włocławek"],
};

export default function PedicurePage() {
  return (
    <ServiceDetail
      title="Pedicure Włocławek"
      intro="Zadbaj o stopy przez cały rok — pedicure w BASE STUDIO to higiena, estetyka i chwila relaksu."
      image={IMAGES.pedicure}
      imageAlt="Pedicure Włocławek — pielęgnacja stóp w salonie BASE STUDIO"
      paragraphs={[
        "Pedicure w naszym salonie zaczynamy od kąpieli i delikatnego złuszczenia, a następnie precyzyjnie opracowujemy płytkę i skórki. Oferujemy wykożenie lakierem klasycznym lub hybrydowym.",
        "Dbamy o sterylność i komfort — każda klientka otrzymuje indywidualne podejście, zwłaszcza przy problemach skórnych czy wrastających paznokciach (w ramach standardowej pielęgnacji).",
        "Na specjalne okazje polecamy pedicure z dodatkowym peelingiem lub masażem stóp. Szczegóły i ceny znajdziesz w zakładce cennik.",
      ]}
    />
  );
}
