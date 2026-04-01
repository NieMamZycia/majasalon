import type { Metadata } from "next";
import { Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";
import { ScrollProgress } from "@/components/scroll-progress";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MobileCallButton } from "@/components/MobileCallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://basestudio.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "BASE STUDIO - Salon Paznokci Włocławek | Manicure & Pedicure",
    template: "%s | BASE STUDIO Włocławek",
  },
  description:
    "Profesjonalny salon paznokci we Włocławku. Manicure, pedicure, stylizacja hybrydowa i żelowa. Umów wizytę ☎️",
  keywords: [
    "salon paznokci włocławek",
    "manicure włocławek",
    "pedicure włocławek",
    "hybryda włocławek",
    "żel włocławek",
    "BASE STUDIO",
  ],
  authors: [{ name: "BASE STUDIO" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "BASE STUDIO",
    title:
      "BASE STUDIO - Salon Paznokci Włocławek | Manicure & Pedicure",
    description:
      "Profesjonalny salon paznokci we Włocławku. Manicure, pedicure, stylizacja hybrydowa i żelowa.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} min-h-dvh font-sans antialiased`}
      >
        <JsonLd />
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <MobileCallButton />
        <Footer />
      </body>
    </html>
  );
}
