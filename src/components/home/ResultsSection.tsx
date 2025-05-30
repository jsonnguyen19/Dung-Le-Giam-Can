"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { AnimatedDiv } from "@/components/motion/WithAnimation";

const results = [
  {
    name: "Chị Hương - 32 tuổi",
    before: "68kg",
    after: "59kg",
    duration: "2 tháng",
    story:
      "Sau sinh con thứ 2, cân nặng tăng mãi không giảm. Nhờ sản phẩm mà giảm được 9kg, vóc dáng thon gọn trở lại.",
    beforeImage: "/images/users/anomynous.jpg",
    afterImage: "/images/users/anomynous.jpg",
  },
  {
    name: "Anh Minh - 28 tuổi",
    before: "85kg",
    after: "75kg",
    duration: "3 tháng",
    story:
      "Công việc văn phòng làm tôi tăng cân nhanh. Dùng combo giảm cân 30 ngày liên tục 3 tháng, giảm 10kg rất hiệu quả.",
    beforeImage: "/images/users/anomynous.jpg",
    afterImage: "/images/users/anomynous.jpg",
  },
  {
    name: "Chị Mai - 35 tuổi",
    before: "72kg",
    after: "64kg",
    duration: "45 ngày",
    story:
      "Từ size XL về size M chỉ trong 45 ngày. Không chỉ giảm cân mà còn cải thiện được vấn đề tiêu hóa.",
    beforeImage: "/images/users/anomynous.jpg",
    afterImage: "/images/users/anomynous.jpg",
  },
];

const stats = [
  { number: "2000+", label: "Khách hàng thành công" },
  { number: "85%", label: "Giảm 5kg+ trong tháng đầu" },
  { number: "95%", label: "Hài lòng với kết quả" },
  { number: "4.8/5", label: "Đánh giá trung bình" },
];

export const ResultsSection = () => {
  return (
    <Section
      title="Kết quả thực tế"
      subtitle="Những thành công có thật từ khách hàng của chúng tôi"
      className="bg-gray-50"
    >
      {/* Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <AnimatedDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="text-3xl font-bold text-pink mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </AnimatedDiv>
        ))}
      </div>

      {/* Success Stories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {results.map((result, index) => (
          <AnimatedDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={result.beforeImage}
                  alt={result.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{result.name}</h3>
                  <p className="text-sm text-gray-500">
                    Thời gian: {result.duration}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4 p-4 bg-pinkLight rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">
                    {result.before}
                  </div>
                  <div className="text-xs text-gray-500 uppercase">Trước</div>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-8 h-8 text-pink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink">
                    {result.after}
                  </div>
                  <div className="text-xs text-gray-500 uppercase">Sau</div>
                </div>
              </div>

              <p className="text-gray-600 text-sm italic leading-relaxed">
                "{result.story}"
              </p>
            </div>
          </AnimatedDiv>
        ))}
      </div>

      <div className="mt-12 text-center">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-pink to-pinkDark text-white p-8 rounded-lg"
        >
          <h4 className="text-2xl font-bold mb-4">Bạn cũng có thể làm được!</h4>
          <p className="text-lg mb-6">
            Hãy để chúng tôi đồng hành cùng bạn trên hành trình giảm cân
          </p>
          <button
            onClick={() => {
              document
                .getElementById("order")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-pink px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Bắt đầu ngay hôm nay ✨
          </button>
        </AnimatedDiv>
      </div>
    </Section>
  );
};
