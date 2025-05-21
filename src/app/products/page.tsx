import { Metadata } from "next";
import { ProductList } from "@/components/products/ProductList";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Sản phẩm - Dung Lê Giảm Cân",
  description: "Danh sách sản phẩm giảm cân an toàn, hiệu quả từ Thái Lan.",
  openGraph: {
    title: "Sản phẩm - Dung Lê Giảm Cân",
    description: "Danh sách sản phẩm giảm cân an toàn, hiệu quả từ Thái Lan.",
  },
};

export default function ProductsPage() {
  return <ProductList products={products} />;
}
