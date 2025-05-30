"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { AnimatedDiv } from "@/components/motion/WithAnimation";

const faqs = [
  {
    question: "Sản phẩm có an toàn không?",
    answer:
      "Tất cả sản phẩm đều được nhập khẩu chính hãng từ Thái Lan, có đầy đủ chứng nhận FDA và đã qua kiểm nghiệm nghiêm ngặt. An toàn tuyệt đối cho sức khỏe.",
  },
  {
    question: "Bao lâu thì có kết quả?",
    answer:
      "Thông thường sau 1-2 tuần sử dụng bạn sẽ thấy cảm giác nhẹ người, giảm cảm giác thèm ăn. Kết quả rõ rệt nhất là sau 1 tháng với việc giảm 3-5kg.",
  },
  {
    question: "Sau khi ngừng dùng có tăng cân lại không?",
    answer:
      "Với công thức đặc biệt, sản phẩm giúp điều chỉnh trao đổi chất và thói quen ăn uống. Nếu duy trì chế độ ăn hợp lý thì không lo tăng cân trở lại.",
  },
  {
    question: "Có tác dụng phụ gì không?",
    answer:
      "Sản phẩm từ thảo dược thiên nhiên, không gây tác dụng phụ. Một số người có thể cảm thấy nhẹ người và ít thèm ăn trong những ngày đầu - đây là phản ứng bình thường.",
  },
  {
    question: "Phụ nữ có thai và cho con bú có dùng được không?",
    answer:
      "Không khuyến khích sử dụng đối với phụ nữ mang thai và đang cho con bú. Nên tham khảo ý kiến bác sĩ trước khi sử dụng.",
  },
  {
    question: "Giá cả như thế nào? Có ưu đãi gì không?",
    answer:
      "Giá từ 180.000đ - 1.200.000đ tùy sản phẩm. Có nhiều ưu đãi như combo tiết kiệm, freeship toàn quốc và chính sách hoàn tiền nếu không hiệu quả.",
  },
  {
    question: "Làm sao để đặt hàng?",
    answer:
      "Rất đơn giản! Bạn chỉ cần liên hệ qua Zalo 0937221892 để được tư vấn và lên đơn hàng hoàn toàn miễn phí. Không cần thanh toán trước, nhận hàng mới trả tiền.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section
      title="Câu hỏi thường gặp"
      subtitle="Giải đáp mọi thắc mắc của bạn về sản phẩm"
      className="bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </Section>
  );
};
