"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import { homeContent } from "@/content/home";

export const AboutSection = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <AnimatedDiv
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {homeContent.intro.title}
          </h2>
          <div className="prose prose-pink max-w-none">
            <p className="text-lg text-gray-600 whitespace-pre-line">
              {homeContent.intro.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {homeContent.benefits.map((benefit, index) => (
              <AnimatedDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 py-1"
              >
                <span className="text-pink flex-shrink-0">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </AnimatedDiv>
            ))}
          </div>
        </AnimatedDiv>

        <AnimatedDiv
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/aboutme/baschi.jpg"
                alt="Sản phẩm Baschi giảm cân"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/aboutme/giam-can-co-dia-nho.jpg"
                alt="Sản phẩm giảm cân có địa chỉ rõ ràng"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative h-full">
            <div className="relative h-full rounded-lg overflow-hidden">
              <Image
                src="/images/aboutme/wisdom.jpg"
                alt="Sản phẩm Wisdom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </Section>
  );
};
