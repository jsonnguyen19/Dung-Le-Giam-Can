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
    type: "website",
    images: [
      {
        url: "https://dunglegiamcan.com/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Đánh giá khách hàng Dung Lê Giảm Cân",
      },
    ],
    siteName: "Dung Lê Giảm Cân",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khách hàng nói gì? - Đánh giá chân thực | Dung Lê Giảm Cân",
    description:
      "Xem những đánh giá chân thực từ hàng nghìn khách hàng đã thành công với sản phẩm giảm cân Dung Lê. Kết quả thực tế, hiệu quả an toàn.",
    images: ["https://dunglegiamcan.com/images/logo/logo.png"],
  },
};

export default function TestimonialsPageRoute() {
  return <TestimonialsPage />;
}
