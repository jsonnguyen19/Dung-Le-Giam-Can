"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderFormData {
  name: string;
  phone: string;
  address: string;
  note?: string;
}

export interface OrderStore {
  // Form data
  formData: OrderFormData;
  setFormData: (data: Partial<OrderFormData>) => void;

  // Order items
  orderItems: OrderItem[];
  addOrderItem: (item: Omit<OrderItem, "quantity">) => void;
  removeOrderItem: (id: string) => void;
  updateOrderQuantity: (id: string, quantity: number) => void;
  clearOrderItems: () => void;

  // Import from cart
  importFromCart: (cartItems: OrderItem[]) => void;

  // Order state
  isOrderGenerated: boolean;
  generatedOrderMessage: string;
  setOrderGenerated: (message: string) => void;

  // Reset everything
  resetOrder: () => void;

  // Calculate total
  getOrderTotal: () => number;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      // Form data
      formData: {
        name: "",
        phone: "",
        address: "",
        note: "",
      },
      setFormData: (data) => {
        set((state) => ({
          formData: { ...state.formData, ...data },
        }));
      },

      // Order items
      orderItems: [],
      addOrderItem: (item) => {
        set((state) => {
          const existingItem = state.orderItems.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              orderItems: state.orderItems.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return {
            orderItems: [...state.orderItems, { ...item, quantity: 1 }],
          };
        });
      },
      removeOrderItem: (id) => {
        set((state) => ({
          orderItems: state.orderItems.filter((item) => item.id !== id),
        }));
      },
      updateOrderQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeOrderItem(id);
          return;
        }
        set((state) => ({
          orderItems: state.orderItems.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },
      clearOrderItems: () => set({ orderItems: [] }),

      // Import from cart
      importFromCart: (cartItems) => {
        set({ orderItems: [...cartItems] });
      },

      // Order state
      isOrderGenerated: false,
      generatedOrderMessage: "",
      setOrderGenerated: (message) => {
        set({
          isOrderGenerated: true,
          generatedOrderMessage: message,
        });
      },

      // Reset everything
      resetOrder: () => {
        set({
          formData: {
            name: "",
            phone: "",
            address: "",
            note: "",
          },
          orderItems: [],
          isOrderGenerated: false,
          generatedOrderMessage: "",
        });
      },

      // Calculate total
      getOrderTotal: () => {
        const state = get();
        return state.orderItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "order-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        formData: state.formData,
        orderItems: state.orderItems,
        isOrderGenerated: state.isOrderGenerated,
        generatedOrderMessage: state.generatedOrderMessage,
      }),
    }
  )
);
