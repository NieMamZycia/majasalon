export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  featured?: boolean;
  badge?: string;
  features: string[];
};

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "basic",
    name: "Basic",
    price: "150 zł",
    features: [
      "Manicure klasyczny lub kombinowany",
      "1 kolor hybrydy lub żelu",
      "Krótkie zdobienie (np. kropka)",
      "Napój powitalny",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "220 zł",
    featured: true,
    badge: "HIT",
    features: [
      "Manicure + stylizacja hybrydowa",
      "French lub baby boomer",
      "Średnie zdobienie / folia",
      "Pielęgnacja skórek premium",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "350 zł",
    features: [
      "Manicure + przedłużenie lub mocna stylizacja",
      "Artystyczne zdobienia / ombre",
      "Pedicure hybrydowy (stopy)",
      "Zestaw do domowej pielęgnacji",
    ],
  },
];
