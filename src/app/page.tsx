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
