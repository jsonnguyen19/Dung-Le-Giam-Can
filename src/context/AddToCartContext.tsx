"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useAddToCartAnimation } from "@/hooks/useAddToCartAnimation";
import {
  AddToCartAnimation,
  SuccessMessage,
} from "@/components/motion/AddToCartAnimation";

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
  const {
    flyingItems,
    successItems,
    addFlyingItem,
    removeFlyingItem,
    removeSuccessItem,
  } = useAddToCartAnimation();

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
      {successItems.map((item) => (
        <SuccessMessage
          key={item.id}
          show={true}
          productName={item.name}
          onComplete={() => removeSuccessItem(item.id)}
        />
      ))}
    </AddToCartContext.Provider>
  );
};
