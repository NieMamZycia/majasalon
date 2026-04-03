import { SITE } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "BeautySalon"],
      "@id": "https://basestudio.pl/#business",
      name: "BASE STUDIO",
      description:
        "Stylizacja paznokci we Włocławku — manicure, hybryda, żel i zdobienia.",
      url: "https://basestudio.pl",
      telephone: SITE.phone,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Sienkiewicza 12A, piętro 1",
        postalCode: "87-800",
        addressLocality: "Włocławek",
        addressCountry: "PL",
      },
      areaServed: { "@type": "City", name: "Włocławek" },
      priceRange: "$$",
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
