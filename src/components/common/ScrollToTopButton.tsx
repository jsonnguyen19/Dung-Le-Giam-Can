"use client";

import { useState, useEffect } from "react";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsAnimating(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Position the scroll button above the ZaloChatButton and center it vertically */}
      <div className="relative -translate-y-32 md:-translate-y-36">
        {/* Container to center the button with ZaloChatButton (64px width) */}
        <div className="flex items-center justify-center w-16 h-auto">
          <div className="relative">
            {/* Ripple Animation Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-10 h-10 md:w-12 md:h-12 bg-blue-500/30 rounded-full animate-ping ${
                  isAnimating ? "animate-pulse" : ""
                }`}
                style={{
                  animationDuration: "2s",
                  animationIterationCount: "infinite",
                }}
              />
            </div>

            {/* Main Button */}
            <AnimatedDiv
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <button
                onClick={scrollToTop}
                className={`relative w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-blue-50 text-blue-600 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center justify-center group border-2 border-blue-200 hover:border-blue-400 ${
                  isAnimating ? "scale-110 animate-bounce" : "hover:scale-105"
                }`}
                title="Scroll lên đầu trang"
                aria-label="Scroll to top"
              >
                {/* Arrow Up Icon */}
                <ChevronUpIcon className="w-4 h-4 md:w-6 md:h-6" />

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Click Ripple Effect */}
                {isAnimating && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                )}
              </button>

              {/* Tooltip */}
              <div className="absolute right-full mr-2 md:mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <div className="bg-gray-800 text-white text-xs md:text-sm px-2 md:px-3 py-1 md:py-2 rounded-lg whitespace-nowrap shadow-lg">
                  ⬆️ Lên đầu trang
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </div>
  );
};
