"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useAddToCartAnimation } from "@/hooks/useAddToCartAnimation";
import { AddToCartAnimation } from "@/components/motion/AddToCartAnimation";

interface AddToCartContextType {
  triggerAddToCart: (
    productId: string,
    productImage: string,
    productName: string,
    buttonElement: HTMLElement
  ) => void;
}

const AddToCartContext = createContext<AddToCartContextType | undefined>(
  undefined
);

export const useAddToCartContext = () => {
  const context = useContext(AddToCartContext);
  if (!context) {
    throw new Error(
      "useAddToCartContext must be used within AddToCartProvider"
    );
  }
  return context;
};

interface AddToCartProviderProps {
  children: ReactNode;
}

export const AddToCartProvider = ({ children }: AddToCartProviderProps) => {
  const { flyingItems, addFlyingItem, removeFlyingItem } =
    useAddToCartAnimation();

  const triggerAddToCart = (
    productId: string,
    productImage: string,
    productName: string,
    buttonElement: HTMLElement
  ) => {
    addFlyingItem(productId, productImage, productName, buttonElement);
  };

  return (
    <AddToCartContext.Provider value={{ triggerAddToCart }}>
      {children}
      <AddToCartAnimation
        flyingItems={flyingItems}
        onItemComplete={removeFlyingItem}
      />
    </AddToCartContext.Provider>
  );
};
