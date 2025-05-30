import { Metadata } from "next";
import { ProductList } from "@/components/products/ProductList";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Sản phẩm giảm cân an toàn | Dung Lê Giảm Cân",
  description:
    "Khám phá bộ sản phẩm giảm cân chính hãng từ Thái Lan. Hiệu quả nhanh chóng, an toàn, không tăng cân lại. Cam kết 100% sản phẩm chính hãng.",
  openGraph: {
    title: "Sản phẩm giảm cân an toàn | Dung Lê Giảm Cân",
    description:
      "Khám phá bộ sản phẩm giảm cân chính hãng từ Thái Lan. Hiệu quả nhanh chóng, an toàn, không tăng cân lại. Cam kết 100% sản phẩm chính hãng.",
    type: "website",
    images: [
      {
        url: "/images/products/san-pham-1.jpg",
        width: 1200,
        height: 630,
        alt: "Sản phẩm giảm cân Dung Lê",
      },
    ],
    siteName: "Dung Lê Giảm Cân",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sản phẩm giảm cân an toàn | Dung Lê Giảm Cân",
    description:
      "Khám phá bộ sản phẩm giảm cân chính hãng từ Thái Lan. Hiệu quả nhanh chóng, an toàn, không tăng cân lại. Cam kết 100% sản phẩm chính hãng.",
    images: ["/images/products/san-pham-1.jpg"],
  },
};

export default function ProductsPage() {
  return <ProductList products={products} />;
}
