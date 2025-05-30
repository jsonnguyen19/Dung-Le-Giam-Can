"use client";

import { useState, useEffect } from "react";

export const useCartIconAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return { isAnimating, triggerAnimation };
};
