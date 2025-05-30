"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatedDiv } from "./WithAnimation";
import { FlyingItem } from "@/hooks/useAddToCartAnimation";

interface FlyingProductProps {
  item: FlyingItem;
  onComplete: (id: string) => void;
}

export const FlyingProduct = ({ item, onComplete }: FlyingProductProps) => {
  const [cartPosition, setCartPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    // Find cart icon position
    const findCartIcon = () => {
      // Try to find cart icon in header (desktop)
      let cartIcon = document.querySelector('[href="/cart"]');

      // If not found, try to find in mobile menu
      if (!cartIcon) {
        cartIcon = document.querySelector('.mobile-menu [href="/cart"]');
      }

      if (cartIcon) {
        const rect = cartIcon.getBoundingClientRect();
        setCartPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      } else {
        // Fallback to top-right corner
        setCartPosition({
          x: window.innerWidth - 60,
          y: 60,
        });
      }
    };

    // Find cart position after a small delay to ensure DOM is ready
    setTimeout(findCartIcon, 50);
  }, []);

  if (!cartPosition) return null;

  return (
    <AnimatedDiv
      initial={{
        x: item.startX - 25, // Center the 50px image
        y: item.startY - 25,
        scale: 1,
        opacity: 1,
      }}
      animate={{
        x: cartPosition.x - 25,
        y: cartPosition.y - 25,
        scale: 0.3,
        opacity: 0.8,
      }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
      }}
      onAnimationComplete={() => onComplete(item.id)}
      className="fixed z-[100] pointer-events-none"
      style={{
        left: 0,
        top: 0,
      }}
    >
      <div className="w-12 h-12 bg-white rounded-lg shadow-lg border-2 border-pink overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
    </AnimatedDiv>
  );
};

interface AddToCartAnimationProps {
  flyingItems: FlyingItem[];
  onItemComplete: (id: string) => void;
}

export const AddToCartAnimation = ({
  flyingItems,
  onItemComplete,
}: AddToCartAnimationProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[99]">
      {flyingItems.map((item) => (
        <FlyingProduct key={item.id} item={item} onComplete={onItemComplete} />
      ))}
    </div>
  );
};
