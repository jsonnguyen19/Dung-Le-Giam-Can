interface OrderFormData {
  name: string;
  phone: string;
  address: string;
  note?: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

export const generateOrderMessage = ({
  name,
  phone,
  address,
  note,
  items,
}: OrderFormData): string => {
  const itemsList = items
    .map((item) => `${item.name} (${item.quantity} cái)`)
    .join("\n- ");

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return `Xin chào, tôi đến từ website Dung Lê Giảm Cân
Tôi muốn đặt đơn hàng với các sản phẩm:
- ${itemsList}

Thông tin giao hàng:
- Họ tên: ${name}
- SĐT: ${phone}
- Địa chỉ: ${address}
${note ? `- Ghi chú: ${note}` : ""}

Tổng tiền: ${new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(totalAmount)}`;
};
