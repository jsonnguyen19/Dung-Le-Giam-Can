"use client";

import { AnimatedDiv } from "@/components/motion/WithAnimation";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) => {
  return (
    <section id={id} className={`py-8 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 md:mb-12"
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
