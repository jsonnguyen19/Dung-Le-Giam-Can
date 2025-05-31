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
    slug: "baschi-cam",
    name: "Baschi Cam - Viên Giảm Cân Thái Lan",
    description:
      "Viên giảm cân Baschi Cam từ Thái Lan, giúp giảm cân an toàn và hiệu quả với 30 viên/hộp.",
    price: 250000,
    images: ["/images/products/baschi-cam/baschi-cam.jpg"],
    ingredients: [
      "Chiết xuất lá sen",
      "Chitosan",
      "Garcinia Cambogia",
      "Chiết xuất trà xanh",
      "L-Carnitine",
    ],
    usage: "Uống 1 viên/ngày sau bữa ăn sáng với nhiều nước.",
    benefits: [
      "Giảm cân an toàn",
      "Đốt cháy mỡ thừa",
      "Kiểm soát cảm giác thèm ăn",
      "Cải thiện trao đổi chất",
    ],
    category: "weight-loss",
    featured: true,
  },
  {
    id: "2",
    slug: "baschi-den",
    name: "Baschi Đen - Viên Giảm Cân Cao Cấp",
    description:
      "Viên giảm cân Baschi Đen phiên bản nâng cấp, hiệu quả mạnh mẽ hơn cho việc giảm cân nhanh.",
    price: 350000,
    images: ["/images/products/baschi-den/baschi-den.jpg"],
    ingredients: [
      "Chitosan",
      "Garcinia Cambogia",
      "Chiết xuất nho đỏ",
      "L-Carnitine",
      "Chromium Picolinate",
    ],
    usage: "Uống 1 viên/ngày sau bữa ăn sáng, uống nhiều nước.",
    benefits: [
      "Giảm cân nhanh chóng",
      "Đốt cháy mỡ bụng",
      "Kiểm soát cảm giác đói",
      "Tăng cường năng lượng",
    ],
    category: "weight-loss",
    featured: true,
  },
  {
    id: "3",
    slug: "baschi-cam-lo",
    name: "Bashi Cam Lọ - Viên Giảm Cân Vị Cam Lọ",
    description:
      "Viên giảm cân Bashi với hương vị cam lọ thơm ngon, dễ uống, giúp giảm cân hiệu quả.",
    price: 280000,
    images: ["/images/products/baschi-cam-lo/baschi-cam-lo.jpg"],
    ingredients: [
      "Chiết xuất cam lọ",
      "Garcinia Cambogia",
      "Chitosan",
      "Green Tea Extract",
      "Vitamin C",
    ],
    usage: "Uống 1 viên/ngày sau bữa ăn với nước ấm.",
    benefits: [
      "Giảm cân tự nhiên",
      "Vị thơm ngon dễ uống",
      "Bổ sung vitamin C",
      "Tăng cường miễn dịch",
    ],
    category: "weight-loss",
  },
  {
    id: "4",
    slug: "bashi-hong",
    name: "Bashi Hồng - Viên Giảm Cân Cao Cấp",
    description:
      "Viên giảm cân Bashi Hồng với công thức đặc biệt, hiệu quả cao trong việc đốt cháy mỡ thừa.",
    price: 320000,
    images: ["/images/products/bashi-hong/bashi-hong.jpg"],
    ingredients: [
      "Red Grape Extract",
      "Resveratrol",
      "L-Carnitine",
      "Garcinia Cambogia",
      "Chromium",
    ],
    usage: "Uống 1 viên/ngày vào buổi sáng trước bữa ăn.",
    benefits: [
      "Đốt cháy mỡ hiệu quả",
      "Chống lão hóa",
      "Tăng cường trao đổi chất",
      "Kiểm soát cholesterol",
    ],
    category: "weight-loss",
    featured: true,
  },
  {
    id: "5",
    slug: "bashi-tim",
    name: "Bashi Tím - Viên Giảm Cân Thảo Dược",
    description:
      "Viên giảm cân Bashi Tím từ chiết xuất thảo dược tự nhiên, an toàn cho sức khỏe.",
    price: 300000,
    images: ["/images/products/bashi-tim/bashi-tim.jpg"],
    ingredients: [
      "Purple Sweet Potato Extract",
      "Anthocyanin",
      "Fiber",
      "Garcinia Cambogia",
      "Green Coffee Bean",
    ],
    usage: "Uống 1 viên/ngày sau bữa tối 30 phút.",
    benefits: [
      "Giảm cân an toàn",
      "Chống oxy hóa mạnh",
      "Cải thiện tiêu hóa",
      "Detox tự nhiên",
    ],
    category: "weight-loss",
  },
  {
    id: "6",
    slug: "cafe-sim-thai-lan",
    name: "Cafe Sim Thái Lan - Cà Phê Giảm Cân",
    description:
      "Cà phê giảm cân từ Thái Lan với hương vị thơm ngon, giúp đốt cháy mỡ hiệu quả.",
    price: 180000,
    images: ["/images/products/cafe-sim-thai-lan/cafe-sim-thai-lan.jpg"],
    ingredients: [
      "Cà phê Arabica",
      "L-Carnitine",
      "Garcinia Cambogia",
      "Green Coffee Bean",
      "Natural Flavor",
    ],
    usage: "Pha 1 gói với 150ml nước nóng, uống buổi sáng.",
    benefits: [
      "Tăng cường năng lượng",
      "Đốt cháy calo",
      "Tỉnh táo tinh thần",
      "Hương vị thơm ngon",
    ],
    category: "weight-loss",
    featured: true,
  },
  {
    id: "7",
    slug: "detox-cholesteron",
    name: "HJ Detox Dấm Táo Rau Củ Quả",
    description:
      "Viên detox từ dấm táo và rau củ quả tự nhiên, giúp thanh lọc cơ thể và kiểm soát cholesterol.",
    price: 220000,
    images: ["/images/products/detox-cholesteron/detox-cholesteron.jpg"],
    ingredients: [
      "Dấm táo tự nhiên",
      "Chiết xuất rau củ quả",
      "Pectin",
      "Vitamin B6",
      "Potassium",
    ],
    usage: "Uống 2 viên/ngày trước bữa ăn với nhiều nước.",
    benefits: [
      "Detox cơ thể",
      "Kiểm soát cholesterol",
      "Cải thiện tiêu hóa",
      "Hỗ trợ giảm cân",
    ],
    category: "detox",
  },
  {
    id: "8",
    slug: "keto-slim",
    name: "Keto Slim - Viên Giảm Cân Ketogenic",
    description:
      "Viên giảm cân theo chế độ Keto, giúp cơ thể đốt cháy mỡ nhanh chóng và hiệu quả.",
    price: 380000,
    images: ["/images/products/keto-slim/keto-slim.jpg"],
    ingredients: ["BHB Salts", "MCT Oil", "Magnesium", "Calcium", "Sodium"],
    usage: "Uống 2 viên/ngày trước bữa ăn chính.",
    benefits: [
      "Đưa cơ thể vào trạng thái Ketosis",
      "Đốt cháy mỡ nhanh",
      "Tăng năng lượng",
      "Kiểm soát cảm giác đói",
    ],
    category: "weight-loss",
    featured: true,
  },
  {
    id: "9",
    slug: "liso-xanh",
    name: "Liso Xanh - Viên Giảm Cân Thảo Dược",
    description:
      "Viên giảm cân Liso Xanh từ thảo dược tự nhiên, an toàn và hiệu quả lâu dài.",
    price: 260000,
    images: ["/images/products/liso-xanh/liso-xanh.jpg"],
    ingredients: [
      "Green Tea Extract",
      "Guar Gum",
      "Spirulina",
      "Chlorella",
      "Fiber",
    ],
    usage: "Uống 1 viên/ngày trước bữa ăn sáng.",
    benefits: [
      "Giảm cân tự nhiên",
      "Detox cơ thể",
      "Bổ sung chất xơ",
      "Tăng cường miễn dịch",
    ],
    category: "weight-loss",
  },
  {
    id: "10",
    slug: "lisu-den",
    name: "Lisu Đen - Viên Giảm Cân Cao Cấp",
    description:
      "Viên giảm cân Lisu Đen với công thức nâng cấp, hiệu quả mạnh mẽ cho mọi đối tượng.",
    price: 290000,
    images: ["/images/products/lisu-den/lisu-den.jpg"],
    ingredients: [
      "Black Bean Extract",
      "L-Carnitine",
      "Chromium",
      "Garcinia Cambogia",
      "Green Coffee",
    ],
    usage: "Uống 1 viên/ngày sau bữa ăn tối.",
    benefits: [
      "Giảm cân hiệu quả",
      "Kiểm soát đường huyết",
      "Tăng cường trao đổi chất",
      "Chống oxy hóa",
    ],
    category: "weight-loss",
  },
  {
    id: "11",
    slug: "vi-nhat-thay-mo-siet-eo",
    name: "Vi Nhật Thay Mỡ Siết Eo",
    description:
      "Sản phẩm giảm mỡ bụng và siết eo hiệu quả từ công nghệ Nhật Bản.",
    price: 420000,
    images: [
      "/images/products/vi-nhat-thay-mo-siet-eo/vi-nhat-thay-mo-siet-eo.jpg",
    ],
    ingredients: [
      "Collagen Peptide",
      "Hyaluronic Acid",
      "L-Carnitine",
      "Coenzyme Q10",
      "Vitamin E",
    ],
    usage: "Uống 1 viên/ngày vào buổi tối trước khi ngủ.",
    benefits: [
      "Giảm mỡ bụng hiệu quả",
      "Siết chặt vòng eo",
      "Làm đẹp da",
      "Chống lão hóa",
    ],
    category: "weight-loss",
    featured: true,
  },
  {
    id: "12",
    slug: "vip-body-x7",
    name: "VIP Body X7 - Viên Giảm Cân Cao Cấp",
    description:
      "Viên giảm cân VIP Body X7 với công thức 7 thành phần hoạt chất mạnh mẽ.",
    price: 480000,
    images: ["/images/products/vip-body-x7/vip-body-x7.jpg"],
    ingredients: [
      "Garcinia Cambogia",
      "Green Coffee Bean",
      "Forskolin",
      "Raspberry Ketones",
      "African Mango",
      "L-Carnitine",
      "Chromium",
    ],
    usage: "Uống 2 viên/ngày trước bữa ăn sáng và trưa.",
    benefits: [
      "Giảm cân siêu tốc",
      "Đốt cháy mỡ toàn thân",
      "Kiểm soát cảm giác đói",
      "Tăng năng lượng",
    ],
    category: "weight-loss",
    featured: true,
  },
  {
    id: "13",
    slug: "vip-pp-99",
    name: "VIP PP 99 - Viên Giảm Cân Premium",
    description:
      "Viên giảm cân VIP PP 99 công thức độc quyền, hiệu quả 99% cho mọi thể trạng.",
    price: 520000,
    images: ["/images/products/vip-pp-99/vip-pp-99.jpg"],
    ingredients: [
      "White Kidney Bean",
      "Chitosan",
      "Garcinia Cambogia",
      "Green Tea",
      "Gymnema Sylvestre",
      "Alpha Lipoic Acid",
    ],
    usage: "Uống 1 viên/ngày trước bữa ăn chính.",
    benefits: [
      "Hiệu quả giảm cân 99%",
      "Ngăn hấp thụ tinh bột",
      "Kiểm soát đường huyết",
      "An toàn lâu dài",
    ],
    category: "weight-loss",
    featured: true,
  },
  {
    id: "14",
    slug: "wisdom",
    name: "Wisdom - Viên Uống Thông Minh Giảm Cân",
    description:
      "Viên uống Wisdom kết hợp trí tuệ cổ đại và khoa học hiện đại cho việc giảm cân thông minh.",
    price: 350000,
    images: ["/images/products/wisdom/wisdom.jpg"],
    ingredients: [
      "Ginseng Extract",
      "Ginkgo Biloba",
      "Garcinia Cambogia",
      "Green Tea",
      "Omega-3",
    ],
    usage: "Uống 1 viên/ngày vào buổi sáng sau ăn.",
    benefits: [
      "Giảm cân thông minh",
      "Tăng cường trí nhớ",
      "Cải thiện tuần hoàn",
      "Chống stress",
    ],
    category: "weight-loss",
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};
