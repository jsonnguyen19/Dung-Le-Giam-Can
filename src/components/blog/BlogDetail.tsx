"use client";

import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
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

            <div className="prose prose-lg prose-gray max-w-none markdown-content">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mt-8 mb-6 text-gray-900">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-medium mt-5 mb-3 text-gray-800">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-4 ml-6 space-y-2 list-disc">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-4 ml-6 space-y-2 list-decimal">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700 leading-relaxed">
                      {children}
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-900">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-gray-800">{children}</em>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
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
                className="bg-white rounded-lg md:shadow-md overflow-hidden"
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
