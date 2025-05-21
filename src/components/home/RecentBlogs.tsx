import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AnimatedArticle } from "@/components/motion/WithAnimation";
import { getRecentPosts } from "@/content/blogs";

export const RecentBlogs = () => {
  const recentPosts = getRecentPosts(3);

  return (
    <Section
      title="Bài viết mới nhất"
      subtitle="Chia sẻ kinh nghiệm và kiến thức về giảm cân khoa học"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentPosts.map((post, index) => (
          <AnimatedArticle
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-pink transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </Link>
          </AnimatedArticle>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/blog">
          <Button variant="outline" size="lg">
            Xem tất cả bài viết →
          </Button>
        </Link>
      </div>
    </Section>
  );
};
