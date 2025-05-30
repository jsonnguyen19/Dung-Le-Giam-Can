import { Metadata } from "next";
import { TestimonialsPage } from "@/components/testimonials/TestimonialsPage";

export const metadata: Metadata = {
  title: "Khách hàng nói gì? - Đánh giá chân thực | Dung Lê Giảm Cân",
  description:
    "Xem những đánh giá chân thực từ hàng nghìn khách hàng đã thành công với sản phẩm giảm cân Dung Lê. Kết quả thực tế, hiệu quả an toàn.",
  openGraph: {
    title: "Khách hàng nói gì? - Đánh giá chân thực | Dung Lê Giảm Cân",
    description:
      "Xem những đánh giá chân thực từ hàng nghìn khách hàng đã thành công với sản phẩm giảm cân Dung Lê. Kết quả thực tế, hiệu quả an toàn.",
  },
};

export default function TestimonialsPageRoute() {
  return <TestimonialsPage />;
}
