export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  ingredients: string[];
  usage: string;
  benefits: string[];
  category: "weight-loss" | "supplement" | "detox";
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "tra-giam-can-collagen",
    name: "Trà Giảm Cân Collagen Thái Lan",
    description: "Trà giảm cân kết hợp collagen giúp da đẹp, dáng thon.",
    price: 250000,
    images: ["/images/products/san-pham-1.jpg"],
    ingredients: [
      "Trà xanh hữu cơ",
      "Collagen thủy phân",
      "Chiết xuất thảo mộc",
    ],
    usage: "Uống 1 gói mỗi tối trước khi đi ngủ 30 phút.",
    benefits: ["Giảm cân hiệu quả", "Dưỡng da sáng mịn", "Cải thiện giấc ngủ"],
    category: "weight-loss",
    featured: true,
  },
  // Thêm các sản phẩm khác tương tự
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};
