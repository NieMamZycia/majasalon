export type PriceRow = { name: string; price: string };

export type PriceCategory = {
  id: string;
  title: string;
  rows: PriceRow[];
};

export const CENNIK: PriceCategory[] = [
  {
    id: "manicure",
    title: "Manicure",
    rows: [
      { name: "Manicure klasyczny", price: "60 zł" },
      { name: "Manicure męski", price: "60 zł" },
      { name: "Manicure hybrydowy", price: "100 zł" },
      { name: "Manicure z utwardzeniem", price: "120 zł" },
    ],
  },
  {
    id: "przedluzenie",
    title: "Przedłużenie na formie",
    rows: [
      { name: "Przedłużenie na formie dolnej 1–3 cm", price: "150–170 zł" },
      { name: "Przedłużenie na formie dolnej od 3 cm", price: "180–200 zł" },
    ],
  },
  {
    id: "usuwanie",
    title: "Usuwanie stylizacji",
    rows: [
      { name: "Usunięcie hybrydy", price: "40 zł" },
      { name: "Usunięcie stylizacji żelowej", price: "60 zł" },
    ],
  },
  {
    id: "zdobienia",
    title: "Zdobienia",
    rows: [{ name: "Zdobienia (dopłata)", price: "+15 zł" }],
  },
];
