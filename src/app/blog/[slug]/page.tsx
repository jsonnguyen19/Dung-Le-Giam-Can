import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetail } from "@/components/blog/BlogDetail";
import { blogPosts } from "@/content/blogs";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Không tìm thấy bài viết - Dung Lê Giảm Cân",
    };
  }

  return {
    title: `${post.title} - Dung Lê Giảm Cân`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .filter((p) => p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  return <BlogDetail post={post} relatedPosts={relatedPosts} />;
}
