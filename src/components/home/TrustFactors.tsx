"use client";

import { Section } from "@/components/ui/Section";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import { homeContent } from "@/content/home";

export const TrustFactors = () => {
  return (
    <Section
      title="Tại sao chọn chúng tôi?"
      subtitle="Cam kết mang đến trải nghiệm giảm cân hiệu quả và an toàn"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {homeContent.trustFactors.map((factor, index) => (
          <AnimatedDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center"
          >
            <div className="text-4xl mb-4">{factor.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{factor.title}</h3>
            <p className="text-gray-600">{factor.description}</p>
          </AnimatedDiv>
        ))}
      </div>
    </Section>
  );
};
