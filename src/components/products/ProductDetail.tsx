"use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useIsClient } from "@/hooks/useIsClient";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { ReviewSection } from "@/components/products/ReviewSection";
import { Product } from "@/content/products";
import { getReviewsByProductId, getAverageRating } from "@/content/reviews";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/formatPrice";
import { formatSoldCount } from "@/lib/formatNumber";
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

  // Get review data
  const reviews = getReviewsByProductId(product.id);
  const averageRating = product.rating || getAverageRating(product.id);
  const totalReviews = product.reviewCount || reviews.length;

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
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>

              {/* Product Credibility Info */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                {/* Rating */}
                {averageRating > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(averageRating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium">
                      {averageRating.toFixed(1)} ({totalReviews} đánh giá)
                    </span>
                  </div>
                )}

                {/* Sold Count */}
                {product.soldCount && (
                  <div className="text-sm text-gray-600 flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Đã bán {formatSoldCount(product.soldCount)}+
                  </div>
                )}

                {/* Verified */}
                {product.verified && (
                  <div className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Chính hãng
                  </div>
                )}
              </div>

              {/* Badges */}
              {product.badges && product.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <p className="text-2xl font-bold text-pink">
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

      {/* Reviews Section */}
      <Section title="Đánh giá từ khách hàng" className="bg-gray-50">
        <ReviewSection
          productId={product.id}
          averageRating={averageRating}
          totalReviews={totalReviews}
        />
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
                  soldCount={product.soldCount}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  badges={product.badges}
                  verified={product.verified}
                />
              ))}
          </div>
        </Section>
      )}
    </>
  );
};
