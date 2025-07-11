'use client';

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogPosts } from "@/app/blog/data"; // <-- Adjust path to your data
import Image from "next/image";


const getBlogPost = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};

export default function BlogDetailsPage() {
  const params = useParams();
  console.log(params)
  const slug = typeof params.slug === "string" ? params.slug : Array.isArray(params.slug) ? params.slug[0] : "";
  const post = getBlogPost(slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Magmar Blog`;
    } else {
      document.title = "Magmar Blog";
    }
    window.scrollTo(0, 0);
  }, [slug, post]);

  if (!post) {
    // 404 page
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="underline text-orange-400 hover:text-orange-500">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <div
        className="min-h-screen pt-[200px]"
        style={{
          backgroundImage: `url("/assets/bg.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-4xl px-5 pb-24 mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mb-8 transition-colors text-white/70 hover:text-white"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header */}
          <article>
            <header className="mb-12">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 text-sm text-white bg-orange-500 rounded-full">
                  {post.category}
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-white/70">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} read</span>
              </div>
            </header>
            {/* Featured Image */}
            <div className="aspect-square max-h-[600px] mx-auto relative rounded-lg mb-12 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
            </div>
            {/* Article Content */}
            <div
              className="prose prose-lg prose-invert max-w-none text-white/90 leading-relaxed space-y-6 text-lg
                [&>h1]:text-3xl [&>h1]:md:text-4xl [&>h1]:font-medium [&>h1]:text-white [&>h1]:mb-6 [&>h1]:mt-10
                [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-medium [&>h2]:text-orange-500 [&>h2]:mb-4 [&>h2]:mt-8
                [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-medium [&>h3]:text-white [&>h3]:mb-3 [&>h3]:mt-6
                [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-white/90
                [&>ul]:list-disc [&>ul]:list-outside [&>ul]:space-y-2 [&>ul]:mb-4 [&>ul]:ml-6
                [&>ol]:list-decimal [&>ol]:list-outside [&>ol]:space-y-2 [&>ol]:mb-4 [&>ol]:ml-6
                [&>li]:text-white/80 [&>li]:mb-1
                [&>blockquote]:border-l-4 [&>blockquote]:border-orange-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-white/70 [&>blockquote]:my-6
                [&>code]:bg-white/10 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-orange-500 [&>code]:text-sm
                [&>pre]:bg-white/10 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:mb-6
                [&>strong]:text-white [&>strong]:font-semibold
                [&>em]:text-white/80 [&>em]:italic"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Article Footer */}
            <footer className="pt-8 mt-16 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo.png"
                    alt={post.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-white/70">Author</p>
                  </div>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
}
