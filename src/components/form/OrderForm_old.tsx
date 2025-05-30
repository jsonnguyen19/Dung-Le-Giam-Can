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
import { Trash2, Plus, Minus, Copy, MessageCircle, ShoppingCart } from "lucide-react";
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

  const [selectedProductId, setSelectedProductId] = useState("");
  const [showOrderPreview, setShowOrderPreview] = useState(false);

  // Import cart items when component mounts or cart changes
  useEffect(() => {
    if (cartItems.length > 0 && orderItems.length === 0) {
      importFromCart(cartItems);
    }
  }, [cartItems, orderItems.length, importFromCart]);

  const handleAddProduct = () => {
    if (!selectedProductId) return;

    const product = products.find((p) => p.id === selectedProductId);
    if (product) {
      addOrderItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      });
      setSelectedProductId("");
    }
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
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-0">
        {/* Left side - Form */}
        <div className="p-6 lg:border-r border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <ShoppingCart size={24} />
            Thông tin đặt hàng
          </h2>
          
          <form onSubmit={handleGenerateOrder} className="space-y-6">
        {/* Thông tin khách hàng */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Thông tin khách hàng
          </h3>

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
              onChange={(e) => setFormData({ phone: e.target.value })}
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
              onChange={(e) => setFormData({ address: e.target.value })}
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
              onChange={(e) => setFormData({ note: e.target.value })}
              rows={2}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink focus:ring-pink"
            />
          </div>
        </div>

        {/* Thêm sản phẩm */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Chọn sản phẩm
          </h3>

          <div className="flex gap-2">
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-pink focus:ring-pink"
            >
              <option value="">Chọn sản phẩm...</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} - {formatPrice(product.price)}
                </option>
              ))}
            </select>
            <Button
              type="button"
              onClick={handleAddProduct}
              disabled={!selectedProductId}
              size="sm"
              className="px-4"
            >
              <Plus size={16} />
            </Button>
          </div>
        </div>

        {/* Danh sách sản phẩm đã chọn */}
        {orderItems.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Sản phẩm đã chọn
            </h3>

            <div className="space-y-3">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      {formatPrice(item.price)} × {item.quantity} ={" "}
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        updateOrderQuantity(item.id, item.quantity - 1)
                      }
                      className="p-1 rounded hover:bg-gray-200"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateOrderQuantity(item.id, item.quantity + 1)
                      }
                      className="p-1 rounded hover:bg-gray-200"
                    >
                      <Plus size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => removeOrderItem(item.id)}
                      className="p-1 rounded hover:bg-red-100 text-red-600 ml-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Tổng tiền:</span>
                <span className="text-pink">
                  {isClient ? formatPrice(getOrderTotal()) : ""}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          {orderItems.length > 0 && (
            <Button
              type="button"
              onClick={clearOrderItems}
              variant="outline"
              className="flex-1"
            >
              Xóa tất cả
            </Button>
          )}

          <Button type="submit" className="flex-1" size="lg">
            Tạo đơn hàng
          </Button>
        </div>
      </form>
    </AnimatedDiv>
  );
};
