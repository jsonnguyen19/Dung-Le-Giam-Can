"use client";

import { ReactNode, useRef, useEffect } from "react";
import { type CartStore, useCartStore } from "./cartStore";
import { createContext, useContext } from "react";

// Create a React context for our store
const StoreContext = createContext<CartStore | null>(null);

// Custom hook to use the store context
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
};

export interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const store = useCartStore();
  const storeRef = useRef<CartStore>();

  useEffect(() => {
    // Hydrate the store from localStorage when component mounts
    useCartStore.persist.rehydrate();
  }, []);

  if (!storeRef.current) {
    storeRef.current = store;
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
}
