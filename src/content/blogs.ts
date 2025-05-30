export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "cach-giam-can-hieu-qua",
    title: "5 Cách Giảm Cân Hiệu Quả và An Toàn",
    excerpt:
      "Khám phá những phương pháp giảm cân khoa học và bền vững, giúp bạn đạt được mục tiêu cân nặng một cách lành mạnh và duy trì lâu dài.",
    content: `# 5 Cách Giảm Cân Hiệu Quả và An Toàn

Giảm cân là một hành trình đòi hỏi sự kiên trì và phương pháp khoa học. Không chỉ đơn thuần là việc ăn ít lại, giảm cân đúng cách cần có một kế hoạch tổng thể và khoa học. Dưới đây là 5 phương pháp được chứng minh hiệu quả để giúp bạn đạt được mục tiêu cân nặng của mình.

## 1. Xây dựng chế độ ăn uống cân bằng

Một chế độ ăn uống lành mạnh là nền tảng quan trọng nhất trong hành trình giảm cân. Thay vì ăn kiêng khắc nghiệt, hãy tập trung vào:

- Tính toán lượng calo phù hợp: Giảm 500-750 calo mỗi ngày để giảm 0.5-1kg/tuần một cách an toàn
- Phân bổ dưỡng chất:
  * 45-65% carbohydrate từ ngũ cốc nguyên hạt
  * 20-35% chất béo lành mạnh từ dầu oliu, bơ, các loại hạt
  * 10-35% protein từ thịt nạc, cá, đậu
- Tăng cường rau xanh và trái cây (chiếm 1/2 đĩa ăn)
- Kiểm soát khẩu phần ăn bằng cách dùng đĩa nhỏ hơn
- Ăn chậm nhai kỹ, lắng nghe cơ thể

## 2. Duy trì vận động đều đặn

Kết hợp các bài tập sau để đốt cháy mỡ thừa hiệu quả:

- Cardio cường độ vừa: đi bộ nhanh, chạy bộ, đạp xe (150 phút/tuần)
- Tập HIIT 2-3 lần/tuần: 
  * 30 giây tập với cường độ cao
  * 30 giây nghỉ
  * Lặp lại 8-10 hiệp
- Tập luyện sức mạnh 2-3 lần/tuần để tăng cơ, đẩy nhanh trao đổi chất
- Yoga để giảm stress và cải thiện sự dẻo dai

## 3. Uống đủ nước và kiểm soát đồ uống

Nước đóng vai trò quan trọng trong quá trình giảm cân:

- Uống 2-3 lít nước mỗi ngày
- Uống 1 cốc nước 30 phút trước bữa ăn
- Hạn chế đồ uống có đường và calo
- Thay thế bằng trà xanh, nước chanh
- Không uống nước ngọt, rượu bia

## 4. Ngủ đủ giấc và kiểm soát stress

Giấc ngủ chất lượng giúp:

- Cân bằng hormone đói no leptin và ghrelin
- Giảm thèm ăn vặt và đồ ngọt
- Duy trì năng lượng cho tập luyện
- Phục hồi cơ thể

Cần:
- Ngủ 7-9 tiếng mỗi đêm
- Duy trì giờ giấc ngủ đều đặn
- Tạo môi trường ngủ thoải mái
- Thực hành thiền, yoga để giảm stress

## 5. Sử dụng sản phẩm hỗ trợ phù hợp

Một số sản phẩm hỗ trợ giảm cân an toàn:

- Trà xanh giúp tăng cường trao đổi chất
- Protein whey hỗ trợ tăng cơ, giảm mỡ
- Các loại vitamin và khoáng chất thiết yếu
- Thực phẩm chức năng đã được kiểm chứng

Lưu ý: 
- Tham khảo ý kiến chuyên gia trước khi sử dụng
- Không lạm dụng thực phẩm chức năng
- Kết hợp với chế độ ăn uống và tập luyện

Hãy nhớ rằng giảm cân là một hành trình dài hạn. Đặt mục tiêu thực tế và kiên trì thực hiện sẽ mang lại kết quả bền vững.`,
    image: "/images/blogs/blog-01.jpg",
    date: "2025-05-20",
    author: "Dung Lê",
    tags: ["giảm cân", "sức khỏe", "lifestyle"],
  },
  {
    id: "2",
    slug: "thuc-don-giam-can-7-ngay",
    title: "Thực Đơn Giảm Cân 7 Ngày Khoa Học",
    excerpt:
      "Khám phá thực đơn giảm cân 7 ngày được thiết kế bởi chuyên gia dinh dưỡng, giúp bạn giảm cân hiệu quả mà vẫn đảm bảo đủ chất.",
    content: `# Thực Đơn Giảm Cân 7 Ngày Khoa Học

Một thực đơn giảm cân cân bằng và đa dạng sẽ giúp bạn duy trì động lực và đạt được mục tiêu. Dưới đây là thực đơn chi tiết cho 7 ngày, được thiết kế để cung cấp khoảng 1500 calo mỗi ngày.

## Thứ Hai

### Bữa sáng (400 calo):
- 1 bát cháo yến mạch (40g)
- 1 quả chuối
- 5 quả hạnh nhân
- 1 cốc sữa đậu nành không đường

### Bữa trưa (450 calo):
- 150g cơm gạo lứt
- 150g ức gà nướng
- 200g rau xanh luộc
- 1 quả trứng luộc

### Bữa tối (400 calo):
- Salad cá hồi (100g cá hồi, rau xà lách, cà chua)
- 100g khoai lang luộc

## Thứ Ba

[Chi tiết tương tự cho các ngày còn lại...]

## Lưu ý quan trọng:

1. Uống đủ nước (2-3 lít/ngày)
2. Ăn chậm nhai kỹ
3. Không bỏ bữa
4. Có thể điều chỉnh khẩu phần theo nhu cầu
5. Tham khảo ý kiến bác sĩ nếu có bệnh lý`,
    image: "/images/blogs/blog-02.jpg",
    date: "2025-05-15",
    author: "Dung Lê",
    tags: ["thực đơn giảm cân", "dinh dưỡng", "ăn uống lành mạnh"],
  },
  {
    id: "3",
    slug: "tap-luyen-giam-mo-bung",
    title: "Bài Tập Giảm Mỡ Bụng Hiệu Quả Tại Nhà",
    excerpt:
      "Tổng hợp các bài tập giảm mỡ bụng hiệu quả có thể thực hiện tại nhà, kèm theo hướng dẫn chi tiết và lịch tập khoa học.",
    content: `# Bài Tập Giảm Mỡ Bụng Hiệu Quả Tại Nhà

Mỡ bụng không chỉ ảnh hưởng đến thẩm mỹ mà còn tiềm ẩn nhiều nguy cơ sức khỏe. Dưới đây là các bài tập hiệu quả có thể thực hiện tại nhà.

## Các bài tập cơ bản

### 1. Plank cơ bản
- Tư thế: chống người trên khuỷu tay
- Thời gian: bắt đầu với 30 giây, tăng dần
- Tác dụng: tăng cường cơ core, giảm mỡ bụng
- Thực hiện: 3 hiệp/ngày

### 2. Gập bụng
- 3 hiệp x 15-20 lần
- Chú ý kỹ thuật để tránh đau lưng
- Kết hợp với các biến thể khác nhau

### 3. Russian Twist
- Tác động vào cơ bụng xéo
- 3 hiệp x 20 lần mỗi bên
- Có thể thêm tạ để tăng cường độ

## Lịch tập chi tiết 30 ngày

[Chi tiết lịch tập theo từng ngày...]

## Những lưu ý quan trọng

1. Khởi động kỹ trước khi tập
2. Tăng cường độ từ từ
3. Kết hợp với cardio
4. Điều chỉnh chế độ ăn
5. Nghỉ ngơi đủ để phục hồi`,
    image: "/images/blogs/blog-03.jpg",
    date: "2025-05-10",
    author: "Dung Lê",
    tags: ["tập luyện", "giảm mỡ", "fitness"],
  },
  {
    id: "4",
    slug: "sai-lam-khi-giam-can",
    title: "10 Sai Lầm Phổ Biến Khi Giảm Cân Cần Tránh",
    excerpt:
      "Tìm hiểu những sai lầm thường gặp trong quá trình giảm cân và cách khắc phục để đạt hiệu quả tốt nhất.",
    content: `# 10 Sai Lầm Phổ Biến Khi Giảm Cân Cần Tránh

Nhiều người mắc phải những sai lầm không đáng có khiến việc giảm cân trở nên khó khăn hoặc kém hiệu quả. Hãy cùng tìm hiểu để tránh những sai lầm này.

## 1. Ăn kiêng quá khắt khe
- Cắt giảm calo đột ngột
- Bỏ bữa thường xuyên
- Tác hại: rối loạn chuyển hóa, tăng cân ngược

## 2. Tập trung quá nhiều vào cân nặng
- Bỏ qua các chỉ số khác
- Không quan tâm đến thành phần cơ thể
- Giải pháp: theo dõi nhiều chỉ số khác nhau

[Chi tiết các sai lầm còn lại...]

## Cách khắc phục

1. Xây dựng thói quen bền vững
2. Đặt mục tiêu thực tế
3. Tìm hiểu kiến thức dinh dưỡng
4. Tham khảo ý kiến chuyên gia`,
    image: "/images/blogs/blog-04.jpg",
    date: "2025-05-05",
    author: "Dung Lê",
    tags: ["giảm cân", "lời khuyên", "sức khỏe"],
  },
  {
    id: "5",
    slug: "thuc-pham-giam-can",
    title: "Top 20 Thực Phẩm Hỗ Trợ Giảm Cân Hiệu Quả",
    excerpt:
      "Khám phá danh sách các thực phẩm tự nhiên giúp đẩy nhanh quá trình giảm cân và cách kết hợp chúng trong thực đơn hàng ngày.",
    content: `# Top 20 Thực Phẩm Hỗ Trợ Giảm Cân Hiệu Quả

Việc lựa chọn đúng thực phẩm đóng vai trò quan trọng trong hành trình giảm cân. Dưới đây là những thực phẩm được khoa học chứng minh có tác dụng hỗ trợ giảm cân hiệu quả.

## Nhóm Protein
1. Ức gà
   - Giàu protein, ít chất béo
   - 100g chỉ chứa 165 calo
   - Cách chế biến đa dạng

2. Cá hồi
   - Giàu omega-3
   - Protein chất lượng cao
   - Tăng cường trao đổi chất

[Chi tiết các thực phẩm khác...]

## Cách kết hợp thực phẩm

### Bữa sáng ideal:
- Yến mạch + quả mọng
- Trứng + rau xanh
- Sữa chua + hạt

[Chi tiết các bữa ăn khác...]

## Lưu ý khi sử dụng

1. Điều độ là quan trọng
2. Kết hợp đa dạng
3. Chế biến phù hợp
4. Thời điểm ăn hợp lý`,
    image: "/images/blogs/blog-05.jpg",
    date: "2025-05-01",
    author: "Dung Lê",
    tags: ["dinh dưỡng", "thực phẩm", "giảm cân"],
  },
];

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
