import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { GalleryPreviewSection } from "@/components/sections/gallery-preview";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { PricingPreviewSection } from "@/components/sections/pricing-preview";
import { FAQSection } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { LocationSection } from "@/components/sections/location";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GalleryPreviewSection />
      <BeforeAfterSection />
      <PricingPreviewSection />
      <FAQSection />
      <TestimonialsSection />
      <LocationSection />
    </>
  );
}
