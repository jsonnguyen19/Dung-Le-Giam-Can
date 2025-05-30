"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  AnimatedDiv,
  AnimatedHeading,
  AnimatedParagraph,
} from "@/components/motion/WithAnimation";
import { Button } from "@/components/ui/Button";
import { homeContent } from "@/content/home";
import Image from "next/image";

import "swiper/css";

export const HeroSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px]">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {homeContent.hero.banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center text-white">
          <AnimatedHeading
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6"
          >
            {homeContent.hero.slogan}
          </AnimatedHeading>
          <AnimatedParagraph
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            {homeContent.hero.description}
          </AnimatedParagraph>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={() => {
                document
                  .getElementById("order")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 text-lg"
            >
              {homeContent.hero.cta} ✨
            </Button>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};
