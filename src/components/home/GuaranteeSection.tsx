"use client";

import { Section } from "@/components/ui/Section";
import { AnimatedDiv } from "@/components/motion/WithAnimation";

const guarantees = [
  {
    icon: "🛡️",
    title: "Hoàn tiền 100%",
    description:
      "Nếu không giảm được 3kg trong tháng đầu, chúng tôi hoàn lại 100% số tiền",
    highlight: true,
  },
  {
    icon: "✅",
    title: "Hàng chính hãng",
    description:
      "Cam kết 100% sản phẩm chính hãng, có tem phụ và giấy tờ đầy đủ",
    highlight: false,
  },
  {
    icon: "🚚",
    title: "Freeship toàn quốc",
    description:
      "Miễn phí vận chuyển toàn quốc, lên đơn qua Zalo hoàn toàn miễn phí",
    highlight: false,
  },
  {
    icon: "📞",
    title: "Hỗ trợ 24/7",
    description:
      "Đội ngũ tư vấn chuyên nghiệp hỗ trợ bạn 24/7 trong quá trình sử dụng",
    highlight: false,
  },
  {
    icon: "🔄",
    title: "Đổi trả dễ dàng",
    description: "Đổi trả trong 7 ngày nếu sản phẩm có vấn đề về chất lượng",
    highlight: false,
  },
  {
    icon: "🏆",
    title: "Uy tín 5 năm",
    description:
      "Hơn 5 năm kinh nghiệm trong lĩnh vực giảm cân, được hàng nghìn khách hàng tin tưởng",
    highlight: false,
  },
];

export const GuaranteeSection = () => {
  return (
    <Section
      title="Cam kết của chúng tôi"
      subtitle="Những đảm bảo vững chắc cho hành trình giảm cân của bạn"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guarantees.map((guarantee, index) => (
          <AnimatedDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-6 rounded-lg text-center ${
              guarantee.highlight
                ? "bg-gradient-to-br from-pink to-pinkDark text-white md:shadow-lg"
                : "bg-white border border-gray-200 md:shadow-sm"
            }`}
          >
            <div className="text-4xl mb-4">{guarantee.icon}</div>
            <h3
              className={`text-xl font-semibold mb-3 ${
                guarantee.highlight ? "text-white" : "text-gray-900"
              }`}
            >
              {guarantee.title}
            </h3>
            <p
              className={`leading-relaxed ${
                guarantee.highlight ? "text-white/90" : "text-gray-600"
              }`}
            >
              {guarantee.description}
            </p>
            {guarantee.highlight && (
              <div className="mt-4 inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                ⭐ Cam kết mạnh nhất
              </div>
            )}
          </AnimatedDiv>
        ))}
      </div>

      <div className="mt-12">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-pinkLight p-8 rounded-lg text-center"
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            🎯 Tại sao bạn nên chọn chúng tôi?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="font-semibold text-gray-900 mb-2">
                💊 Sản phẩm chất lượng
              </div>
              <p className="text-gray-700 text-sm">
                Nhập khẩu trực tiếp từ Thái Lan, có đầy đủ giấy tờ chứng nhận
                FDA
              </p>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-2">
                🏥 An toàn tuyệt đối
              </div>
              <p className="text-gray-700 text-sm">
                Từ thảo dược thiên nhiên, không gây tác dụng phụ hay phụ thuộc
              </p>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-2">
                💯 Hiệu quả đã chứng minh
              </div>
              <p className="text-gray-700 text-sm">
                Hàng nghìn khách hàng đã thành công, 95% hài lòng với kết quả
              </p>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </Section>
  );
};
