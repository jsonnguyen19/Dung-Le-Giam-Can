"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import { Button } from "@/components/ui/Button";

const categories = [
  {
    title: "Baschi - Viên giảm cân hiệu quả",
    description: "Dòng sản phẩm kinh điển từ Thái Lan",
    benefits: [
      "Giảm 3-5kg/tháng",
      "Kiểm soát cảm giác đói",
      "Đốt cháy mỏ thừa",
    ],
    priceRange: "250k - 350k",
    bestFor: "Người mới bắt đầu, muốn giảm cân ổn định",
    icon: "💊",
    color: "from-pink to-pinkDark",
    products: ["Baschi Cam", "Baschi Đen", "Baschi Hồng", "Baschi Tím"],
  },
  {
    title: "Cafe & Thức uống giảm cân",
    description: "Kết hợp thưởng thức và giảm cân",
    benefits: ["Tăng năng lượng", "Đốt cháy calo", "Hương vị thơm ngon"],
    priceRange: "180k",
    bestFor: "Người yêu thích cà phê, muốn giảm cân tự nhiên",
    icon: "☕",
    color: "from-amber-400 to-orange-500",
    products: ["Cafe Sim Thái Lan"],
  },
  {
    title: "Detox & Thanh lọc cơ thể",
    description: "Thải độc gan, thận, kiểm soát cholesterol",
    benefits: [
      "Thanh lọc cơ thể",
      "Kiểm soát cholesterol",
      "Cải thiện tiêu hóa",
    ],
    priceRange: "220k",
    bestFor: "Người có vấn đề tiêu hóa, cholesterol cao",
    icon: "🌿",
    color: "from-green-400 to-emerald-600",
    products: ["HJ Detox Dấm Táo Rau Củ Quả"],
  },
  {
    title: "Sản phẩm cao cấp VIP",
    description: "Công thức đặc biệt, hiệu quả mạnh mẽ",
    benefits: ["Giảm cân nhanh chóng", "Công nghệ tiên tiến", "Hiệu quả 99%"],
    priceRange: "380k - 520k",
    bestFor: "Người muốn kết quả nhanh, sẵn sàng đầu tư",
    icon: "👑",
    color: "from-purple-500 to-indigo-600",
    products: [
      "VIP Body X7",
      "Viên uống giảm cân Thailand Yanhee",
      "Keto Slim",
      "Viên uống tăng cân Indo",
    ],
  },
];

export const ProductBenefitsSection = () => {
  return (
    <Section
      title="Chọn sản phẩm phù hợp với bạn"
      subtitle="Mỗi loại sản phẩm được thiết kế cho nhu cầu cụ thể"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <AnimatedDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg md:shadow-md overflow-hidden flex flex-col h-full"
          >
            <div
              className={`bg-gradient-to-r ${category.color} p-6 text-white`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{category.icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="text-white/90">{category.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{category.priceRange}</div>
                <div className="text-white/80 text-sm">Giá từ</div>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-6 flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">
                  ✨ Lợi ích:
                </h4>
                <ul className="space-y-2 mb-6">
                  {category.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-pink">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    🎯 Phù hợp với:
                  </h4>
                  <p className="text-gray-600 mb-3">{category.bestFor}</p>

                  <h4 className="font-semibold text-gray-900 mb-2">
                    📋 Sản phẩm tiêu biểu:
                  </h4>
                  <div className="space-y-1">
                    {category.products.map((product, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <span className="text-pink">•</span>
                        {product}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/products">
                <Button variant="outline" className="w-full mt-auto">
                  Xem sản phẩm →
                </Button>
              </Link>
            </div>
          </AnimatedDiv>
        ))}
      </div>

      <div className="mt-12 text-center">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white p-8 rounded-lg md:shadow-md max-w-2xl mx-auto"
        >
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            💬 Cần tư vấn sản phẩm phù hợp?
          </h4>
          <p className="text-gray-600 mb-6">
            Mỗi người có thể trạng và mục tiêu khác nhau. Liên hệ ngay để được
            tư vấn miễn phí sản phẩm phù hợp nhất với bạn. Đội ngũ chuyên gia sẽ
            hỗ trợ 24/7!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://zalo.me/0937221892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              📱 Tư vấn qua Zalo
            </a>
            <button
              onClick={() => {
                document
                  .getElementById("order")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-6 py-3 bg-pink text-white rounded-lg hover:bg-pinkDark transition-colors"
            >
              📋 Lên đơn miễn phí
            </button>
          </div>
        </AnimatedDiv>
      </div>
    </Section>
  );
};
