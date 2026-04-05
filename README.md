# BASE STUDIO — salon paznokci (Włocławek)

Strona marketingowa: Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, Lucide (ikony marek jako SVG w stopce).

## Wymagania

- Node.js 18.18+ (zalecane 20+)
- npm

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja: [http://localhost:3000](http://localhost:3000).

## Build produkcyjny

```bash
npm run build
npm start
```

## Konfiguracja pod klienta

- **Dane kontaktowe i social:** `lib/constants.ts` (telefon, e-mail, Instagram, Facebook, adres).
- **Mapa:** stała `MAPS_EMBED` w `lib/constants.ts` — URL osadzonej mapy Google.
- **Domena SEO / JSON-LD:** w `app/layout.tsx` (`metadataBase`, `siteUrl`) oraz `components/json-ld.tsx` i `app/sitemap.ts` ustaw docelowy URL (np. `https://twoja-domena.pl`).
- **Formularz kontaktowy (Resend):** skopiuj `.env.example` do `.env.local` i ustaw `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`. Endpoint: `POST /api/contact` (`app/api/contact/route.ts`). Na Vercel dodaj te same zmienne w ustawieniach projektu. **Nie commituj** pliku `.env.local` — zawiera klucz API.

## Struktura tras

| Ścieżka | Opis |
|--------|------|
| `/` | Strona główna (m.in. hero, usługi, galeria, cennik, pakiety, promocje, kontakt) |
| `/uslugi/manicure-wloclawek` | Manicure |
| `/uslugi/hybryda` | Hybryda |
| `/cennik` | Cennik |
| `/galeria` | Galeria + lightbox |
| `/kontakt` | Kontakt + formularz „Umów wizytę” (wysyłka przez Resend) |
