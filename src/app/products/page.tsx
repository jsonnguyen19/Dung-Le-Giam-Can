import { ProductList } from "@/components/products/ProductList";
import { products } from "@/content/products";
import { Metadata } from "next";
import { Suspense } from "react";

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
        url: "/images/products/baschi-cam/baschi-cam.jpg",
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
    images: ["/images/products/baschi-cam/baschi-cam.jpg"],
  },
};

function ProductListFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Đang tải sản phẩm...</p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductListFallback />}>
      <ProductList products={products} />
    </Suspense>
  );
}
