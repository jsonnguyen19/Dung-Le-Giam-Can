"use client";

import { useState, useCallback } from "react";

export interface FlyingItem {
  id: string;
  image: string;
  name: string;
  startX: number;
  startY: number;
  timestamp: number;
}

export const useAddToCartAnimation = () => {
  const [flyingItems, setFlyingItems] = useState<FlyingItem[]>([]);

  const addFlyingItem = useCallback(
    (
      productId: string,
      productImage: string,
      productName: string,
      buttonElement: HTMLElement
    ) => {
      const rect = buttonElement.getBoundingClientRect();
      const newItem: FlyingItem = {
        id: `${productId}-${Date.now()}`,
        image: productImage,
        name: productName,
        startX: rect.left + rect.width / 2,
        startY: rect.top + rect.height / 2,
        timestamp: Date.now(),
      };

      setFlyingItems((prev) => [...prev, newItem]);

      // Remove item after animation completes
      setTimeout(() => {
        setFlyingItems((prev) => prev.filter((item) => item.id !== newItem.id));
      }, 1500);
    },
    []
  );

  const removeFlyingItem = useCallback((id: string) => {
    setFlyingItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return {
    flyingItems,
    addFlyingItem,
    removeFlyingItem,
  };
};
