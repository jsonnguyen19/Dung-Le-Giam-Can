"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { AnimatedDiv } from "@/components/motion/WithAnimation";

const faqs = [
  {
    question: "Sản phẩm có an toàn không?",
    answer:
      "Hoàn toàn an toàn! ✅ Tất cả sản phẩm đều được nhập khẩu chính hãng từ Thái Lan với đầy đủ chứng nhận FDA và giấy phép lưu hành. Sản phẩm được sản xuất từ 100% thảo dược thiên nhiên như trà xanh, garcinia cambogia, L-carnitine... đã được sử dụng an toàn trong hàng trăm năm. Nhà máy sản xuất đạt tiêu chuẩn GMP quốc tế, quy trình kiểm nghiệm nghiêm ngặt 15 bước. Hiện tại đã có hơn 2000+ khách hàng sử dụng an toàn không có trường hợp nào gặp vấn đề về sức khỏe.",
  },
  {
    question: "Bao lâu thì có kết quả?",
    answer:
      "Kết quả có thể thấy ngay từ tuần đầu tiên! 📊 Cụ thể: TUẦN 1-2: Cảm giác nhẹ người, giảm cảm giác thèm ăn, tinh thần thoải mái hơn. TUẦN 3-4: Giảm 2-3kg, quần áo rộng hơn, bụng phẳng hơn. THÁNG 2-3: Giảm 5-8kg, vóc dáng thon gọn rõ rệt. Tuy nhiên kết quả có thể khác nhau tùy vào: thể trạng ban đầu, chế độ ăn uống, mức độ vận động. Để đạt hiệu quả tối ưu, khuyên bạn nên kết hợp với chế độ ăn uống lành mạnh và vận động nhẹ 30 phút/ngày.",
  },
  {
    question: "Sau khi ngừng dùng có tăng cân lại không?",
    answer:
      "Không lo tăng cân trở lại nếu duy trì đúng cách! 🎯 Sản phẩm hoạt động theo cơ chế: tăng tốc trao đổi chất, điều chỉnh hormone kiểm soát cảm giác đói, hỗ trợ gan thải độc hiệu quả. Sau liệu trình, cơ thể đã hình thành thói quen mới về ăn uống và trao đổi chất. Để duy trì kết quả lâu dài: ăn uống cân bằng 80-20 (80% healthy, 20% enjoy), uống đủ 2L nước/ngày, ngủ đủ 7-8h, vận động đều đặn. 95% khách hàng duy trì được cân nặng sau 6 tháng ngừng sử dụng khi tuân thủ hướng dẫn.",
  },
  {
    question: "Có tác dụng phụ gì không?",
    answer:
      "Không có tác dụng phụ có hại! 💊 Sản phẩm từ 100% thảo dược thiên nhiên, không chứa chất kích thích mạnh hay hóa chất độc hại. Một số phản ứng tự nhiên trong 3-5 ngày đầu (điều chỉnh cơ thể): ít thèm ăn hơn (đây là mục tiêu), cảm giác nhẹ người, đi tiểu nhiều hơn (thải độc), đôi khi hơi buồn nôn nhẹ (gan đang thải độc). Những phản ứng này hoàn toàn bình thường và sẽ biến mất sau vài ngày. Không gây: mất ngủ, tim đập nhanh, run rẩy, phụ thuộc. Phù hợp với người từ 16-65 tuổi.",
  },
  {
    question: "Phụ nữ có thai và cho con bú có dùng được không?",
    answer:
      "Không khuyến khích sử dụng trong thời kỳ đặc biệt này! 🤱 Mặc dù sản phẩm an toàn từ thảo dược nhưng trong thai kỳ và cho con bú, cơ thể mẹ cần đầy đủ dinh dưỡng cho sự phát triển của bé. Thời điểm phù hợp để giảm cân: sau sinh ít nhất 6 tháng và đã cai sữa hoàn toàn, có thể trạng ổn định. Thay vào đó, mẹ có thể: ăn uống cân bằng, vận động nhẹ nhàng, uống nhiều nước, nghỉ ngơi đầy đủ. Sau khi sinh và cai sữa, chúng tôi sẽ tư vấn liệu trình phù hợp để mẹ lấy lại vóc dáng an toàn và hiệu quả.",
  },
  {
    question: "Giá cả như thế nào? Có ưu đãi gì không?",
    answer:
      "Giá rất hợp lý so với chất lượng! 💰 BẢNG GIÁ CHI TIẾT: Viên uống đơn lẻ: 220k-520k (dùng 1 tháng), Trà detox: 180k-330k (dùng 1 tháng), Bột protein: 280k-550k (dùng 1 tháng), Combo 7 ngày: 550k (tiết kiệm 15%), Combo 30 ngày: 1.2M (tiết kiệm 25%). ƯU ĐÃI ĐẶC BIỆT: Freeship toàn quốc, Tặng kèm chế độ ăn uống khoa học, Hỗ trợ tư vấn 24/7 miễn phí, Hoàn tiền 100% nếu không hiệu quả, Giảm giá khi mua combo hoặc giới thiệu bạn bè. Trung bình chỉ 15-20k/ngày cho một cơ thể khỏe mạnh!",
  },
  {
    question: "Làm sao để đặt hàng?",
    answer:
      "Quy trình đặt hàng cực kỳ đơn giản và an toàn! 📱 BƯỚC 1: Liên hệ Zalo 0937221892 (hoặc click vào form đặt hàng trên website). BƯỚC 2: Tư vấn viên sẽ hỏi về tình trạng sức khỏe, mục tiêu giảm cân để tư vấn sản phẩm phù hợp MIỄN PHÍ. BƯỚC 3: Lên đơn hàng với thông tin: họ tên, số điện thoại, địa chỉ nhận hàng. BƯỚC 4: Nhận hàng tại nhà trong 1-3 ngày, kiểm tra kỹ rồi mới thanh toán cho shipper. KHÔNG CẦN: chuyển khoản trước, đặt cọc, ra ngoài mua. Chúng tôi ship COD toàn quốc, nhận hàng mới trả tiền nên bạn hoàn toàn an tâm!",
  },
  {
    question: "Tại sao nên chọn Dung Lê Giảm Cân?",
    answer:
      "5 lý do khách hàng tin tưởng chọn chúng tôi! 🏆 1. UY TÍN 5 NĂM: Kinh nghiệm lâu năm, hơn 2000+ khách hàng thành công. 2. SẢN PHẨM CHÍNH HÃNG: 100% nhập khẩu từ Thái Lan, có đầy đủ giấy tờ chứng nhận. 3. CAM KẾT MẠNH: Hoàn tiền 100% nếu không giảm được 3kg trong tháng đầu. 4. HỖ TRỢ TẬN TÌNH: Tư vấn 24/7, hướng dẫn chi tiết từng bước. 5. AN TOÀN TUYỆT ĐỐI: Không tác dụng phụ, phù hợp mọi lứa tuổi. Đặc biệt: Chúng tôi không chỉ bán sản phẩm mà còn đồng hành cùng bạn trong suốt hành trình giảm cân với lộ trình cá nhân hóa!",
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
