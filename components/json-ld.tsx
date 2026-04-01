import { SITE } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "BeautySalon"],
      "@id": "https://basestudio.pl/#business",
      name: "BASE STUDIO",
      description:
        "Profesjonalny salon paznokci we Włocławku. Manicure, pedicure, stylizacja hybrydowa i żelowa.",
      url: "https://basestudio.pl",
      telephone: SITE.phone,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
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
