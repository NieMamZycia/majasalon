"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { TestimonialCard } from "@/components/testimonial-card";
import { TESTIMONIALS } from "@/lib/testimonials-data";

export function TestimonialsSwiper() {
  return (
    <div className="flex justify-center py-4">
      <Swiper
        modules={[EffectCards, Autoplay]}
        effect="cards"
        grabCursor
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        cardsEffect={{
          slideShadows: true,
          rotate: true,
          perSlideRotate: 5,
          perSlideOffset: 14,
        }}
        className="h-[min(380px,72vh)] w-[min(320px,88vw)] !overflow-visible py-2"
      >
        {TESTIMONIALS.map((t) => (
          <SwiperSlide key={t.name} className="!flex items-stretch justify-center">
            <TestimonialCard testimonial={t} className="h-full w-full max-w-[300px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
