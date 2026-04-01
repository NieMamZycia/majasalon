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
      { name: "Manicure klasyczny", price: "45 zł" },
      { name: "Manicure kombinowany", price: "55 zł" },
      { name: "Manicure z odżywką", price: "50 zł" },
      { name: "French na naturalnej płytce", price: "60 zł" },
    ],
  },
  {
    id: "hybryda",
    title: "Hybryda",
    rows: [
      { name: "Hybryda — jednolity kolor", price: "90 zł" },
      { name: "Hybryda + french / baby boomer", price: "100 zł" },
      { name: "Hybryda + lekkie zdobienie", price: "110 zł" },
      { name: "Zmiana hybrydy (bez przedłużenia)", price: "85 zł" },
    ],
  },
  {
    id: "zel",
    title: "Żel",
    rows: [
      { name: "Żel na naturalnej płytce", price: "110 zł" },
      { name: "Przedłużenie żelem", price: "130 zł" },
      { name: "Żel + french / ombre", price: "125 zł" },
      { name: "Uzupełnienie żelu", price: "95 zł" },
    ],
  },
  {
    id: "pedicure",
    title: "Pedicure",
    rows: [
      { name: "Pedicure klasyczny", price: "80 zł" },
      { name: "Pedicure hybrydowy", price: "120 zł" },
      { name: "Pedicure + peeling", price: "100 zł" },
      { name: "Pedicure relaksacyjny (spa)", price: "140 zł" },
    ],
  },
];
