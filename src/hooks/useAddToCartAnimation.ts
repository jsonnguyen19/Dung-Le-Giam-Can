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

export interface SuccessItem {
  id: string;
  name: string;
  timestamp: number;
}

export const useAddToCartAnimation = () => {
  const [flyingItems, setFlyingItems] = useState<FlyingItem[]>([]);
  const [successItems, setSuccessItems] = useState<SuccessItem[]>([]);

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

      // Add success message after animation completes
      setTimeout(() => {
        const successItem: SuccessItem = {
          id: `success-${productId}-${Date.now()}`,
          name: productName,
          timestamp: Date.now(),
        };
        setSuccessItems((prev) => [...prev, successItem]);
      }, 2000); // Show success message after 2 seconds (after center + flying animation)

      // Remove flying item after animation completes
      setTimeout(() => {
        setFlyingItems((prev) => prev.filter((item) => item.id !== newItem.id));
      }, 3500); // Remove after all animations complete
    },
    []
  );

  const removeFlyingItem = useCallback((id: string) => {
    setFlyingItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const removeSuccessItem = useCallback((id: string) => {
    setSuccessItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return {
    flyingItems,
    successItems,
    addFlyingItem,
    removeFlyingItem,
    removeSuccessItem,
  };
};
