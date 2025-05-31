"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import {
  testimonials,
  getTestimonialsByPlatform,
} from "@/content/testimonials";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={index < rating ? "text-yellow-400" : "text-gray-300"}
        >
          ⭐
        </span>
      ))}
    </div>
  );
};

export const TestimonialsPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<
    "all" | "tiktok" | "zalo"
  >("all");

  const filteredTestimonials =
    selectedPlatform === "all"
      ? testimonials
      : getTestimonialsByPlatform(selectedPlatform);

  const stats = [
    { number: "2000+", label: "Khách hàng tin tưởng" },
    { number: "95%", label: "Đánh giá 5 sao" },
    { number: "4.8/5", label: "Điểm đánh giá trung bình" },
    { number: "85%", label: "Giảm cân thành công" },
  ];

  return (
    <>
      <Section
        title="Khách hàng nói gì về chúng tôi?"
        subtitle="Những đánh giá chân thực từ hàng nghìn khách hàng đã thành công"
      >
        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <AnimatedDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white p-6 rounded-lg md:shadow-sm border border-gray-100"
            >
              <div className="text-3xl font-bold text-pink mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </AnimatedDiv>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedPlatform("all")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedPlatform === "all"
                ? "bg-pink text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Tất cả ({testimonials.length})
          </button>
          <button
            onClick={() => setSelectedPlatform("tiktok")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
              selectedPlatform === "tiktok"
                ? "bg-pink text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            📱 TikTok ({getTestimonialsByPlatform("tiktok").length})
          </button>
          <button
            onClick={() => setSelectedPlatform("zalo")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
              selectedPlatform === "zalo"
                ? "bg-pink text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            💬 Zalo ({getTestimonialsByPlatform("zalo").length})
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <AnimatedDiv
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg md:shadow-md border border-gray-100 md:hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>
                      {new Date(testimonial.date).toLocaleDateString("vi-VN")}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      {testimonial.platform === "tiktok" ? "📱" : "💬"}
                      {testimonial.platform === "tiktok" ? "TikTok" : "Zalo"}
                    </span>
                  </div>
                </div>
              </div>

              <StarRating rating={testimonial.rating} />

              <p className="mt-4 text-gray-600 leading-relaxed">
                {testimonial.comment}
              </p>
            </AnimatedDiv>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-pink to-pinkDark text-white p-8 rounded-lg max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">
              Bạn cũng muốn có kết quả như họ?
            </h3>
            <p className="text-lg mb-6">
              Hãy để chúng tôi đồng hành cùng bạn trên hành trình giảm cân an
              toàn và hiệu quả
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://zalo.me/0937221892"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-pink rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                💬 Tư vấn miễn phí
              </a>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setTimeout(() => {
                    window.location.href = "/#order";
                  }, 500);
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors font-semibold border border-white/30"
              >
                🛒 Đặt hàng ngay
              </button>
            </div>
          </AnimatedDiv>
        </div>
      </Section>
    </>
  );
};
