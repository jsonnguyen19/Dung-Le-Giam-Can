"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { BlogPost } from "@/content/blogs";
import {
  AnimatedDiv,
  AnimatedArticle,
} from "@/components/motion/WithAnimation";

interface BlogDetailProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export const BlogDetail = ({ post, relatedPosts }: BlogDetailProps) => {
  return (
    <>
      <Section>
        <article>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("vi-VN")}
                </time>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-2 justify-center">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-pink/10 text-pink text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div
              className="prose prose-pink max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedDiv>
        </article>
      </Section>

      {relatedPosts.length > 0 && (
        <Section title="Bài viết liên quan" className="bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <AnimatedArticle
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link href={`/blog/${relatedPost.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-pink transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              </AnimatedArticle>
            ))}
          </div>
        </Section>
      )}
    </>
  );
};
