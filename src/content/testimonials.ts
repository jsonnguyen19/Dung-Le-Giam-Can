export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
  platform: "tiktok" | "zalo";
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Thanh Hương",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Sản phẩm rất hiệu quả, mình giảm được 4kg sau 1 tháng sử dụng. Cảm ơn chị Dung nhiều ạ! ❤️",
    rating: 5,
    platform: "tiktok",
    date: "2025-05-15",
  },
  {
    id: "2",
    name: "Mai Anh",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Ban đầu mình hơi lo lắng nhưng sau khi dùng thử thấy rất an toàn, không có tác dụng phụ gì cả 👍",
    rating: 5,
    platform: "tiktok",
    date: "2025-05-14",
  },
  // Thêm các testimonial khác
];
