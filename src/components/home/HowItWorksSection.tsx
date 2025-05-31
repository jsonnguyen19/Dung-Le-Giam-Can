"use client";

import { Section } from "@/components/ui/Section";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import {
  MessageCircle,
  ShoppingCart,
  ClipboardList,
  BarChart3,
  Target,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Tư vấn miễn phí",
    description:
      "Liên hệ để được tư vấn sản phẩm phù hợp với tình trạng của bạn",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Đặt hàng dễ dàng",
    description:
      "Lên đơn qua Zalo hoàn toàn miễn phí, không cần thanh toán trước",
    icon: ShoppingCart,
  },
  {
    step: "03",
    title: "Sử dụng đúng cách",
    description: "Theo hướng dẫn chi tiết và chế độ ăn uống khoa học đi kèm",
    icon: ClipboardList,
  },
  {
    step: "04",
    title: "Theo dõi kết quả",
    description: "Ghi nhận sự thay đổi và nhận hỗ trợ 24/7 từ đội ngũ tư vấn",
    icon: BarChart3,
  },
];

export const HowItWorksSection = () => {
  return (
    <Section
      title="Quy trình sử dụng"
      subtitle="4 bước đơn giản để đạt được vóc dáng mơ ước"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <AnimatedDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center relative"
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-pink/30 -z-10" />
            )}

            <div className="relative inline-flex items-center justify-center w-16 h-16 bg-pink text-white rounded-full text-2xl mb-4 font-bold">
              <step.icon size={28} />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-pinkDark text-white rounded-full text-xs flex items-center justify-center font-semibold">
                {step.step}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </AnimatedDiv>
        ))}
      </div>

      <div className="mt-12 text-center">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-pinkLight p-6 rounded-lg"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Target size={20} className="text-pink" />
            Cam kết kết quả
          </h4>
          <p className="text-gray-700">
            Giảm 3-5kg trong tháng đầu hoặc <strong>hoàn tiền 100%</strong>
          </p>
        </AnimatedDiv>
      </div>
    </Section>
  );
};
