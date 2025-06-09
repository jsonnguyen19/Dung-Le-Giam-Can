export interface Review {
  id: string;
  productId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
  helpful?: number;
}

export const reviews: Review[] = [
  // Reviews cho Baschi Cam (product id: "1")
  {
    id: "r1",
    productId: "1",
    userName: "Nguyễn Thu Hà",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Tôi đã sử dụng Baschi Cam được 2 tháng và giảm được 8kg! Sản phẩm thật sự hiệu quả, không có tác dụng phụ gì. Cảm ơn shop đã tư vấn tận tình.",
    date: "2024-12-15",
    verified: true,
    helpful: 24,
  },
  {
    id: "r2",
    productId: "1",
    userName: "Trần Minh Châu",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Sản phẩm ok, uống được 1 tháng giảm 4kg. Mình thấy cảm giác thèm ăn giảm hẳn, có điều hơi khó nuốt một chút.",
    date: "2024-12-10",
    verified: true,
    helpful: 12,
  },
  {
    id: "r3",
    productId: "1",
    userName: "Lê Thị Mai",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Mình đã thử nhiều sản phẩm giảm cân khác nhưng chỉ có Baschi Cam là hiệu quả nhất. 3 tháng giảm 12kg, vóc dáng thon gọn hẳn.",
    date: "2024-12-08",
    verified: true,
    helpful: 18,
  },
  {
    id: "r4",
    productId: "1",
    userName: "Phạm Văn Đức",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Vợ mình dùng rất hiệu quả, 2 tháng giảm 7kg. Ship nhanh, đóng gói cẩn thận.",
    date: "2024-12-05",
    verified: false,
    helpful: 8,
  },
  {
    id: "r5",
    productId: "1",
    userName: "Hoàng Thị Lan",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Sản phẩm chất lượng, mình đã giảm được 6kg trong 6 tuần. Cảm thấy khỏe hơn và tự tin hơn nhiều.",
    date: "2024-12-02",
    verified: true,
    helpful: 15,
  },
  {
    id: "r13",
    productId: "1",
    userName: "Nguyễn Văn Hùng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Vợ tôi dùng Baschi Cam 6 tuần giảm 5kg. Sản phẩm ổn, không có tác dụng phụ. Sẽ mua tiếp cho vợ.",
    date: "2024-12-01",
    verified: true,
    helpful: 11,
  },
  {
    id: "r14",
    productId: "1",
    userName: "Phan Thị Xuân",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Hiệu quả tuyệt vời! 3 tháng giảm 10kg từ 65kg xuống 55kg. Da dẻ cũng tươi tắn hơn. Recommend 100%!",
    date: "2024-11-28",
    verified: true,
    helpful: 32,
  },
  {
    id: "r15",
    productId: "1",
    userName: "Đỗ Thị Hương",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Giảm cân ổn định, 1 tháng 3kg. Không bị đói hay mệt mỏi gì. Giá hợp lý.",
    date: "2024-11-25",
    verified: true,
    helpful: 9,
  },
  {
    id: "r16",
    productId: "1",
    userName: "Lại Văn Thành",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Mua cho vợ dùng rất tốt. 2 tháng giảm 7kg, vóc dáng cải thiện rõ rệt. Shop tư vấn nhiệt tình.",
    date: "2024-11-22",
    verified: true,
    helpful: 14,
  },
  {
    id: "r17",
    productId: "1",
    userName: "Bùi Thị Liên",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Sản phẩm tốt, uống 1.5 tháng giảm 5kg. Cảm giác nhẹ nhàng hơn, quần áo rộng ra nhiều.",
    date: "2024-11-20",
    verified: true,
    helpful: 8,
  },
  {
    id: "r18",
    productId: "1",
    userName: "Ngô Thị Thanh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Lần đầu dùng sản phẩm giảm cân mà thấy hiệu quả. 6 tuần giảm 6kg, không stress hay mất ngủ gì cả.",
    date: "2024-11-18",
    verified: true,
    helpful: 19,
  },
  {
    id: "r19",
    productId: "1",
    userName: "Vũ Thị Hoa",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Dùng được 3 tuần giảm 3kg. Thấy hiệu quả rồi, sẽ tiếp tục dùng thêm. Ship nhanh, đóng gói kỹ.",
    date: "2024-11-15",
    verified: true,
    helpful: 6,
  },
  {
    id: "r20",
    productId: "1",
    userName: "Trịnh Thị Mai",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Cam thực sự hiệu quả! Từ 70kg giảm xuống 61kg trong 3 tháng. Cảm ơn shop đã có sản phẩm tốt.",
    date: "2024-11-12",
    verified: true,
    helpful: 25,
  },
  {
    id: "r21",
    productId: "1",
    userName: "Lưu Văn Đạt",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Mua cho bạn gái, dùng 2 tháng giảm 6kg. Cô ấy rất hài lòng, da mặt cũng đẹp hơn.",
    date: "2024-11-10",
    verified: false,
    helpful: 7,
  },
  {
    id: "r22",
    productId: "1",
    userName: "Phùng Thị Lan",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Sản phẩm tuyệt vời! Giảm 8kg trong 2.5 tháng. Không còn thèm đồ ngọt như trước. Recommend mọi người.",
    date: "2024-11-08",
    verified: true,
    helpful: 21,
  },
  {
    id: "r23",
    productId: "1",
    userName: "Nguyễn Thị Thảo",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Hiệu quả ổn, 5 tuần giảm 4kg. Cảm giác no lâu hơn, ăn ít đi tự nhiên. Sẽ mua tiếp.",
    date: "2024-11-05",
    verified: true,
    helpful: 10,
  },
  {
    id: "r24",
    productId: "1",
    userName: "Đặng Thị Hằng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Lần đầu tin vào sản phẩm giảm cân online và thật sự không thất vọng. 3 tháng giảm 11kg rất ổn.",
    date: "2024-11-02",
    verified: true,
    helpful: 28,
  },

  // Reviews cho Baschi Đen (product id: "2")
  {
    id: "r6",
    productId: "2",
    userName: "Võ Thị Hương",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Đen mạnh hơn bản cam nhiều! 1 tháng mình giảm được 6kg, hiệu quả vượt mong đợi.",
    date: "2024-12-14",
    verified: true,
    helpful: 20,
  },
  {
    id: "r7",
    productId: "2",
    userName: "Đặng Minh Tuấn",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Sản phẩm tốt, giảm cân nhanh. Tuy nhiên giá hơi cao so với phiên bản cam.",
    date: "2024-12-12",
    verified: true,
    helpful: 9,
  },
  {
    id: "r8",
    productId: "2",
    userName: "Bùi Thị Nga",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Mình đã thử cả 2 loại, Baschi Đen thật sự hiệu quả hơn. 2 tháng giảm 9kg, rất hài lòng!",
    date: "2024-12-09",
    verified: true,
    helpful: 16,
  },
  {
    id: "r25",
    productId: "2",
    userName: "Trần Thị Bích",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Đen mạnh thật! 1 tháng giảm 7kg từ 68kg xuống 61kg. Cảm thấy năng lượng tăng lên rõ rệt.",
    date: "2024-12-08",
    verified: true,
    helpful: 23,
  },
  {
    id: "r26",
    productId: "2",
    userName: "Lê Văn Minh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Vợ dùng hiệu quả lắm, 6 tuần giảm 8kg. Giá hơi cao nhưng xứng đáng với chất lượng.",
    date: "2024-12-06",
    verified: true,
    helpful: 12,
  },
  {
    id: "r27",
    productId: "2",
    userName: "Phạm Thị Thu",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Upgrade từ Baschi Cam lên Đen, hiệu quả gấp đôi. 2 tháng giảm 10kg, vóc dáng thon gọn hẳn.",
    date: "2024-12-04",
    verified: true,
    helpful: 18,
  },
  {
    id: "r28",
    productId: "2",
    userName: "Hoàng Văn Dũng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Mua cho em gái, dùng 1 tháng giảm 5kg. Em ấy rất hài lòng với kết quả.",
    date: "2024-12-01",
    verified: true,
    helpful: 9,
  },
  {
    id: "r29",
    productId: "2",
    userName: "Ngô Thị Yến",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Sản phẩm tốt nhất từng dùng! 3 tháng giảm 13kg, từ 72kg xuống 59kg. Cảm ơn shop!",
    date: "2024-11-28",
    verified: true,
    helpful: 31,
  },
  {
    id: "r30",
    productId: "2",
    userName: "Đinh Thị Hạnh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Hiệu quả nhanh, 3 tuần giảm 4kg. Cảm giác thèm ăn giảm hẳn, ngủ ngon hơn.",
    date: "2024-11-25",
    verified: true,
    helpful: 11,
  },
  {
    id: "r31",
    productId: "2",
    userName: "Vương Thị Linh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Đáng tiền! 2 tháng giảm 9kg, quần áo cũ giờ rộng thùng thình. Sẽ giới thiệu cho bạn bè.",
    date: "2024-11-22",
    verified: true,
    helpful: 24,
  },

  // Reviews cho Cafe Sim Thái Lan (product id: "6")
  {
    id: "r9",
    productId: "6",
    userName: "Ngô Thị Linh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Cà phê ngon lắm! Vừa thưởng thức vừa giảm cân. 1 tháng giảm được 3kg, thích nhất là hương vị thơm ngon.",
    date: "2024-12-13",
    verified: true,
    helpful: 22,
  },
  {
    id: "r10",
    productId: "6",
    userName: "Đinh Văn Hải",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Cà phê thơm ngon, uống buổi sáng rất tỉnh táo. Giảm cân từ từ nhưng ổn định.",
    date: "2024-12-11",
    verified: true,
    helpful: 11,
  },
  {
    id: "r32",
    productId: "6",
    userName: "Lý Thị Ngọc",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Cà phê ngon lành! Vừa thưởng thức vừa giảm cân. 2 tháng giảm 4kg, không căng thẳng gì cả.",
    date: "2024-12-10",
    verified: true,
    helpful: 18,
  },
  {
    id: "r33",
    productId: "6",
    userName: "Trương Văn Bình",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Tôi là dân nghiện cà phê nên sản phẩm này perfect. Vừa uống cà phê ngon vừa giảm cân hiệu quả.",
    date: "2024-12-08",
    verified: true,
    helpful: 26,
  },
  {
    id: "r34",
    productId: "6",
    userName: "Phạm Thị Hồng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Hương vị cà phê thơm ngon, uống buổi sáng rất tỉnh táo. 6 tuần giảm 3kg ổn định.",
    date: "2024-12-05",
    verified: true,
    helpful: 13,
  },
  {
    id: "r35",
    productId: "6",
    userName: "Nguyễn Thị Oanh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Sản phẩm tuyệt vời cho người yêu cà phê như mình. 3 tháng giảm 6kg, không bao giờ chán.",
    date: "2024-12-02",
    verified: true,
    helpful: 21,
  },
  {
    id: "r36",
    productId: "6",
    userName: "Đặng Văn Quang",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Mua cho vợ, cô ấy rất thích. Cà phê ngon, 2 tháng giảm 5kg. Giá cả hợp lý.",
    date: "2024-11-30",
    verified: true,
    helpful: 10,
  },
  {
    id: "r37",
    productId: "6",
    userName: "Bùi Thị Trang",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Cà phê thơm ngon tự nhiên, không có vị thuốc. 2.5 tháng giảm 7kg rất ổn định.",
    date: "2024-11-28",
    verified: true,
    helpful: 19,
  },

  // Reviews cho Keto Slim (product id: "8")
  {
    id: "r11",
    productId: "8",
    userName: "Lý Thị Hồng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Keto Slim phù hợp với chế độ ăn low-carb của mình. 3 tuần giảm 5kg, cơ thể khỏe mạnh hơn.",
    date: "2024-12-07",
    verified: true,
    helpful: 14,
  },
  {
    id: "r12",
    productId: "8",
    userName: "Vũ Minh Phong",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Sản phẩm tốt cho người tập gym như mình. Giúp đốt mỡ hiệu quả trong quá trình tập luyện.",
    date: "2024-12-04",
    verified: true,
    helpful: 10,
  },
  {
    id: "r38",
    productId: "8",
    userName: "Nguyễn Thị Dung",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Keto Slim rất phù hợp với chế độ ăn keto. 2 tháng giảm 8kg, cơ thể săn chắc hơn.",
    date: "2024-12-03",
    verified: true,
    helpful: 22,
  },
  {
    id: "r39",
    productId: "8",
    userName: "Trần Văn Toàn",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Dùng kết hợp tập gym, hiệu quả rất tốt. 6 tuần giảm 6kg mỡ bụng, cơ bắp rõ nét hơn.",
    date: "2024-12-01",
    verified: true,
    helpful: 15,
  },
  {
    id: "r40",
    productId: "8",
    userName: "Lê Thị Hường",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Sản phẩm tuyệt vời! Từ 65kg xuống 56kg trong 3 tháng. Năng lượng tập luyện tăng lên rõ rệt.",
    date: "2024-11-28",
    verified: true,
    helpful: 28,
  },
  {
    id: "r41",
    productId: "8",
    userName: "Phạm Văn Hưng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Hiệu quả cho người tập thể hình. Giảm mỏ bụng nhanh, cơ bắp định hình tốt hơn.",
    date: "2024-11-25",
    verified: true,
    helpful: 12,
  },

  // Reviews cho Baschi Cam Lọ (product id: "3")
  {
    id: "r42",
    productId: "3",
    userName: "Hoàng Thị Liên",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Vị cam lọ rất thơm ngon, dễ uống. 1 tháng giảm 3kg, không có tác dụng phụ gì.",
    date: "2024-12-12",
    verified: true,
    helpful: 14,
  },
  {
    id: "r43",
    productId: "3",
    userName: "Nguyễn Văn Long",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Mua cho vợ dùng, cô ấy rất thích vị cam lọ. 2 tháng giảm 6kg, da mặt cũng sáng hơn.",
    date: "2024-12-09",
    verified: true,
    helpful: 18,
  },
  {
    id: "r44",
    productId: "3",
    userName: "Đỗ Thị Lan",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Hương vị dễ chịu, không bị khó nuốt như các loại khác. 6 tuần giảm 4kg ổn định.",
    date: "2024-12-06",
    verified: true,
    helpful: 11,
  },
  {
    id: "r45",
    productId: "3",
    userName: "Vũ Thị Mai",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Thích nhất là vị cam lọ tự nhiên. 3 tháng giảm 9kg, vóc dáng thon gọn hẳn.",
    date: "2024-12-03",
    verified: true,
    helpful: 20,
  },

  // Reviews cho VIP Body X7 (product id: "12")
  {
    id: "r46",
    productId: "12",
    userName: "Trần Thị Nga",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "VIP Body X7 thực sự xứng đáng với cái tên VIP! 1 tháng giảm 7kg, hiệu quả nhanh chóng.",
    date: "2024-12-11",
    verified: true,
    helpful: 25,
  },
  {
    id: "r47",
    productId: "12",
    userName: "Lê Văn Đức",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Sản phẩm cao cấp, hiệu quả nhanh. Giá hơi cao nhưng đáng đồng tiền bát gạo.",
    date: "2024-12-08",
    verified: true,
    helpful: 16,
  },
  {
    id: "r48",
    productId: "12",
    userName: "Phạm Thị Hà",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Hiệu quả siêu tốc thật! 2 tháng giảm 12kg từ 70kg xuống 58kg. Cảm ơn shop!",
    date: "2024-12-05",
    verified: true,
    helpful: 32,
  },

  // Reviews cho Viên uống giảm cân Thailand Yanhee (product id: "13")
  {
    id: "r49",
    productId: "13",
    userName: "Nguyễn Thị Kim",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Viên uống giảm cân Thailand Yanhee hiệu quả 99% thật sự không phải quảng cáo! 3 tháng giảm 14kg, không thể tin nổi.",
    date: "2024-12-10",
    verified: true,
    helpful: 29,
  },
  {
    id: "r50",
    productId: "13",
    userName: "Trịnh Văn Nam",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Mua cho vợ dùng, hiệu quả rất tốt. Giá cao nhưng chất lượng xứng đáng.",
    date: "2024-12-07",
    verified: true,
    helpful: 17,
  },
  {
    id: "r51",
    productId: "13",
    userName: "Bùi Thị Hương",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Viên uống giảm cân Thailand Yanhee chất lượng thật sự! 2 tháng giảm 10kg, cơ thể khỏe mạnh hơn hẳn.",
    date: "2024-12-04",
    verified: true,
    helpful: 24,
  },

  // Reviews cho Baschi Hồng (product id: "4")
  {
    id: "r52",
    productId: "4",
    userName: "Lê Thị Vân",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Baschi Hồng hiệu quả tốt, 2 tháng giảm 7kg. Da mặt cũng đẹp hơn nhờ chống lão hóa.",
    date: "2024-12-09",
    verified: true,
    helpful: 15,
  },
  {
    id: "r53",
    productId: "4",
    userName: "Đặng Văn Hải",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Sản phẩm cao cấp, vừa giảm cân vừa chống lão hóa. Vợ tôi dùng rất hài lòng.",
    date: "2024-12-06",
    verified: true,
    helpful: 19,
  },

  // Reviews cho Vi Nhật Thay Mỡ Siết Eo (product id: "11")
  {
    id: "r54",
    productId: "11",
    userName: "Phạm Thị Linh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Công nghệ Nhật Bản thật sự khác biệt! Mỡ bụng giảm rõ rệt, vòng eo thon gọn hơn 8cm.",
    date: "2024-12-08",
    verified: true,
    helpful: 27,
  },
  {
    id: "r55",
    productId: "11",
    userName: "Nguyễn Văn Tú",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Mua cho vợ, hiệu quả tập trung vào vùng bụng rất tốt. Giá cao nhưng đáng tiền.",
    date: "2024-12-05",
    verified: true,
    helpful: 14,
  },

  // Reviews cho HJ Detox (product id: "7")
  {
    id: "r56",
    productId: "7",
    userName: "Võ Thị Thu",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Detox hiệu quả, cảm thấy cơ thể nhẹ nhàng hơn. 6 tuần giảm 4kg, da mặt sáng hơn.",
    date: "2024-12-07",
    verified: true,
    helpful: 12,
  },
  {
    id: "r57",
    productId: "7",
    userName: "Lý Văn Đông",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Sản phẩm detox tốt, vừa thanh lọc cơ thể vừa giảm cân. Tiêu hóa cũng tốt hơn.",
    date: "2024-12-04",
    verified: true,
    helpful: 10,
  },

  // Reviews cho Viên uống tăng cân Indo (product id: "14")
  {
    id: "r58",
    productId: "14",
    userName: "Hoàng Thị Ngân",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Sản phẩm tăng cân Indo rất hiệu quả! Sau 1 tháng tôi đã tăng được 3kg và cảm thấy khỏe mạnh hơn nhiều.",
    date: "2024-12-06",
    verified: true,
    helpful: 21,
  },
  {
    id: "r59",
    productId: "14",
    userName: "Trần Văn Phúc",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Tôi đã cố gắng tăng cân nhiều năm mà không thành công. Nhờ viên uống tăng cân Indo này, tôi đã cải thiện vóc dáng rõ rệt.",
    date: "2024-12-03",
    verified: true,
    helpful: 16,
  },

  // Reviews cho Baschi Tím (product id: "5")
  {
    id: "r60",
    productId: "5",
    userName: "Đỗ Thị Hạnh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Baschi Tím từ thảo dược rất an toàn. 2 tháng giảm 5kg, không có tác dụng phụ gì.",
    date: "2024-12-05",
    verified: true,
    helpful: 13,
  },
  {
    id: "r61",
    productId: "5",
    userName: "Lưu Thị Hòa",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Thảo dược tự nhiên, cơ thể dễ hấp thụ. 3 tháng giảm 8kg rất ổn định.",
    date: "2024-12-02",
    verified: true,
    helpful: 18,
  },

  // Reviews cho Lishou Xanh (product id: "9")
  {
    id: "r62",
    productId: "9",
    userName: "Vương Thị Lan",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Lishou Xanh từ thảo dược, cảm thấy an tâm khi sử dụng. 6 tuần giảm 4kg.",
    date: "2024-12-04",
    verified: true,
    helpful: 12,
  },
  {
    id: "r63",
    productId: "9",
    userName: "Trần Văn Hùng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Sản phẩm tự nhiên, giảm cân từ từ nhưng bền vững. Sức khỏe tốt hơn.",
    date: "2024-12-01",
    verified: true,
    helpful: 10,
  },

  // Reviews cho Lishou Đen (product id: "10")
  {
    id: "r64",
    productId: "10",
    userName: "Phạm Thị Ngọc",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Lishou Đen nâng cấp hiệu quả hơn bản xanh. 2 tháng giảm 6kg, kiểm soát đường huyết tốt.",
    date: "2024-12-03",
    verified: true,
    helpful: 14,
  },
  {
    id: "r65",
    productId: "10",
    userName: "Nguyễn Văn Thành",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Công thức nâng cấp thật sự tốt hơn. Vợ tôi dùng 3 tháng giảm 9kg rất ổn định.",
    date: "2024-11-30",
    verified: true,
    helpful: 17,
  },

  // Thêm reviews để tăng uy tín
  // Reviews cho Baschi Cam (product id: "1") - thêm
  {
    id: "r66",
    productId: "1",
    userName: "Phạm Thị Lan",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Sau 4 tháng sử dụng Baschi Cam, tôi đã giảm 15kg! Từ 75kg xuống 60kg. Bây giờ tự tin mặc váy đẹp rồi.",
    date: "2024-12-20",
    verified: true,
    helpful: 32,
  },
  {
    id: "r67",
    productId: "1",
    userName: "Vũ Minh Hằng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Sản phẩm tuyệt vời! Giảm 6kg trong 6 tuần đầu. Shop tư vấn rất chu đáo và nhiệt tình.",
    date: "2024-12-18",
    verified: true,
    helpful: 28,
  },
  {
    id: "r68",
    productId: "1",
    userName: "Đỗ Thế Anh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Vợ tôi dùng 2 tháng giảm 7kg. Thấy người khỏe mạnh hơn, da dẻ cũng hồng hào hơn.",
    date: "2024-12-16",
    verified: true,
    helpful: 15,
  },
  {
    id: "r69",
    productId: "1",
    userName: "Bùi Thu Hiền",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Đã dùng nhiều sản phẩm khác không hiệu quả. Chỉ có Baschi Cam mới giúp tôi giảm được 10kg sau 3 tháng.",
    date: "2024-12-14",
    verified: true,
    helpful: 21,
  },
  {
    id: "r70",
    productId: "1",
    userName: "Hoàng Thị Nga",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Mình order lần 3 rồi, hiệu quả thật sự. Từ 68kg giảm xuống 55kg trong 5 tháng. Cảm ơn shop!",
    date: "2024-12-12",
    verified: true,
    helpful: 35,
  },
  {
    id: "r71",
    productId: "1",
    userName: "Lý Văn Đức",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Nam giới dùng cũng hiệu quả. Tôi giảm 8kg trong 2 tháng, bụng bia giảm hẳn.",
    date: "2024-12-11",
    verified: true,
    helpful: 19,
  },
  {
    id: "r72",
    productId: "1",
    userName: "Ngô Thị Hạnh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Sau sinh con 2, tôi tăng cân nhiều. Dùng Baschi Cam 4 tháng giảm 12kg, lấy lại vóc dáng ban đầu.",
    date: "2024-12-09",
    verified: true,
    helpful: 26,
  },
  {
    id: "r73",
    productId: "1",
    userName: "Phan Thị Xuân",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Chất lượng tuyệt vời, đóng gói cẩn thận. Dùng 6 tuần giảm 5kg, tinh thần sảng khoái hơn.",
    date: "2024-12-07",
    verified: true,
    helpful: 17,
  },

  // Reviews cho Baschi Đen (product id: "2") - thêm
  {
    id: "r74",
    productId: "2",
    userName: "Trịnh Văn Long",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Đen mạnh hơn bản cam. Tôi giảm 9kg trong 2 tháng, hiệu quả vượt mong đợi.",
    date: "2024-12-19",
    verified: true,
    helpful: 23,
  },
  {
    id: "r75",
    productId: "2",
    userName: "Đinh Thị Mai",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Dùng bản đen sau khi dùng hết bản cam. Hiệu quả nhanh hơn nhiều, 3 tháng giảm 11kg.",
    date: "2024-12-17",
    verified: true,
    helpful: 29,
  },
  {
    id: "r76",
    productId: "2",
    userName: "Lê Minh Tuấn",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Sản phẩm tốt, giảm cân nhanh. Chỉ có điều hơi nóng trong người lúc đầu.",
    date: "2024-12-15",
    verified: true,
    helpful: 14,
  },
  {
    id: "r77",
    productId: "2",
    userName: "Vương Thị Hoa",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Đã giới thiệu cho nhiều bạn bè. Ai dùng cũng giảm cân hiệu quả. Mình giảm 8kg trong 10 tuần.",
    date: "2024-12-13",
    verified: true,
    helpful: 31,
  },
  {
    id: "r78",
    productId: "2",
    userName: "Cao Thị Lan",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Chồng tôi béo phì, dùng Baschi Đen 4 tháng giảm 18kg. Bác sĩ cũng khen ngợi.",
    date: "2024-12-10",
    verified: true,
    helpful: 38,
  },

  // Reviews cho Cafe Sim (product id: "3") - thêm
  {
    id: "r79",
    productId: "3",
    userName: "Nguyễn Thị Bích",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Cafe Sim vừa ngon vừa giảm cân. Thay thế cafe buổi sáng, 2 tháng giảm 5kg tự nhiên.",
    date: "2024-12-18",
    verified: true,
    helpful: 22,
  },
  {
    id: "r80",
    productId: "3",
    userName: "Đặng Văn Hải",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Vị đắng nhẹ, uống dễ chịu. Giảm 4kg trong 6 tuần, cảm giác no lâu hơn.",
    date: "2024-12-16",
    verified: true,
    helpful: 16,
  },
  {
    id: "r81",
    productId: "3",
    userName: "Phùng Thị Linh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Cafe giảm cân hiệu quả nhất từng dùng. 3 tháng giảm 7kg, không bị mất ngủ như cafe thường.",
    date: "2024-12-14",
    verified: true,
    helpful: 25,
  },
  {
    id: "r82",
    productId: "3",
    userName: "Huỳnh Văn Nam",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Thích hợp cho người bận rộn như tôi. Uống sáng là đủ, giảm 6kg trong 2.5 tháng.",
    date: "2024-12-12",
    verified: true,
    helpful: 18,
  },

  // Reviews cho Keto Slim (product id: "4") - thêm
  {
    id: "r83",
    productId: "4",
    userName: "Lưu Thị Hương",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Keto Slim phù hợp với chế độ ăn low-carb. 2 tháng giảm 8kg, cơ thể săn chắc hơn.",
    date: "2024-12-19",
    verified: true,
    helpful: 27,
  },
  {
    id: "r84",
    productId: "4",
    userName: "Mạc Văn Đông",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Hiệu quả tốt với người tập gym. Giảm mỡ bụng nhanh, 6 tuần giảm 5kg.",
    date: "2024-12-17",
    verified: true,
    helpful: 21,
  },
  {
    id: "r85",
    productId: "4",
    userName: "Tạ Thị Nga",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Dùng kết hợp ăn kiêng keto, hiệu quả gấp đôi. 3 tháng giảm 12kg rất ổn định.",
    date: "2024-12-15",
    verified: true,
    helpful: 33,
  },

  // Reviews cho Green Coffee Bean (product id: "5") - thêm
  {
    id: "r86",
    productId: "5",
    userName: "Đoàn Thị Thu",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Green Coffee Bean thiên nhiên an toàn. Dùng 4 tháng giảm 10kg, không tác dụng phụ.",
    date: "2024-12-18",
    verified: true,
    helpful: 24,
  },
  {
    id: "r87",
    productId: "5",
    userName: "Phan Văn Khoa",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Sản phẩm tự nhiên, hấp thụ từ từ. 2 tháng giảm 4kg một cách an toàn.",
    date: "2024-12-16",
    verified: true,
    helpful: 19,
  },
  {
    id: "r88",
    productId: "5",
    userName: "Lại Thị Hạnh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Thích sản phẩm từ thiên nhiên. Dùng 5 tháng giảm 9kg, da dẻ cũng đẹp hơn.",
    date: "2024-12-14",
    verified: true,
    helpful: 26,
  },

  // Reviews cho Garcinia Cambogia (product id: "6") - thêm
  {
    id: "r89",
    productId: "6",
    userName: "Quách Thị Vân",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Garcinia Cambogia kiểm soát cảm giác thèm ăn rất tốt. 3 tháng giảm 8kg tự nhiên.",
    date: "2024-12-17",
    verified: true,
    helpful: 23,
  },
  {
    id: "r90",
    productId: "6",
    userName: "Trương Văn Phúc",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Hiệu quả ổn định, không bị yo-yo. 4 tháng giảm 7kg và duy trì được.",
    date: "2024-12-15",
    verified: true,
    helpful: 18,
  },

  // Reviews cho L-Carnitine Plus (product id: "7") - thêm
  {
    id: "r91",
    productId: "7",
    userName: "Võ Thị Kim",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "L-Carnitine Plus tăng cường năng lượng khi tập luyện. Giảm 6kg trong 10 tuần, cơ bắp săn chắc.",
    date: "2024-12-19",
    verified: true,
    helpful: 25,
  },
  {
    id: "r92",
    productId: "7",
    userName: "Dương Văn Tâm",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Phù hợp cho người tập thể thao. 2 tháng giảm 5kg, thể lực tăng rõ rệt.",
    date: "2024-12-17",
    verified: true,
    helpful: 22,
  },

  // Reviews cho Forskolin Extract (product id: "8") - thêm
  {
    id: "r93",
    productId: "8",
    userName: "Hồ Thị Loan",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Forskolin Extract từ thảo dược tự nhiên. 3 tháng giảm 6kg, an toàn cho sức khỏe.",
    date: "2024-12-18",
    verified: true,
    helpful: 20,
  },
  {
    id: "r94",
    productId: "8",
    userName: "Lâm Văn Hùng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Sản phẩm chất lượng, hiệu quả từ từ nhưng bền vững. 4 tháng giảm 8kg.",
    date: "2024-12-16",
    verified: true,
    helpful: 17,
  },

  // Reviews cho CLA Safflower Oil (product id: "9") - thêm
  {
    id: "r95",
    productId: "9",
    userName: "Chu Thị Hồng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "CLA Safflower Oil giúp đốt mỡ hiệu quả. 2.5 tháng giảm 7kg, vòng eo giảm 8cm.",
    date: "2024-12-20",
    verified: true,
    helpful: 28,
  },
  {
    id: "r96",
    productId: "9",
    userName: "Đỗ Văn Minh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Dầu hoa cúc giảm cân tự nhiên. 3 tháng giảm 5kg, không có tác dụng phụ.",
    date: "2024-12-18",
    verified: true,
    helpful: 15,
  },

  // Reviews cho Lishou Đen Nâng Cấp (product id: "10") - thêm
  {
    id: "r97",
    productId: "10",
    userName: "Kiều Thị Lan",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Lishou Đen nâng cấp mạnh hơn bản cũ rất nhiều. 2 tháng giảm 9kg, hiệu quả vượt trội.",
    date: "2024-12-19",
    verified: true,
    helpful: 31,
  },
  {
    id: "r98",
    productId: "10",
    userName: "Ngô Văn Dũng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Công thức mới cải tiến tuyệt vời. Vợ tôi dùng 3 tháng giảm 11kg rất ổn định.",
    date: "2024-12-17",
    verified: true,
    helpful: 26,
  },
  {
    id: "r99",
    productId: "10",
    userName: "Hà Thị Dung",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Phiên bản nâng cấp thật sự khác biệt. 6 tuần giảm 5kg, cảm giác khỏe khoắn hơn.",
    date: "2024-12-15",
    verified: true,
    helpful: 19,
  },

  // Reviews tổng hợp cho các sản phẩm khác
  {
    id: "r100",
    productId: "1",
    userName: "Lý Thị Thanh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Cam là lựa chọn số 1! 6 tháng giảm 20kg, từ 80kg xuống 60kg. Cuộc đời thay đổi hoàn toàn.",
    date: "2024-12-21",
    verified: true,
    helpful: 42,
  },
  {
    id: "r101",
    productId: "2",
    userName: "Mạc Thị Huyền",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Đen hiệu quả nhanh chóng. 10 tuần giảm 8kg, quần áo cũ rộng ra hết.",
    date: "2024-12-20",
    verified: true,
    helpful: 24,
  },
  {
    id: "r102",
    productId: "3",
    userName: "Tôn Văn Phong",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Cafe Sim thay thế hoàn hảo cho cafe thường. Vừa ngon vừa giảm cân, 3 tháng giảm 6kg.",
    date: "2024-12-19",
    verified: true,
    helpful: 20,
  },
  {
    id: "r103",
    productId: "4",
    userName: "Đậu Thị Nga",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Keto Slim kết hợp chế độ ăn keto hiệu quả tuyệt vời. 4 tháng giảm 14kg.",
    date: "2024-12-18",
    verified: true,
    helpful: 29,
  },
  {
    id: "r104",
    productId: "5",
    userName: "Châu Văn Đức",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Green Coffee Bean an toàn cho người cao tuổi. Bố tôi 65 tuổi dùng 3 tháng giảm 5kg.",
    date: "2024-12-17",
    verified: true,
    helpful: 21,
  },
  {
    id: "r105",
    productId: "6",
    userName: "Phạm Thị Yến",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Garcinia Cambogia kiểm soát thèm ăn tuyệt vời. 5 tháng giảm 12kg một cách tự nhiên.",
    date: "2024-12-16",
    verified: true,
    helpful: 27,
  },
  {
    id: "r106",
    productId: "7",
    userName: "Cao Văn Lâm",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "L-Carnitine Plus tuyệt vời cho người tập gym. Giảm mỡ tăng cơ, 3 tháng giảm 7kg.",
    date: "2024-12-15",
    verified: true,
    helpful: 23,
  },
  {
    id: "r107",
    productId: "8",
    userName: "Hứa Thị Mai",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Forskolin Extract từ thảo dược an toàn. 4 tháng giảm 7kg, không lo tác dụng phụ.",
    date: "2024-12-14",
    verified: true,
    helpful: 18,
  },
  {
    id: "r108",
    productId: "9",
    userName: "Trần Văn Bình",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "CLA Safflower Oil đốt mỡ bụng hiệu quả. 2 tháng giảm 6kg, bụng phẳng hơn rõ rệt.",
    date: "2024-12-13",
    verified: true,
    helpful: 25,
  },
  {
    id: "r109",
    productId: "10",
    userName: "Lương Thị Hoa",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Lishou Đen nâng cấp là đỉnh cao của công nghệ giảm cân. 3 tháng giảm 13kg không tưởng!",
    date: "2024-12-12",
    verified: true,
    helpful: 35,
  },
  {
    id: "r110",
    productId: "1",
    userName: "Đặng Thị Tuyết",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Mẹ tôi 50 tuổi dùng Baschi Cam 4 tháng giảm 10kg. Sức khỏe tốt hơn, tinh thần phấn chấn.",
    date: "2024-12-11",
    verified: true,
    helpful: 22,
  },
  {
    id: "r111",
    productId: "2",
    userName: "Võ Văn Sơn",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Đen mạnh mẽ thật sự. Nam giới béo phì như tôi dùng 3 tháng giảm 15kg.",
    date: "2024-12-10",
    verified: true,
    helpful: 28,
  },
  {
    id: "r112",
    productId: "3",
    userName: "Bạch Thị Liên",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Cafe Sim tiện lợi cho người bận rộn. Uống hàng ngày 2 tháng giảm 4kg tự nhiên.",
    date: "2024-12-09",
    verified: true,
    helpful: 16,
  },
  {
    id: "r113",
    productId: "4",
    userName: "Nguyễn Văn Hải",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Keto Slim phù hợp với lối sống low-carb. 5 tháng giảm 16kg, cơ thể săn chắc.",
    date: "2024-12-08",
    verified: true,
    helpful: 30,
  },
  {
    id: "r114",
    productId: "5",
    userName: "Lê Thị Phương",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Green Coffee Bean tự nhiên 100%. 6 tháng giảm 11kg, không gây mất ngủ hay hồi hộp.",
    date: "2024-12-07",
    verified: true,
    helpful: 24,
  },
  {
    id: "r115",
    productId: "6",
    userName: "Hoàng Văn Tú",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Garcinia Cambogia giảm thèm ăn ngọt. 3 tháng giảm 6kg, kiểm soát cân nặng tốt.",
    date: "2024-12-06",
    verified: true,
    helpful: 19,
  },
  {
    id: "r116",
    productId: "7",
    userName: "Phùng Thị Hương",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "L-Carnitine Plus năng lượng cho tập luyện. 4 tháng giảm 8kg, cơ bắp rõ nét hơn.",
    date: "2024-12-05",
    verified: true,
    helpful: 26,
  },
  {
    id: "r117",
    productId: "8",
    userName: "Thái Văn Quang",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Forskolin Extract thảo dược quý. 5 tháng giảm 10kg, da dẻ hồng hào sức khỏe tốt.",
    date: "2024-12-04",
    verified: true,
    helpful: 21,
  },
  {
    id: "r118",
    productId: "9",
    userName: "Dương Thị Thu",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "CLA Safflower Oil từ hoa cúc tự nhiên. 3 tháng giảm 8kg, vòng eo thon gọn đáng kể.",
    date: "2024-12-03",
    verified: true,
    helpful: 23,
  },
  {
    id: "r119",
    productId: "10",
    userName: "Lê Văn Cường",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Lishou Đen nâng cấp công nghệ mới. Vợ tôi 3 tháng giảm 12kg, hiệu quả thần kỳ!",
    date: "2024-12-02",
    verified: true,
    helpful: 32,
  },
  {
    id: "r120",
    productId: "1",
    userName: "Trương Thị Ngọc",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Cam tin cậy nhất thị trường. 7 tháng giảm 22kg, từ 85kg xuống 63kg. Thành công!",
    date: "2024-12-01",
    verified: true,
    helpful: 45,
  },
  {
    id: "r121",
    productId: "2",
    userName: "Phạm Văn Hòa",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Baschi Đen mạnh mẽ hiệu quả. 2.5 tháng giảm 8kg, cảm giác nhẹ nhàng hơn nhiều.",
    date: "2024-11-30",
    verified: true,
    helpful: 17,
  },
  {
    id: "r122",
    productId: "3",
    userName: "Lâm Thị Xuân",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Cafe Sim ngon không thua cafe thường. 4 tháng giảm 7kg, buổi sáng năng động hơn.",
    date: "2024-11-29",
    verified: true,
    helpful: 20,
  },
  {
    id: "r123",
    productId: "4",
    userName: "Đỗ Văn Kiên",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Keto Slim hỗ trợ chế độ ketosis tuyệt vời. 3 tháng giảm 11kg, cơ thể khỏe mạnh.",
    date: "2024-11-28",
    verified: true,
    helpful: 25,
  },
  {
    id: "r124",
    productId: "5",
    userName: "Vũ Thị Lan",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Green Coffee Bean an toàn cho người nhạy cảm. 5 tháng giảm 9kg không gây kích ứng.",
    date: "2024-11-27",
    verified: true,
    helpful: 22,
  },
  {
    id: "r125",
    productId: "6",
    userName: "Chu Văn Đạt",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Garcinia Cambogia kiểm soát thèm ăn hiệu quả. 4 tháng giảm 7kg một cách tự nhiên.",
    date: "2024-11-26",
    verified: true,
    helpful: 18,
  },
  {
    id: "r126",
    productId: "7",
    userName: "Ngô Thị Hương",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "L-Carnitine Plus năng lượng tập luyện tuyệt vời. 2 tháng giảm 5kg, thể lực tăng rõ.",
    date: "2024-11-25",
    verified: true,
    helpful: 21,
  },
  {
    id: "r127",
    productId: "8",
    userName: "Tạ Văn Long",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Forskolin Extract thảo dược quý hiếm. 6 tháng giảm 12kg, sức khỏe cải thiện toàn diện.",
    date: "2024-11-24",
    verified: true,
    helpful: 27,
  },
  {
    id: "r128",
    productId: "9",
    userName: "Huỳnh Thị Mai",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "CLA Safflower Oil đốt mỡ từ từ nhưng bền vững. 4 tháng giảm 6kg ổn định.",
    date: "2024-11-23",
    verified: true,
    helpful: 16,
  },
  {
    id: "r129",
    productId: "10",
    userName: "Lưu Văn Thành",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Lishou Đen nâng cấp đỉnh cao công nghệ. 4 tháng giảm 15kg, kết quả ngoài mong đợi!",
    date: "2024-11-22",
    verified: true,
    helpful: 38,
  },
  {
    id: "r130",
    productId: "1",
    userName: "Đinh Thị Hạnh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Cam đáng tin cậy nhất. Con gái tôi dùng 5 tháng giảm 18kg, tự tin hơn rất nhiều.",
    date: "2024-11-21",
    verified: true,
    helpful: 33,
  },
  {
    id: "r131",
    productId: "2",
    userName: "Hoàng Văn Dũng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Đen hiệu quả nhanh chóng. 10 tuần giảm 9kg, quần áo phải mua lại hết.",
    date: "2024-11-20",
    verified: true,
    helpful: 24,
  },
  {
    id: "r132",
    productId: "3",
    userName: "Phan Thị Diệu",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Cafe Sim thay thế hoàn hảo. Vị ngon tự nhiên, 3 tháng giảm 6kg không cần kiêng khem.",
    date: "2024-11-19",
    verified: true,
    helpful: 19,
  },
  {
    id: "r133",
    productId: "4",
    userName: "Lý Văn Minh",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Keto Slim hỗ trợ ketosis hiệu quả. 3.5 tháng giảm 9kg, cơ thể săn chắc hơn.",
    date: "2024-11-18",
    verified: true,
    helpful: 20,
  },
  {
    id: "r134",
    productId: "5",
    userName: "Đặng Thị Loan",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Green Coffee Bean tự nhiên 100%. 4 tháng giảm 8kg, không lo tác dụng phụ lâu dài.",
    date: "2024-11-17",
    verified: true,
    helpful: 23,
  },
  {
    id: "r135",
    productId: "6",
    userName: "Trịnh Văn Hùng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Garcinia Cambogia kiểm soát cơn thèm tuyệt vời. 5 tháng giảm 11kg, ăn ít tự nhiên.",
    date: "2024-11-16",
    verified: true,
    helpful: 26,
  },
  {
    id: "r136",
    productId: "7",
    userName: "Cao Thị Bích",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "L-Carnitine Plus tăng năng lượng tập luyện. 3 tháng giảm 7kg, cơ bắp rõ nét.",
    date: "2024-11-15",
    verified: true,
    helpful: 22,
  },
  {
    id: "r137",
    productId: "8",
    userName: "Mạc Văn Khôi",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Forskolin Extract thảo dược an toàn. 4 tháng giảm 6kg, không gây mệt mỏi hay stress.",
    date: "2024-11-14",
    verified: true,
    helpful: 17,
  },
  {
    id: "r138",
    productId: "9",
    userName: "Võ Thị Ngọc",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "CLA Safflower Oil đốt mỡ bụng hiệu quả. 2.5 tháng giảm 7kg, eo thon hơn 10cm.",
    date: "2024-11-13",
    verified: true,
    helpful: 29,
  },
  {
    id: "r139",
    productId: "10",
    userName: "Kiều Văn Tài",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Lishou Đen nâng cấp công nghệ tiên tiến. 3 tháng giảm 14kg, vợ tôi thay đổi hoàn toàn!",
    date: "2024-11-12",
    verified: true,
    helpful: 36,
  },
  {
    id: "r140",
    productId: "1",
    userName: "Lê Thị Thảo",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Cam số 1 thị trường. 6 tháng giảm 19kg, từ 78kg xuống 59kg. Cuộc sống mới!",
    date: "2024-11-11",
    verified: true,
    helpful: 41,
  },
  {
    id: "r141",
    productId: "2",
    userName: "Đoàn Văn Phước",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Đen mạnh mẽ đúng như quảng cáo. 2 tháng giảm 7kg, tinh thần sảng khoái.",
    date: "2024-11-10",
    verified: true,
    helpful: 18,
  },
  {
    id: "r142",
    productId: "3",
    userName: "Châu Thị Hằng",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Cafe Sim tiện lợi cho cuộc sống bận rộn. 3 tháng giảm 5kg, buổi sáng tràn năng lượng.",
    date: "2024-11-09",
    verified: true,
    helpful: 15,
  },
  {
    id: "r143",
    productId: "4",
    userName: "Phạm Văn Đạt",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Keto Slim hỗ trợ ketosis hoàn hảo. 4 tháng giảm 13kg, cơ thể khỏe mạnh săn chắc.",
    date: "2024-11-08",
    verified: true,
    helpful: 28,
  },
  {
    id: "r144",
    productId: "5",
    userName: "Bùi Thị Kim",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Green Coffee Bean an toàn cho mọi lứa tuổi. Mẹ tôi 55 tuổi dùng 4 tháng giảm 7kg.",
    date: "2024-11-07",
    verified: true,
    helpful: 21,
  },
  {
    id: "r145",
    productId: "6",
    userName: "Thái Văn Dương",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 4,
    comment:
      "Garcinia Cambogia kiểm soát thèm ăn tự nhiên. 3 tháng giảm 6kg không cần ép buộc.",
    date: "2024-11-06",
    verified: true,
    helpful: 16,
  },
  {
    id: "r146",
    productId: "7",
    userName: "Hồ Thị Yến",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "L-Carnitine Plus tuyệt vời cho gym. 2.5 tháng giảm 6kg, cơ bắp săn chắc hơn rõ rệt.",
    date: "2024-11-05",
    verified: true,
    helpful: 24,
  },
  {
    id: "r147",
    productId: "8",
    userName: "Lưu Văn Tâm",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Forskolin Extract thảo dược quý báu. 5 tháng giảm 9kg, sức khỏe tổng thể cải thiện.",
    date: "2024-11-04",
    verified: true,
    helpful: 20,
  },
  {
    id: "r148",
    productId: "9",
    userName: "Nguyễn Thị Phúc",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "CLA Safflower Oil từ hoa cúc tự nhiên. 3 tháng giảm 8kg, da dẻ cũng mịn màng hơn.",
    date: "2024-11-03",
    verified: true,
    helpful: 25,
  },
  {
    id: "r149",
    productId: "10",
    userName: "Dương Văn Hải",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Lishou Đen nâng cấp đỉnh cao của giảm cân. 4 tháng giảm 16kg, hiệu quả thần tốc!",
    date: "2024-11-02",
    verified: true,
    helpful: 39,
  },
  {
    id: "r150",
    productId: "1",
    userName: "Trần Thị Nga",
    userAvatar: "/images/users/anomynous.jpg",
    rating: 5,
    comment:
      "Baschi Cam đáng tin cậy nhất. 8 tháng giảm 25kg, từ 90kg xuống 65kg. Thành công vượt mong đợi!",
    date: "2024-11-01",
    verified: true,
    helpful: 48,
  },
];

export const getReviewsByProductId = (productId: string): Review[] => {
  return reviews.filter((review) => review.productId === productId);
};

export const getAverageRating = (productId: string): number => {
  const productReviews = getReviewsByProductId(productId);
  if (productReviews.length === 0) return 0;

  const totalRating = productReviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  return totalRating / productReviews.length;
};

export const getReviewStats = (productId: string) => {
  const productReviews = getReviewsByProductId(productId);
  const stats = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  productReviews.forEach((review) => {
    stats[review.rating as keyof typeof stats]++;
  });

  return stats;
};
