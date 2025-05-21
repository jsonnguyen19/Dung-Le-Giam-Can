"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/content/products";
import { Button } from "@/components/ui/Button";
import { AnimatedDiv } from "@/components/motion/WithAnimation";

export const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Section
      title="Sản phẩm nổi bật"
      subtitle="Khám phá những sản phẩm giảm cân được yêu thích nhất"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product, index) => (
          <AnimatedDiv
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard
              image={product.images[0]}
              name={product.name}
              price={product.price}
              description={product.description}
              href={`/products/${product.slug}`}
            />
          </AnimatedDiv>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/products">
          <Button variant="outline" size="lg">
            Xem tất cả sản phẩm →
          </Button>
        </Link>
      </div>
    </Section>
  );
};
