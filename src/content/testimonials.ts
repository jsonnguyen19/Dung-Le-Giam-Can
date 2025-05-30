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
      "Sản phẩm rất hiệu quả, mình giảm được 4kg sau 1 tháng sử dụng. Cảm ơn chị Dung nhiều ạ! Mình đã thử nhiều phương pháp khác nhưng không hiệu quả, rất may là đã tìm thấy sản phẩm này. ❤️",
    rating: 5,
    platform: "tiktok",
    date: "2025-05-15",
  },
  {
    id: "2",
    name: "Mai Anh",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Ban đầu mình hơi lo lắng nhưng sau khi dùng thử thấy rất an toàn, không có tác dụng phụ gì cả. Mình đang dùng tháng thứ 2 và đã giảm được 6kg, da dẻ cũng đẹp hơn hẳn. 👍",
    rating: 5,
    platform: "tiktok",
    date: "2025-05-14",
  },
  {
    id: "3",
    name: "Ngọc Trâm",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Sau sinh mình tăng gần 15kg, thử đủ cách không giảm. Nhờ sản phẩm này mà sau 2 tháng mình đã giảm được 8kg và lấy lại vóc dáng. Quan trọng là không ảnh hưởng đến việc cho con bú nhé các mẹ!",
    rating: 5,
    platform: "zalo",
    date: "2025-05-10",
  },
  {
    id: "4",
    name: "Văn Minh",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Nam cũng dùng được sản phẩm này nha. Mình bị béo bụng lâu năm, tập gym nhiều nhưng không giảm. Sau 45 ngày sử dụng thì giảm được 7kg, cơ bụng đã bắt đầu hiện lên rõ rệt.",
    rating: 4,
    platform: "tiktok",
    date: "2025-05-08",
  },
  {
    id: "5",
    name: "Bích Ngọc",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Mình đã 45 tuổi, trao đổi chất chậm nên giảm cân rất khó. Sản phẩm này giúp mình giảm được 5kg sau 2 tháng, người nhẹ nhàng hơn hẳn và sức khỏe cũng cải thiện. Sẽ tiếp tục sử dụng!",
    rating: 5,
    platform: "zalo",
    date: "2025-05-05",
  },
  {
    id: "6",
    name: "Thu Trang",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Mình dùng sản phẩm được 3 tuần. Hiệu quả đến bất ngờ, giảm 3kg mà không cần nhịn ăn. Mình vẫn ăn uống bình thường nhưng cảm thấy ngon miệng hơn và ít thèm đồ ngọt. Sẽ giới thiệu cho bạn bè!",
    rating: 5,
    platform: "tiktok",
    date: "2025-04-28",
  },
  {
    id: "7",
    name: "Hồng Nhung",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Hàng chính hãng, giao nhanh. Mình dùng được 1 tuần thấy người nhẹ hơn, ít đầy bụng. Chị Dung tư vấn rất tận tình, còn hướng dẫn cả chế độ ăn uống phù hợp nữa. Sẽ ủng hộ shop dài dài.",
    rating: 5,
    platform: "zalo",
    date: "2025-04-25",
  },
  {
    id: "8",
    name: "Minh Tâm",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Mình bị tiểu đường type 2 nên rất lo lắng khi dùng sản phẩm giảm cân. Đã tham khảo ý kiến bác sĩ và được khuyên dùng sản phẩm này. Sau 1,5 tháng đã giảm 6kg, đường huyết cũng ổn định hơn.",
    rating: 5,
    platform: "tiktok",
    date: "2025-04-20",
  },
  {
    id: "9",
    name: "Thanh Thảo",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Lúc đầu mình nghi ngờ lắm, nghĩ không thể giảm cân mà không cần ăn kiêng. Nhưng sau 1 tháng dùng thì thực sự hiệu quả, mình giảm được 3.5kg và vòng eo giảm 5cm. Cảm ơn chị Dung đã tư vấn tận tình!",
    rating: 4,
    platform: "zalo",
    date: "2025-04-18",
  },
  {
    id: "10",
    name: "Hoàng Nam",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Mình làm văn phòng, ngồi nhiều nên dễ tích mỡ bụng. Dùng sản phẩm được 2 tháng giảm 8kg, từ 82kg xuống 74kg. Giờ đã tự tin mặc những bộ quần áo trước đây không dám mặc rồi!",
    rating: 5,
    platform: "tiktok",
    date: "2025-04-15",
  },
  {
    id: "11",
    name: "Thùy Linh",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Mình bị rối loạn nội tiết nên rất khó giảm cân. Đã thử nhiều phương pháp không hiệu quả. Sau 2 tháng sử dụng sản phẩm, mình giảm được 7kg và cảm thấy sức khỏe cải thiện rõ rệt. Cám ơn chị Dung rất nhiều!",
    rating: 5,
    platform: "zalo",
    date: "2025-04-10",
  },
  {
    id: "12",
    name: "Quỳnh Như",
    avatar: "/images/users/anomynous.jpg",
    comment:
      "Mình mua cho cả nhà cùng dùng. Sau 6 tuần, mình giảm 4kg, chồng giảm 6kg. Cả nhà đều khỏe mạnh hơn, ăn ngon miệng hơn. Đặc biệt là không bị mệt mỏi như khi dùng các sản phẩm giảm cân khác.",
    rating: 5,
    platform: "tiktok",
    date: "2025-04-05",
  },
];

// Get featured testimonials for homepage (first 6)
export const getFeaturedTestimonials = (limit: number = 6): Testimonial[] => {
  return testimonials.slice(0, limit);
};

// Get testimonials by platform
export const getTestimonialsByPlatform = (
  platform: "tiktok" | "zalo"
): Testimonial[] => {
  return testimonials.filter((t) => t.platform === platform);
};

// Get recent testimonials
export const getRecentTestimonials = (limit: number = 8): Testimonial[] => {
  return testimonials
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
