"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { Product } from "@/content/products";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/formatPrice";
import { AnimatedDiv } from "@/components/motion/WithAnimation";

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export const ProductDetail = ({
  product,
  relatedProducts,
}: ProductDetailProps) => {
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <AnimatedDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-4">
                  {product.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square relative rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Ảnh ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AnimatedDiv>

          {/* Product Info */}
          <AnimatedDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-xl font-semibold text-pink">
              {formatPrice(product.price)}
            </p>
            <div className="prose prose-pink">
              <p>{product.description}</p>

              <h2>Thành phần</h2>
              <ul>
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>

              <h2>Công dụng</h2>
              <ul>
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>

              <h2>Hướng dẫn sử dụng</h2>
              <p>{product.usage}</p>
            </div>

            <div className="pt-6 border-t">
              <Button
                onClick={() => {
                  useCartStore.getState().addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                  });
                }}
                size="lg"
                className="w-full"
              >
                Thêm vào giỏ hàng 🛒
              </Button>
            </div>
          </AnimatedDiv>
        </div>
      </Section>

      {relatedProducts.length > 0 && (
        <Section title="Sản phẩm liên quan" className="bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.images[0]}
                name={product.name}
                price={product.price}
                description={product.description}
                href={`/products/${product.slug}`}
              />
            ))}
          </div>
        </Section>
      )}
    </>
  );
};
