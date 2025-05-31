"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useIsClient } from "@/hooks/useIsClient";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import { useCartStore } from "@/store/cartStore";
import { useAddToCartContext } from "@/context/AddToCartContext";
import { formatPrice } from "@/lib/formatPrice";
import { formatSoldCount } from "@/lib/formatNumber";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  href: string;
  // Thông tin uy tín
  soldCount?: number;
  rating?: number;
  reviewCount?: number;
  badges?: string[];
  verified?: boolean;
}

export const ProductCard = ({
  id,
  image,
  name,
  price,
  description,
  href,
  soldCount,
  rating,
  reviewCount,
  badges,
  verified,
}: ProductCardProps) => {
  const isClient = useIsClient();
  const addToCartButtonRef = useRef<HTMLButtonElement>(null);
  const { triggerAddToCart } = useAddToCartContext();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking add to cart
    e.stopPropagation();

    if (addToCartButtonRef.current) {
      useCartStore.getState().addItem(
        {
          id,
          name,
          price,
          image,
        },
        () => {
          // Trigger animation after item is added to cart
          if (addToCartButtonRef.current) {
            triggerAddToCart(id, image, name, addToCartButtonRef.current);
          }
        }
      );
    }
  };
  return (
    <Link href={href}>
      <AnimatedDiv
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg md:shadow-md overflow-hidden cursor-pointer"
      >
        <div className="relative h-48">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />

          {/* Badges và Verified */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {verified && (
              <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <svg
                  className="w-3 h-3"
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
            {badges?.slice(0, 1).map((badge, index) => (
              <div
                key={index}
                className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium"
              >
                {badge}
              </div>
            ))}
          </div>

          {/* Sold Count */}
          {soldCount && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
              Đã bán {formatSoldCount(soldCount)}+
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>

          {/* Rating và Review Count */}
          {rating && (
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating)
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
              <span className="text-sm text-gray-600">
                {rating} ({reviewCount} đánh giá)
              </span>
            </div>
          )}

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-pink font-bold">
              {isClient ? formatPrice(price) : ""}
            </span>
            <button
              ref={addToCartButtonRef}
              onClick={handleAddToCart}
              className="text-pink hover:text-pinkDark transition-colors p-2 rounded-full hover:bg-pink/10"
              title="Thêm vào giỏ hàng"
            >
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
            </button>
          </div>
        </div>
      </AnimatedDiv>
    </Link>
  );
};
