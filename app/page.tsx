import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { GalleryPreviewSection } from "@/components/sections/gallery-preview";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { PricingPreviewSection } from "@/components/sections/pricing-preview";
import { PackagesSection } from "@/components/sections/packages-section";
import { PromotionsSection } from "@/components/sections/promotions-section";
import { LocationSection } from "@/components/sections/location";

/** Ustaw na `true`, aby ponownie pokazać sekcję „Transformacje / Przed i po”. */
const SHOW_BEFORE_AFTER_SECTION = true;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GalleryPreviewSection />
      {SHOW_BEFORE_AFTER_SECTION && <BeforeAfterSection />}
      <PricingPreviewSection />
      <PackagesSection />
      <PromotionsSection />
      <LocationSection />
    </>
  );
}
