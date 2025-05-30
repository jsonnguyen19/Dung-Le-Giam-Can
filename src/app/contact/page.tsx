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
    <Section title="Liên hệ" subtitle="Liên hệ với chúng tôi để được tư vấn">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <AnimatedDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">Thông tin liên hệ</h2>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="text-xl">👩</span>
                  <span>{contactInfo.owner.name}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">📞</span>
                  <a
                    href={`tel:${contactInfo.owner.phone}`}
                    className="text-pink hover:underline"
                  >
                    {contactInfo.owner.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">📧</span>
                  <a
                    href={`mailto:${contactInfo.owner.email}`}
                    className="text-pink hover:underline"
                  >
                    {contactInfo.owner.email}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  <span>{contactInfo.address}</span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Giờ làm việc</h2>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Thứ 2 - Thứ 6:</span>
                  <span>{contactInfo.businessHours.weekday}</span>
                </p>
                <p className="flex justify-between">
                  <span>Thứ 7 - Chủ nhật:</span>
                  <span>{contactInfo.businessHours.weekend}</span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Theo dõi chúng tôi
              </h2>
              <div className="flex gap-4">
                <a
                  href={contactInfo.social.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-12 h-12 relative hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={contactInfo.social.tiktok.image}
                    alt="TikTok"
                    fill
                    className="rounded-lg"
                  />
                </a>
                <a
                  href={contactInfo.social.zalo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-12 h-12 relative hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={contactInfo.social.zalo.image}
                    alt="Zalo"
                    fill
                    className="rounded-lg"
                  />
                </a>
                <a
                  href={contactInfo.social.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-12 h-12 relative hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={contactInfo.social.youtube.image}
                    alt="YouTube"
                    fill
                    className="rounded-lg"
                  />
                </a>
              </div>
            </div>
          </AnimatedDiv>

          {/* Map */}
          <AnimatedDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square rounded-lg overflow-hidden bg-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197156!2d106.69786081478484!3d10.776960892319695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a9d8d1bb3%3A0x1b3da5e8c6d2d8ee!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIFRQLiBIQ00!5e0!3m2!1svi!2s!4v1620809808975!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </AnimatedDiv>
        </div>

        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 p-6 bg-pink/5 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Lưu ý</h2>
          <div className="space-y-2 text-gray-600">
            <p>
              • Vui lòng liên hệ trong giờ làm việc để được phục vụ tốt nhất
            </p>
            <p>• Đơn hàng sẽ được xử lý trong vòng 24h làm việc</p>
            <p>• Chat qua Zalo để được tư vấn nhanh nhất</p>
            <p>• Theo dõi TikTok để cập nhật thông tin mới nhất về sản phẩm</p>
          </div>
        </AnimatedDiv>
      </div>
    </Section>
  );
}
