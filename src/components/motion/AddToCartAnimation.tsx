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
  const [animationPhase, setAnimationPhase] = useState<
    "center" | "flying" | "complete"
  >("center");

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

    findCartIcon();

    // Start center animation immediately, then fly to cart
    setTimeout(() => {
      setAnimationPhase("flying");
    }, 1200); // Show center for 1.2s
  }, []);

  if (!cartPosition) return null;

  // Calculate center of screen
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  return (
    <>
      {/* Backdrop overlay when showing center image */}
      {animationPhase === "center" && (
        <AnimatedDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] pointer-events-none"
        />
      )}

      <AnimatedDiv
        initial={{
          x: centerX - 130, // Center the 260px image (super big!)
          y: centerY - 130,
          scale: 0,
          opacity: 0,
        }}
        animate={
          animationPhase === "center"
            ? {
                scale: 1.1, // Slightly larger for emphasis
                opacity: 1,
              }
            : animationPhase === "flying"
            ? {
                x: cartPosition.x - 25,
                y: cartPosition.y - 25,
                scale: 0.18, // Much smaller end scale for dramatic effect
                opacity: 0.9,
              }
            : {
                scale: 0,
                opacity: 0,
              }
        }
        transition={
          animationPhase === "center"
            ? {
                duration: 0.5,
                ease: "backOut", // Bouncy entrance
              }
            : animationPhase === "flying"
            ? {
                duration: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
              }
            : {
                duration: 0.3,
                ease: "easeIn",
              }
        }
        onAnimationComplete={() => {
          if (animationPhase === "flying") {
            setAnimationPhase("complete");
            onComplete(item.id);
          }
        }}
        className="fixed z-[101] pointer-events-none"
        style={{
          left: 0,
          top: 0,
        }}
      >
        <div
          className={`bg-white rounded-2xl shadow-2xl border-4 border-pink overflow-hidden transition-all duration-300 ${
            animationPhase === "center"
              ? "w-[260px] h-[260px] shadow-[0_0_60px_rgba(236,72,153,0.5)]" // Super big with strong glow
              : "w-12 h-12 rounded-lg border-2"
          }`}
        >
          <Image
            src={item.image}
            alt={item.name}
            width={animationPhase === "center" ? 260 : 48}
            height={animationPhase === "center" ? 260 : 48}
            className="w-full h-full object-cover"
          />
          {animationPhase === "center" && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-base font-bold truncate drop-shadow-lg">
                  {item.name}
                </p>
              </div>
            </>
          )}
        </div>
      </AnimatedDiv>
    </>
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

interface SuccessMessageProps {
  show: boolean;
  productName: string;
  onComplete: () => void;
}

export const SuccessMessage = ({
  show,
  productName,
  onComplete,
}: SuccessMessageProps) => {
  if (!show) return null;

  return (
    <AnimatedDiv
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        y: -20,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 2000); // Auto hide after 2 seconds
      }}
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[102] pointer-events-none"
    >
      <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <div>
          <p className="font-medium">Đã thêm vào giỏ hàng!</p>
          <p className="text-sm opacity-90 truncate max-w-[200px]">
            {productName}
          </p>
        </div>
      </div>
    </AnimatedDiv>
  );
};
