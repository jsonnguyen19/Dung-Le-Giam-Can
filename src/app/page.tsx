import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustFactors } from "@/components/home/TrustFactors";
import { AboutSection } from "@/components/home/AboutSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ProductBenefitsSection } from "@/components/home/ProductBenefitsSection";
import { ResultsSection } from "@/components/home/ResultsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { GuaranteeSection } from "@/components/home/GuaranteeSection";
import { FAQSection } from "@/components/home/FAQSection";
import { RecentBlogs } from "@/components/home/RecentBlogs";
import { OrderSection } from "@/components/home/OrderSection";

export const metadata: Metadata = {
  title: "Dung Lê Giảm Cân - Sản phẩm giảm cân Thái Lan chính hãng",
  description:
    "Khám phá bộ sản phẩm giảm cân an toàn, hiệu quả từ Thái Lan. Cam kết không tăng cân lại, có chứng nhận an toàn.",
  openGraph: {
    title: "Dung Lê Giảm Cân - Sản phẩm giảm cân Thái Lan chính hãng",
    description:
      "Khám phá bộ sản phẩm giảm cân an toàn, hiệu quả từ Thái Lan. Cam kết không tăng cân lại, có chứng nhận an toàn.",
    type: "website",
    images: [
      {
        url: "https://dunglegiamcan.com/images/banners/banner-01.jpg",
        width: 1200,
        height: 630,
        alt: "Dung Lê Giảm Cân",
      },
    ],
    siteName: "Dung Lê Giảm Cân",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dung Lê Giảm Cân - Sản phẩm giảm cân Thái Lan chính hãng",
    description:
      "Khám phá bộ sản phẩm giảm cân an toàn, hiệu quả từ Thái Lan. Cam kết không tăng cân lại, có chứng nhận an toàn.",
    images: ["https://dunglegiamcan.com/images/banners/banner-01.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustFactors />
      <AboutSection />
      <HowItWorksSection />
      <FeaturedProducts />
      <ProductBenefitsSection />
      <ResultsSection />
      <Testimonials />
      <GuaranteeSection />
      <FAQSection />
      <RecentBlogs />
      <OrderSection />
    </>
  );
}
