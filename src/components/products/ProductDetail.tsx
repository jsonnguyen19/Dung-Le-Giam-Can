"use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useIsClient } from "@/hooks/useIsClient";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { Product } from "@/content/products";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/formatPrice";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import { useAddToCartContext } from "@/context/AddToCartContext";

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export const ProductDetail = ({
  product,
  relatedProducts,
}: ProductDetailProps) => {
  const isClient = useIsClient();
  const addToCartButtonRef = useRef<HTMLButtonElement>(null);
  const { triggerAddToCart } = useAddToCartContext();

  const handleAddToCart = () => {
    if (addToCartButtonRef.current) {
      useCartStore.getState().addItem(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
        },
        () => {
          // Trigger animation after item is added to cart
          if (addToCartButtonRef.current) {
            triggerAddToCart(
              product.id,
              product.images[0],
              product.name,
              addToCartButtonRef.current
            );
          }
        }
      );
    }
  };
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
              {isClient ? formatPrice(product.price) : ""}
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
                ref={addToCartButtonRef}
                onClick={handleAddToCart}
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <span>Thêm vào giỏ hàng</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </Button>
            </div>
          </AnimatedDiv>
        </div>
      </Section>

      {relatedProducts.length > 0 && (
        <Section title="Sản phẩm liên quan" className="bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isClient &&
              relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
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
