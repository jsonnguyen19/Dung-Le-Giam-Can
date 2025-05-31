import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { contactInfo } from "@/content/contact";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Liên hệ - Tư vấn giảm cân miễn phí | Dung Lê Giảm Cân",
  description:
    "Liên hệ với chúng tôi để được tư vấn miễn phí về sản phẩm giảm cân. Đội ngũ tư vấn chuyên nghiệp, nhiệt tình sẽ giúp bạn chọn được sản phẩm phù hợp nhất.",
  openGraph: {
    title: "Liên hệ - Tư vấn giảm cân miễn phí | Dung Lê Giảm Cân",
    description:
      "Liên hệ với chúng tôi để được tư vấn miễn phí về sản phẩm giảm cân. Đội ngũ tư vấn chuyên nghiệp, nhiệt tình sẽ giúp bạn chọn được sản phẩm phù hợp nhất.",
    type: "website",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Liên hệ Dung Lê Giảm Cân",
      },
    ],
    siteName: "Dung Lê Giảm Cân",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liên hệ - Tư vấn giảm cân miễn phí | Dung Lê Giảm Cân",
    description:
      "Liên hệ với chúng tôi để được tư vấn miễn phí về sản phẩm giảm cân. Đội ngũ tư vấn chuyên nghiệp, nhiệt tình sẽ giúp bạn chọn được sản phẩm phù hợp nhất.",
    images: ["/images/logo/logo.png"],
  },
};

export default function ContactPage() {
  return (
    <Section
      title="Liên hệ"
      subtitle="Liên hệ với chúng tôi để được tư vấn miễn phí"
    >
      <div className="max-w-4xl mx-auto">
        {/* Main Contact Card */}
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Sẵn sàng hỗ trợ bạn
            </h2>
            <p className="text-gray-600">
              Đội ngũ tư vấn chuyên nghiệp, nhiệt tình phục vụ 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-pink/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👩</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {contactInfo.owner.name}
                      </p>
                      <p className="text-sm text-gray-600">Chủ cửa hàng</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <a
                        href={`tel:${contactInfo.owner.phone}`}
                        className="font-medium text-pink hover:text-pink/80 transition-colors"
                      >
                        {contactInfo.owner.phone}
                      </a>
                      <p className="text-sm text-gray-600">Gọi ngay</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <a
                        href={`mailto:${contactInfo.owner.email}`}
                        className="font-medium text-pink hover:text-pink/80 transition-colors"
                      >
                        {contactInfo.owner.email}
                      </a>
                      <p className="text-sm text-gray-600">Gửi email</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {contactInfo.address}
                      </p>
                      <p className="text-sm text-gray-600">Địa chỉ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours & Social */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Giờ làm việc
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Thứ 2 - Thứ 6:</span>
                    <span className="font-medium text-gray-800">
                      {contactInfo.businessHours.weekday}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Thứ 7 - Chủ nhật:</span>
                    <span className="font-medium text-gray-800">
                      {contactInfo.businessHours.weekend}
                    </span>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-sm text-green-800 font-medium text-center">
                      🟢 Đang hoạt động - Sẵn sàng hỗ trợ
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Theo dõi chúng tôi
                </h3>
                <div className="flex gap-4 justify-center">
                  <a
                    href={contactInfo.social.tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-12 h-12 relative group-hover:scale-110 transition-transform">
                      <Image
                        src={contactInfo.social.tiktok.image}
                        alt="TikTok"
                        fill
                        className="rounded-lg"
                      />
                    </div>
                    <span className="text-xs text-gray-600 font-medium">
                      TikTok
                    </span>
                  </a>

                  <a
                    href={contactInfo.social.zalo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-12 h-12 relative group-hover:scale-110 transition-transform">
                      <Image
                        src={contactInfo.social.zalo.image}
                        alt="Zalo"
                        fill
                        className="rounded-lg"
                      />
                    </div>
                    <span className="text-xs text-gray-600 font-medium">
                      Zalo
                    </span>
                  </a>

                  <a
                    href={contactInfo.social.youtube.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-md"
                  >
                    <div className="w-12 h-12 relative group-hover:scale-110 transition-transform">
                      <Image
                        src={contactInfo.social.youtube.image}
                        alt="YouTube"
                        fill
                        className="rounded-lg"
                      />
                    </div>
                    <span className="text-xs text-gray-600 font-medium">
                      YouTube
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedDiv>

        {/* Call to Action */}
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-gradient-to-r from-pink to-pink/80 rounded-2xl p-6 text-white text-center">
            <div className="mb-4">
              <span className="text-4xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Chat Zalo ngay</h3>
            <p className="text-pink-100 mb-4 text-sm">
              Nhận tư vấn miễn phí trong vòng 5 phút
            </p>
            <a
              href={contactInfo.social.zalo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Chat ngay
            </a>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
            <div className="mb-4">
              <span className="text-4xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Gọi điện tư vấn</h3>
            <p className="text-green-100 mb-4 text-sm">
              Đường dây nóng 24/7 hỗ trợ khách hàng
            </p>
            <a
              href={`tel:${contactInfo.owner.phone}`}
              className="inline-block bg-white text-green-600 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Gọi ngay
            </a>
          </div>
        </AnimatedDiv>

        {/* Notes Section */}
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💡</span>
            <h3 className="text-lg font-semibold text-gray-800">
              Lưu ý quan trọng
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Tư vấn miễn phí trong giờ làm việc</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Đơn hàng xử lý trong 24h làm việc</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Chat Zalo để được hỗ trợ nhanh nhất</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">✓</span>
                <span>Theo dõi TikTok để cập nhật sản phẩm mới</span>
              </p>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </Section>
  );
}
