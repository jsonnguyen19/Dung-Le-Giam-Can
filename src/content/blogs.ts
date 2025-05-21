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
    excerpt: "Khám phá những phương pháp giảm cân khoa học và bền vững...",
    content: `# 5 Cách Giảm Cân Hiệu Quả và An Toàn

Giảm cân là một hành trình đòi hỏi sự kiên trì và phương pháp khoa học...

## 1. Xây dựng chế độ ăn uống cân bằng
...

## 2. Duy trì vận động đều đặn
...

## 3. Uống đủ nước
...

## 4. Ngủ đủ giấc
...

## 5. Sử dụng sản phẩm hỗ trợ phù hợp
...`,
    image: "/images/blogs/blog-01.jpg",
    date: "2025-05-20",
    author: "Dung Lê",
    tags: ["giảm cân", "sức khỏe", "lifestyle"],
  },
  // Thêm các bài viết khác
];

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
