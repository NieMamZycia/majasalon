import type { Metadata } from "next";
import { ServiceDetail } from "@/components/service-detail";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Stylizacja hybrydowa Włocławek",
  description:
    "Hybryda we Włocławku — trwała stylizacja paznokci w BASE STUDIO. Bogata paleta kolorów, french, ombre.",
  keywords: ["hybryda włocławek", "manicure hybrydowy", "salon paznokci"],
};

export default function HybrydaPage() {
  return (
    <ServiceDetail
      title="Stylizacja hybrydowa"
      intro="Trwały połysk i odporność na codzienne czynności — hybryda w BASE STUDIO to jakość i modny wygląd."
      image={IMAGES.hybryda}
      imageAlt="Hybryda Włocławek — manicure hybrydowy w salonie BASE STUDIO"
      paragraphs={[
        "Lakier hybrydowy to jedna z najpopularniejszych metod stylizacji — łączy trwałość z pięknym, błyszczącym wykończeniem. Dobieramy produkty do kondycji Twojej płytki.",
        "W ofercie m.in. jednolite kolory, french, baby boomer oraz lekkie zdobienia. Przed aplikacją przygotowujemy paznokieć, by stylizacja była bezpieczna i estetyczna.",
        "Planujesz zmianę stylizacji lub przerwę od hybrydy? Chętnie doradzimy w salonie we Włocławku — zarezerwuj termin przez kontakt.",
      ]}
    />
  );
}
