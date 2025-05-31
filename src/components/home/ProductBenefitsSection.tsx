"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import { Button } from "@/components/ui/Button";

const categories = [
  {
    title: "Viên uống giảm cân",
    description: "Hỗ trợ đốt mỡ, tăng trao đổi chất",
    benefits: ["Giảm 3-5kg/tháng", "Kiểm soát cơn đói", "Tăng năng lượng"],
    priceRange: "220k - 520k",
    bestFor: "Người bận rộn, muốn giảm cân nhanh",
    icon: "💊",
    color: "from-pink to-pinkDark",
  },
  {
    title: "Bột Protein & Smoothie",
    description: "Thay thế bữa ăn, bổ sung dinh dưỡng",
    benefits: ["Giảm cân lành mạnh", "Duy trì cơ bắp", "No lâu 4-6h"],
    priceRange: "280k - 550k",
    bestFor: "Người tập gym, muốn giảm cân an toàn",
    icon: "🥤",
    color: "from-green-400 to-green-600",
  },
  {
    title: "Trà Detox",
    description: "Thanh lọc cơ thể, giảm mỡ bụng",
    benefits: ["Detox gan thận", "Giảm mỡ bụng", "Da sáng mịn"],
    priceRange: "180k - 330k",
    bestFor: "Người có vấn đề tiêu hóa, mỡ bụng",
    icon: "🍵",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    title: "Combo giảm cân",
    description: "Giải pháp toàn diện 7-30 ngày",
    benefits: ["Giảm 5-8kg", "Kết quả bền vững", "Hướng dẫn chi tiết"],
    priceRange: "550k - 1.2M",
    bestFor: "Người muốn kết quả nhanh và lâu dài",
    icon: "📦",
    color: "from-purple-400 to-purple-600",
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
            className="bg-white rounded-lg md:shadow-md overflow-hidden"
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

            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  ✨ Lợi ích:
                </h4>
                <ul className="space-y-2">
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
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🎯 Phù hợp với:
                </h4>
                <p className="text-gray-600">{category.bestFor}</p>
              </div>

              <Link href="/products">
                <Button variant="outline" className="w-full">
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
            💬 Chưa biết chọn sản phẩm nào?
          </h4>
          <p className="text-gray-600 mb-6">
            Liên hệ với chúng tôi để được tư vấn miễn phí sản phẩm phù hợp nhất
            với thể trạng và mục tiêu của bạn
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
