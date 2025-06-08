import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import { AnimatedArticle } from "@/components/motion/WithAnimation";
import { blogPosts } from "@/content/blogs";

export const metadata: Metadata = {
  title: "Blog - Chia sẻ kinh nghiệm giảm cân | Dung Lê Giảm Cân",
  description:
    "Chia sẻ kiến thức, mẹo và bí quyết giảm cân hiệu quả, an toàn. Cập nhật thông tin mới nhất về các phương pháp giảm cân khoa học.",
  openGraph: {
    title: "Blog - Chia sẻ kinh nghiệm giảm cân | Dung Lê Giảm Cân",
    description:
      "Chia sẻ kiến thức, mẹo và bí quyết giảm cân hiệu quả, an toàn. Cập nhật thông tin mới nhất về các phương pháp giảm cân khoa học.",
    type: "website",
    images: [
      {
        url: "https://dunglegiamcan.com/images/blog/blog-01.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Dung Lê Giảm Cân",
      },
    ],
    siteName: "Dung Lê Giảm Cân",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Chia sẻ kinh nghiệm giảm cân | Dung Lê Giảm Cân",
    description:
      "Chia sẻ kiến thức, mẹo và bí quyết giảm cân hiệu quả, an toàn. Cập nhật thông tin mới nhất về các phương pháp giảm cân khoa học.",
    images: ["https://dunglegiamcan.com/images/blog/blog-01.jpg"],
  },
};

export default function BlogPage() {
  return (
    <Section
      title="Blog"
      subtitle="Chia sẻ kinh nghiệm và kiến thức về giảm cân khoa học"
      hideTitleOnMobile={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <AnimatedArticle
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("vi-VN")}
                  </time>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-900 hover:text-pink transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-pink/10 text-pink text-sm px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </AnimatedArticle>
        ))}
      </div>
    </Section>
  );
}
