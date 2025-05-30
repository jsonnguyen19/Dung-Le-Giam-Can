"use client";

import { useState } from "react";
import { useIsClient } from "@/hooks/useIsClient";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/formatPrice";
import { generateOrderMessage } from "@/lib/generateOrderMessage";

interface OrderFormData {
  name: string;
  phone: string;
  address: string;
  note?: string;
}

export const OrderForm = () => {
  const isClient = useIsClient();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      alert("Vui lòng chọn sản phẩm trước khi đặt hàng");
      return;
    }

    const message = generateOrderMessage({
      ...formData,
      items: items.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    });

    // Create deep link for Zalo
    const encodedMessage = encodeURIComponent(message);
    const zaloUrl = `https://zalo.me/0937221892?text=${encodedMessage}`;

    // Open in new tab
    window.open(zaloUrl, "_blank");

    // Clear cart after order
    clearCart();
    setFormData({
      name: "",
      phone: "",
      address: "",
      note: "",
    });
  };

  return (
    <AnimatedDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Họ và tên
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink focus:ring-pink"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Số điện thoại
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink focus:ring-pink"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Địa chỉ
          </label>
          <textarea
            id="address"
            required
            value={formData.address}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, address: e.target.value }))
            }
            rows={3}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink focus:ring-pink"
          />
        </div>

        <div>
          <label
            htmlFor="note"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ghi chú (không bắt buộc)
          </label>
          <textarea
            id="note"
            value={formData.note}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, note: e.target.value }))
            }
            rows={2}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink focus:ring-pink"
          />
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Tổng tiền:</span>
            <span className="text-xl font-bold text-pink">
              {isClient ? formatPrice(getTotalPrice()) : ""}
            </span>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Đặt hàng qua Zalo 💬
          </Button>
        </div>
      </form>
    </AnimatedDiv>
  );
};
