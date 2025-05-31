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
  CheckCircle,
  X,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

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
  const [isCopied, setIsCopied] = useState(false);

  // Enhanced remove order item with toast
  const handleRemoveOrderItem = (id: string, itemName: string) => {
    removeOrderItem(id);
    toast.error(`Đã xóa "${itemName}" khỏi đơn hàng 🗑️`, {
      duration: 3000,
      style: {
        background: "#fef2f2",
        color: "#dc2626",
        border: "1px solid #fecaca",
        borderRadius: "12px",
        fontSize: "14px",
        padding: "12px 16px",
      },
    });
  };

  // Enhanced clear all items with confirmation
  const handleClearAllItems = () => {
    const itemCount = orderItems.length;
    clearOrderItems();
    toast.error(`Đã xóa tất cả ${itemCount} sản phẩm khỏi đơn hàng! 🧹`, {
      duration: 3000,
      style: {
        background: "#fef2f2",
        color: "#dc2626",
        border: "1px solid #fecaca",
        borderRadius: "12px",
        fontSize: "14px",
        padding: "12px 16px",
      },
    });
  };

  // Import cart items when component mounts or cart changes
  useEffect(() => {
    if (cartItems.length > 0 && orderItems.length === 0) {
      importFromCart(cartItems);
    }
  }, [cartItems, orderItems.length, importFromCart]);

  const handleAddProducts = () => {
    if (selectedProductIds.length === 0) return;

    let addedCount = 0;
    selectedProductIds.forEach((productId) => {
      const product = products.find((p) => p.id === productId);
      if (product) {
        addOrderItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
        });
        addedCount++;
      }
    });

    setSelectedProductIds([]);

    // Show success toast
    toast.success(`Đã thêm ${addedCount} sản phẩm vào đơn hàng! 🛍️`, {
      duration: 3000,
      style: {
        background: "#f9fafb",
        color: "#374151",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        fontSize: "14px",
        padding: "12px 16px",
      },
      iconTheme: {
        primary: "#10b981",
        secondary: "#ffffff",
      },
    });
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
    toast.success(`Đã chọn tất cả ${products.length} sản phẩm! 🎯`, {
      duration: 2000,
      style: {
        background: "#f0fdf4",
        color: "#166534",
        border: "1px solid #bbf7d0",
        borderRadius: "12px",
        fontSize: "14px",
        padding: "12px 16px",
      },
    });
  };

  const handleDeselectAll = () => {
    const previousCount = selectedProductIds.length;
    setSelectedProductIds([]);
    if (previousCount > 0) {
      toast(`Đã bỏ chọn ${previousCount} sản phẩm 🔄`, {
        duration: 2000,
        icon: "↩️",
        style: {
          background: "#fafafa",
          color: "#525252",
          border: "1px solid #e5e5e5",
          borderRadius: "12px",
          fontSize: "14px",
          padding: "12px 16px",
        },
      });
    }
  };

  const handleGenerateOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (orderItems.length === 0) {
      toast.error("Vui lòng chọn sản phẩm trước khi tạo đơn hàng! 📦", {
        duration: 4000,
        style: {
          background: "#fef2f2",
          color: "#dc2626",
          border: "1px solid #fecaca",
          borderRadius: "12px",
          fontSize: "14px",
          padding: "12px 16px",
        },
        iconTheme: {
          primary: "#dc2626",
          secondary: "#ffffff",
        },
      });
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading("Đang tạo đơn hàng...", {
      style: {
        background: "#f3f4f6",
        color: "#374151",
        border: "1px solid #d1d5db",
        borderRadius: "12px",
        fontSize: "14px",
        padding: "12px 16px",
      },
    });

    // Simulate processing time for better UX
    setTimeout(() => {
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
      setIsCopied(false); // Reset copy status when new order is generated

      toast.dismiss(loadingToast);
      toast.success("Đơn hàng đã được tạo thành công! ✨", {
        duration: 3000,
        style: {
          background: "#f0fdf4",
          color: "#166534",
          border: "1px solid #bbf7d0",
          borderRadius: "12px",
          fontSize: "14px",
          padding: "12px 16px",
        },
        iconTheme: {
          primary: "#10b981",
          secondary: "#ffffff",
        },
      });
    }, 800);
  };

  const handleCopyOrder = async () => {
    try {
      // Try modern Clipboard API first (works on desktop and some mobile browsers)
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(generatedOrderMessage);
        setIsCopied(true);

        toast.success("Đã copy nội dung đơn hàng thành công! 📋", {
          duration: 3000,
          style: {
            background: "#f0fdf4",
            color: "#166534",
            border: "1px solid #bbf7d0",
            borderRadius: "12px",
            fontSize: "14px",
            padding: "12px 16px",
          },
          iconTheme: {
            primary: "#10b981",
            secondary: "#ffffff",
          },
        });
      } else {
        // Fallback for mobile and older browsers
        const textArea = document.createElement("textarea");
        textArea.value = generatedOrderMessage;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (successful) {
          setIsCopied(true);
          toast.success("Đã copy nội dung đơn hàng thành công! 📋", {
            duration: 3000,
            style: {
              background: "#f0fdf4",
              color: "#166534",
              border: "1px solid #bbf7d0",
              borderRadius: "12px",
              fontSize: "14px",
              padding: "12px 16px",
            },
            iconTheme: {
              primary: "#10b981",
              secondary: "#ffffff",
            },
          });
        } else {
          throw new Error("execCommand failed");
        }
      }
    } catch (err) {
      console.error("Không thể copy:", err);
      setIsCopied(false);

      // Show mobile-friendly error with manual copy instructions
      toast.error(
        "📱 Không thể tự động copy!\n\n👆 Hãy bấm giữ vào nội dung đơn hàng ở trên để copy thủ công",
        {
          duration: 6000,
          style: {
            background: "#fef3cd",
            color: "#8b5a00",
            border: "1px solid #f6d55c",
            borderRadius: "12px",
            fontSize: "13px",
            padding: "12px 16px",
            whiteSpace: "pre-line",
          },
          iconTheme: {
            primary: "#f59e0b",
            secondary: "#ffffff",
          },
        }
      );

      // Show manual copy confirmation option
      setTimeout(() => {
        toast(
          (t) => (
            <div className="text-center">
              <p className="text-sm mb-3">📋 Đã copy thủ công thành công?</p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setIsCopied(true);
                    toast.dismiss(t.id);
                    toast.success("Đã xác nhận copy thành công!", {
                      duration: 2000,
                    });
                  }}
                  className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                >
                  Đã copy
                </button>
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
                >
                  Chưa copy
                </button>
              </div>
            </div>
          ),
          {
            duration: 10000,
            style: {
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "16px",
            },
          }
        );
      }, 1000);
    }
  };

  // Manual copy confirmation for mobile users
  const handleManualCopyConfirm = () => {
    setIsCopied(true);
    toast.success("Đã xác nhận copy thủ công! Bây giờ có thể gửi qua Zalo 🎉", {
      duration: 3000,
      style: {
        background: "#f0fdf4",
        color: "#166534",
        border: "1px solid #bbf7d0",
        borderRadius: "12px",
        fontSize: "14px",
        padding: "12px 16px",
      },
      iconTheme: {
        primary: "#10b981",
        secondary: "#ffffff",
      },
    });
  };

  const handleSendToZalo = () => {
    // Check if content has been copied first
    if (!isCopied) {
      toast.error(
        "⚠️ Vui lòng copy nội dung đơn hàng trước khi gửi qua Zalo!",
        {
          duration: 4000,
          style: {
            background: "#fef3cd",
            color: "#8b5a00",
            border: "1px solid #f6d55c",
            borderRadius: "12px",
            fontSize: "14px",
            padding: "12px 16px",
          },
          iconTheme: {
            primary: "#f59e0b",
            secondary: "#ffffff",
          },
        }
      );
      return;
    }

    const encodedMessage = encodeURIComponent(generatedOrderMessage);
    const zaloUrl = `https://zalo.me/0937221892?text=${encodedMessage}`;

    // Show loading state
    const loadingToast = toast.loading("Đang chuyển sang Zalo...", {
      style: {
        background: "#eff6ff",
        color: "#1e40af",
        border: "1px solid #bfdbfe",
        borderRadius: "12px",
        fontSize: "14px",
        padding: "12px 16px",
      },
    });

    setTimeout(() => {
      window.open(zaloUrl, "_blank");

      toast.dismiss(loadingToast);
      toast.success("🎉 Đã mở Zalo! Kiểm tra tab mới để gửi đơn hàng", {
        duration: 4000,
        style: {
          background: "#ecfdf5",
          color: "#065f46",
          border: "1px solid #a7f3d0",
          borderRadius: "12px",
          fontSize: "14px",
          padding: "12px 16px",
        },
        iconTheme: {
          primary: "#10b981",
          secondary: "#ffffff",
        },
      });

      // Clear everything after a delay
      setTimeout(() => {
        clearCart();
        resetOrder();
        setShowOrderPreview(false);
        setIsCopied(false); // Reset copy status

        toast.success("🙏 Cảm ơn bạn đã đặt hàng! Đơn hàng đã được reset", {
          duration: 3000,
          style: {
            background: "#fef3e7",
            color: "#9a3412",
            border: "1px solid #fed7aa",
            borderRadius: "12px",
            fontSize: "14px",
            padding: "12px 16px",
          },
        });
      }, 2000);
    }, 500);
  };

  if (showOrderPreview && isOrderGenerated) {
    return (
      <AnimatedDiv
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="bg-white rounded-lg md:shadow-2xl p-6 border border-gray-100"
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Đơn hàng của bạn
          </h3>
          <p className="text-gray-600">
            Đơn hàng đã được tạo thành công! Hãy gửi qua Zalo để hoàn tất.
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl mb-6 max-h-96 overflow-y-auto border border-gray-200">
          <pre className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed">
            {generatedOrderMessage}
          </pre>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleCopyOrder}
            variant="outline"
            className={`flex-1 flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-[1.02] ${
              isCopied
                ? "bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                : "hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
            }`}
          >
            {isCopied ? <CheckCircle size={18} /> : <Copy size={18} />}
            {isCopied ? "Đã copy" : "📋 Copy nội dung"}
          </Button>

          {!isCopied && (
            <Button
              onClick={handleManualCopyConfirm}
              variant="outline"
              className="flex-1 flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-[1.02] hover:bg-green-50 hover:border-green-200 hover:text-green-600"
            >
              <CheckCircle size={18} />
              Đã copy thủ công
            </Button>
          )}

          <Button
            onClick={handleSendToZalo}
            disabled={!isCopied}
            className={`flex-1 flex items-center justify-center gap-2 transform transition-all duration-200 shadow-lg ${
              isCopied
                ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-[1.02] hover:shadow-xl"
                : "bg-gray-400 cursor-not-allowed opacity-60"
            }`}
          >
            <MessageCircle size={18} />
            {isCopied ? "Gửi qua Zalo" : "Vui lòng copy trước"}
          </Button>
        </div>

        {!isCopied && (
          <div className="mt-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-700 text-center mb-2">
              ⚠️ <strong>Quy trình copy và gửi:</strong>
            </p>
            <div className="text-xs text-yellow-600 space-y-1">
              <p>
                <strong>📱 Trên mobile:</strong> Bấm giữ vào nội dung ở trên →
                Copy
              </p>
              <p>
                <strong>💻 Trên máy tính:</strong> Bôi đen text → Ctrl+C (hoặc
                Cmd+C)
              </p>
              <p>
                <strong>✅ Sau khi copy:</strong> Bấm "Đã copy thủ công" để tiếp
                tục
              </p>
            </div>
          </div>
        )}

        <Button
          onClick={() => {
            setShowOrderPreview(false);
            setIsCopied(false); // Reset copy status when going back to edit
          }}
          variant="outline"
          className="w-full mt-4 hover:bg-gray-50 transition-colors duration-200"
        >
          <X size={16} className="mr-2" />
          Quay lại chỉnh sửa
        </Button>
      </AnimatedDiv>
    );
  }
  return (
    <AnimatedDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg md:shadow-lg overflow-hidden max-w-none"
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
                    className="text-xs text-pink hover:text-pink-dark font-medium transition-colors duration-200 hover:scale-105 transform"
                  >
                    Chọn tất cả
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    type="button"
                    onClick={handleDeselectAll}
                    className="text-xs text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200 hover:scale-105 transform"
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
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink to-pink-dark hover:from-pink-dark hover:to-pink transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <ShoppingBag size={16} />
                  Thêm {selectedProductIds.length} sản phẩm vào đơn hàng
                </Button>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {orderItems.length > 0 && (
                <Button
                  type="button"
                  onClick={handleClearAllItems}
                  variant="outline"
                  className="flex-1 text-sm hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={14} className="mr-1" />
                  Xóa tất cả
                </Button>
              )}

              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                size="lg"
              >
                <CheckCircle size={18} className="mr-2" />
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
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg md:shadow-sm border border-gray-100"
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
                      onClick={() => handleRemoveOrderItem(item.id, item.name)}
                      className="p-1 rounded hover:bg-red-100 text-red-600 ml-1 transition-colors duration-200"
                      title="Xóa sản phẩm"
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

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#374151",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            fontSize: "14px",
            padding: "12px 16px",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
          },
        }}
      />
    </AnimatedDiv>
  );
};
