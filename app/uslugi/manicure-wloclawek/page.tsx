import type { Metadata } from "next";
import { ServiceDetail } from "@/components/service-detail";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Manicure Włocławek",
  description:
    "Manicure klasyczny i kombinowany we Włocławku w BASE STUDIO. Profesjonalna pielęgnacja dłoni i paznokci.",
  keywords: ["manicure włocławek", "manicure hybrydowy włocławek", "salon paznokci"],
};

export default function ManicurePage() {
  return (
    <ServiceDetail
      title="Manicure Włocławek"
      intro="Zadbaj o zdrowy wygląd paznokci i skórek, manicure w BASE STUDIO to precyzja, komfort i trwały efekt."
      image={IMAGES.manicure}
      imageAlt="Manicure Włocławek w salonie BASE STUDIO, stylizacja i pielęgnacja paznokci"
      paragraphs={[
        "Manicure to podstawa pięknych dłoni. W naszym salonie we Włocławku oferujemy manicure klasyczny i kombinowany z dokładnym opracowaniem skórek oraz nadaniem idealnego kształtu.",
        "Pracujemy na sprawdzonych preparatach i sterylnych narzędziach. Przed zabiegiem doradzamy, jak pielęgnować paznokcie w domu, by stylizacja jak najdłużej wyglądała świeżo.",
        "Chcesz połączyć manicure z lakierem hybrydowym? Zapraszamy także do usług hybrydowych, zobacz cennik i umów wizytę telefonicznie lub przez formularz kontaktowy.",
      ]}
    />
  );
}
