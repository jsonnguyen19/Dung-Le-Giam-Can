"use client";

import { useState } from "react";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import Image from "next/image";

export const ZaloChatButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 600);

    // Open Zalo
    window.open("https://zalo.me/0937221892", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ripple Animation Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-16 h-16 bg-green-500/30 rounded-full animate-ping ${
            isAnimating ? "animate-pulse" : ""
          }`}
          style={{
            animationDuration: "2s",
            animationIterationCount: "infinite",
          }}
        />
        <div
          className="absolute w-20 h-20 bg-green-500/20 rounded-full animate-ping"
          style={{
            animationDuration: "2.5s",
            animationIterationCount: "infinite",
            animationDelay: "0.5s",
          }}
        />
        <div
          className="absolute w-24 h-24 bg-green-500/10 rounded-full animate-ping"
          style={{
            animationDuration: "3s",
            animationIterationCount: "infinite",
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Main Button */}
      <AnimatedDiv
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="relative"
      >
        <button
          onClick={handleClick}
          className={`relative w-16 h-16 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center group border-2 border-gray-300 hover:border-gray-400 ${
            isAnimating ? "scale-110 animate-bounce" : "hover:scale-105"
          }`}
          title="Chat với chúng tôi qua Zalo"
        >
          {/* Zalo Icon */}
          <div className="relative w-8 h-8">
            <Image
              src="/images/social/zalo.png"
              alt="Zalo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-green-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Click Ripple Effect */}
          {isAnimating && (
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
          )}
        </button>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            💬 Chat tư vấn miễn phí
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
          </div>
        </div>
      </AnimatedDiv>

      {/* Online Status Indicator */}
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
      </div>

      {/* New Message Badge (optional) */}
      <AnimatedDiv
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce"
        style={{
          animationDuration: "2s",
          animationIterationCount: "infinite",
        }}
      >
        !
      </AnimatedDiv>
    </div>
  );
};
