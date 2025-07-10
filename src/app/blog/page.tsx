"use client"

import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { blogPosts } from "./data";

export default function BlogPage() {
  return (
    <div className="min-h-screen text-white">
      <div
        className="min-h-screen pt-[200px]"
        style={{
          backgroundImage: `url/assets/bg.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5">
          {/* Header */}
          <section className="pb-16 text-center">
            <motion.h1
              className="text-5xl lg:text-[82px] leading-[90%] font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Magmar <span className="text-orange-500">Blog</span>
            </motion.h1>
            <motion.p
              className="max-w-2xl mx-auto text-lg leading-relaxed text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Discover the latest insights, updates, and technical deep-dives
              from the Magmar smart account abstraction team
            </motion.p>
          </section>

          {/* Main Content */}
          <main className="w-full pb-24 space-y-16">
            {/* Featured Post */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FeaturedPostCard post={blogPosts[0]} />
            </motion.section>

            {/* Blog Posts Grid */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {blogPosts.slice(1).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <BlogPostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Follow Us Section */}
            <section className="py-16">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="mb-8 text-3xl font-medium md:text-4xl">
                    Follow Us
                  </h2>
                  <p className="mb-12 text-lg text-white/70">
                    Stay connected with the Magmar community
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-4 transition-all duration-300 border rounded-lg border-white/10 bg-white/5 backdrop-blur-sm hover:bg-orange-500/10 hover:border-orange-500/20 group"
                      >
                        <link.icon className="text-[#fd1d1d] transition-transform size-5 group-hover:scale-110" />
                        <span className="text-white/70 group-hover:text-white">
                          {link.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

// Featured Post Card Component
function FeaturedPostCard({ post }: { post: {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
} }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <div className="overflow-hidden transition-all duration-500 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-orange-500/5 hover:border-orange-500/20">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/2 aspect-[16/10] lg:aspect-[4/3] relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />

            {/* Category tag positioned at bottom left on image */}
            <div className="absolute bottom-4 left-4">
              <span className="px-4 py-2 text-sm text-white bg-[#fd1d1d] rounded-full">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between p-8 lg:w-1/2 lg:p-12">
            {/* Title and Excerpt */}
            <div>
              <h2 className="mb-6 text-2xl font-medium leading-tight transition-colors lg:text-4xl xl:text-5xl group-hover:text-orange-500">
                {post.title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-white/70">
                {post.excerpt}
              </p>
            </div>

            {/* Author and Date Section */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="relative overflow-hidden rounded-full size-10">
                  <img
                    src="/logo.png"
                    alt={post.author}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {post.author}
                  </div>
                  <div className="text-xs text-white/50">{post.date}</div>
                </div>
              </div>
              <div className="ml-auto text-sm text-white/50">
                {post.readTime} read
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Regular Blog Post Card Component
function BlogPostCard({ post }: { post: {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
} }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full group">
      <div className="flex flex-col h-full overflow-hidden transition-all duration-300 border rounded-lg border-white/10 bg-white/5 backdrop-blur-sm hover:bg-orange-500/5 hover:border-orange-500/20">
        <div className="aspect-[16/10] relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs text-white bg-[#fd1d1d] rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center gap-3 mb-3 text-xs text-white/50">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} read</span>
          </div>
          <h3 className="mb-3 text-lg font-medium transition-colors group-hover:text-orange-500 line-clamp-2">
            {post.title}
          </h3>
          <p className="flex-1 text-sm leading-relaxed text-white/70 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 pt-4 mt-4 border-t border-white/10">
            <div className="relative overflow-hidden rounded-full size-5">
              <img
                src="/logo.png"
                alt={post.author}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-sm text-white/50">By {post.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

const socialLinks = [
  {
    name: "Twitter",
    url: "https://x.com/Magmarerc",
    icon: FaXTwitter,
  },
  {
    name: "Telegram",
    url: "https://t.me/magmareth",
    icon: FaTelegramPlane,
  },
];


