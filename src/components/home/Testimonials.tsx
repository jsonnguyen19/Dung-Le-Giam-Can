import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { AnimatedDiv } from "@/components/motion/WithAnimation";
import { testimonials } from "@/content/testimonials";

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

export const Testimonials = () => {
  return (
    <Section
      title="Khách hàng nói gì về chúng tôi?"
      subtitle="Những phản hồi chân thực từ người dùng sản phẩm"
      className="bg-pinkLight"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedDiv
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-4 md:p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start gap-4 mb-4">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
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

            <p className="mt-4 text-gray-600">{testimonial.comment}</p>
          </AnimatedDiv>
        ))}
      </div>
    </Section>
  );
};
