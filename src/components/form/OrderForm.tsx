"use client";

import { useState, useEffect } from "react";
import { useIsClient } from "@/hooks/useIsClient";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import { useCartStore } from "@/store/cartStore";
import { useOrderStore } from "@/store/orderStore";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/formatPrice";
import { generateOrderMessage } from "@/lib/generateOrderMessage";
import { products } from "@/content/products";
import {
  Trash2,
  Plus,
  Minus,
  Copy,
  MessageCircle,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";

export const OrderForm = () => {
  const isClient = useIsClient();
  const { items: cartItems, clearCart } = useCartStore();
  const {
    formData,
    setFormData,
    orderItems,
    addOrderItem,
    removeOrderItem,
    updateOrderQuantity,
    clearOrderItems,
    importFromCart,
    isOrderGenerated,
    generatedOrderMessage,
    setOrderGenerated,
    resetOrder,
    getOrderTotal,
  } = useOrderStore();

  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [showOrderPreview, setShowOrderPreview] = useState(false);

  // Import cart items when component mounts or cart changes
  useEffect(() => {
    if (cartItems.length > 0 && orderItems.length === 0) {
      importFromCart(cartItems);
    }
  }, [cartItems, orderItems.length, importFromCart]);

  const handleAddProducts = () => {
    if (selectedProductIds.length === 0) return;

    selectedProductIds.forEach((productId) => {
      const product = products.find((p) => p.id === productId);
      if (product) {
        addOrderItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
        });
      }
    });
    setSelectedProductIds([]);
  };

  const handleProductToggle = (productId: string) => {
    setSelectedProductIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSelectAll = () => {
    setSelectedProductIds(products.map((p) => p.id));
  };

  const handleDeselectAll = () => {
    setSelectedProductIds([]);
  };

  const handleGenerateOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (orderItems.length === 0) {
      alert("Vui lòng chọn sản phẩm trước khi tạo đơn hàng");
      return;
    }

    const message = generateOrderMessage({
      ...formData,
      items: orderItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    });

    setOrderGenerated(message);
    setShowOrderPreview(true);
  };

  const handleCopyOrder = async () => {
    try {
      await navigator.clipboard.writeText(generatedOrderMessage);
      alert("Đã copy nội dung đơn hàng!");
    } catch (err) {
      console.error("Không thể copy:", err);
    }
  };

  const handleSendToZalo = () => {
    const encodedMessage = encodeURIComponent(generatedOrderMessage);
    const zaloUrl = `https://zalo.me/0937221892?text=${encodedMessage}`;
    window.open(zaloUrl, "_blank");

    // Clear everything after sending
    clearCart();
    resetOrder();
    setShowOrderPreview(false);
  };

  if (showOrderPreview && isOrderGenerated) {
    return (
      <AnimatedDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-center">Đơn hàng của bạn</h3>

        <div className="bg-gray-50 p-4 rounded-lg mb-6 max-h-96 overflow-y-auto">
          <pre className="whitespace-pre-wrap text-sm">
            {generatedOrderMessage}
          </pre>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleCopyOrder}
            variant="outline"
            className="flex-1 flex items-center justify-center gap-2"
          >
            <Copy size={18} />
            Copy nội dung
          </Button>

          <Button
            onClick={handleSendToZalo}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <MessageCircle size={18} />
            Gửi qua Zalo
          </Button>
        </div>

        <Button
          onClick={() => setShowOrderPreview(false)}
          variant="outline"
          className="w-full mt-3"
        >
          Quay lại chỉnh sửa
        </Button>
      </AnimatedDiv>
    );
  }
  return (
    <AnimatedDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden max-w-none"
    >
      <div className="xl:grid xl:grid-cols-5 lg:grid lg:grid-cols-3">
        {/* Left side - Form */}
        <div className="xl:col-span-3 lg:col-span-2 p-4 sm:p-6 lg:border-r border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2">
            <ShoppingCart size={24} />
            Thông tin đặt hàng
          </h2>

          <form
            onSubmit={handleGenerateOrder}
            className="space-y-4 sm:space-y-6"
          >
            {" "}
            {/* Thông tin khách hàng */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 border-b pb-2">
                Thông tin khách hàng
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                    onChange={(e) => setFormData({ name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:border-pink focus:ring-pink focus:ring-1"
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
                    onChange={(e) => setFormData({ phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:border-pink focus:ring-pink focus:ring-1"
                  />
                </div>
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
                  onChange={(e) => setFormData({ address: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:border-pink focus:ring-pink focus:ring-1"
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
                  onChange={(e) => setFormData({ note: e.target.value })}
                  rows={2}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:border-pink focus:ring-pink focus:ring-1"
                />
              </div>
            </div>{" "}
            {/* Thêm sản phẩm */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 border-b pb-2">
                  Chọn sản phẩm ({selectedProductIds.length}/{products.length})
                </h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleSelectAll}
                    className="text-xs text-pink hover:text-pink-dark font-medium"
                  >
                    Chọn tất cả
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    type="button"
                    onClick={handleDeselectAll}
                    className="text-xs text-gray-600 hover:text-gray-800 font-medium"
                  >
                    Bỏ chọn
                  </button>
                </div>
              </div>

              {/* Danh sách sản phẩm với checkbox */}
              <div className="max-h-64 overflow-y-auto border border-gray-300 rounded-md">
                {products.map((product) => (
                  <label
                    key={product.id}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                  >
                    <input
                      type="checkbox"
                      checked={selectedProductIds.includes(product.id)}
                      onChange={() => handleProductToggle(product.id)}
                      className="w-4 h-4 text-pink border-gray-300 rounded focus:ring-pink"
                    />
                    <div className="w-12 h-12 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-800 text-sm truncate">
                        {product.name}
                      </h4>
                      <p className="text-sm text-pink font-semibold">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              {selectedProductIds.length > 0 && (
                <Button
                  type="button"
                  onClick={handleAddProducts}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Plus size={16} />
                  Thêm {selectedProductIds.length} sản phẩm vào đơn hàng
                </Button>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {orderItems.length > 0 && (
                <Button
                  type="button"
                  onClick={clearOrderItems}
                  variant="outline"
                  className="flex-1 text-sm"
                >
                  Xóa tất cả
                </Button>
              )}

              <Button type="submit" className="flex-1" size="lg">
                Tạo đơn hàng
              </Button>
            </div>
          </form>
        </div>{" "}
        {/* Right side - Order Summary */}
        <div className="xl:col-span-2 lg:col-span-1 p-4 sm:p-6 bg-gray-50 lg:bg-white">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
            Sản phẩm đã chọn ({orderItems.length})
          </h3>

          {orderItems.length === 0 ? (
            <div className="text-center py-6 sm:py-8 text-gray-500">
              <ShoppingCart
                size={36}
                className="sm:w-12 sm:h-12 mx-auto mb-3 opacity-50"
              />
              <p className="text-sm sm:text-base">Chưa có sản phẩm nào</p>
              <p className="text-xs sm:text-sm">
                Hãy chọn sản phẩm từ danh sách bên trái
              </p>
            </div>
          ) : (
            <div className="space-y-2 sm:space-y-3 max-h-64 sm:max-h-96 overflow-y-auto">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-800 text-xs sm:text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {formatPrice(item.price)} × {item.quantity}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-pink">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        updateOrderQuantity(item.id, item.quantity - 1)
                      }
                      className="p-1 rounded hover:bg-gray-200 text-gray-600"
                    >
                      <Minus size={12} />
                    </button>

                    <span className="w-6 sm:w-8 text-center text-xs sm:text-sm font-medium">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateOrderQuantity(item.id, item.quantity + 1)
                      }
                      className="p-1 rounded hover:bg-gray-200 text-gray-600"
                    >
                      <Plus size={12} />
                    </button>

                    <button
                      type="button"
                      onClick={() => removeOrderItem(item.id)}
                      className="p-1 rounded hover:bg-red-100 text-red-600 ml-1"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {orderItems.length > 0 && (
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center text-lg sm:text-xl font-bold">
                <span>Tổng tiền:</span>
                <span className="text-pink">
                  {isClient ? formatPrice(getOrderTotal()) : ""}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedDiv>
  );
};
