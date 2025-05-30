"use client";

import { useIsClient } from "@/hooks/useIsClient";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/formatPrice";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import { Section } from "@/components/ui/Section";

export default function CartPage() {
  const isClient = useIsClient();
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <Section title="Giỏ hàng của bạn">
        <div className="text-center py-8">
          <div className="text-gray-500 mb-4">
            Chưa có sản phẩm nào trong giỏ hàng
          </div>
          <Link href="/products">
            <Button>Tiếp tục mua sắm</Button>
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <Section title="Giỏ hàng của bạn">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <AnimatedDiv
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4"
            >
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <div className="text-pink font-semibold mt-1">
                  {isClient ? formatPrice(item.price) : ""}
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 h-fit space-y-4">
          <h3 className="font-medium text-lg">Tổng đơn hàng</h3>
          <div className="border-t pt-4">
            <div className="flex justify-between font-semibold text-lg">
              <span>Tổng tiền:</span>
              <span className="text-pink">
                {isClient ? formatPrice(getTotalPrice()) : ""}
              </span>
            </div>
          </div>
          <Link href="/#order" className="block">
            <Button className="w-full" size="lg">
              Tiến hành đặt hàng
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
