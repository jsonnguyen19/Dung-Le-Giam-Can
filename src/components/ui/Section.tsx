"use client";

import { AnimatedDiv } from "@/components/motion/WithAnimation";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  hideTitleOnMobile?: boolean; // New prop to hide title on mobile
}

export const Section = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  hideTitleOnMobile = false,
}: SectionProps) => {
  return (
    <section id={id} className={`py-2 md:py-8 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-center mb-2 md:mb-6 ${
              hideTitleOnMobile ? "hidden md:block" : ""
            }`}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </AnimatedDiv>
        )}
        {children}
      </div>
    </section>
  );
};
