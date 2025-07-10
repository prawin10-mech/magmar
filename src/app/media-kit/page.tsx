"use client"

import { useEffect, useState } from "react";
import Image from "next/image"

const mediaKitItems = [
  {
    id: "magmar-brand-assets",
    title: "Magmar Brand Assets",
    description:
      "Complete collection of Magmar brand assets including logos, icons, and brand guidelines for official use.",
    items: [
      {
        id: "logo",
        title: "Logo (Transparent)",
        description:
          "High quality logo with transparent background for scalable use.",
        downloadUrl: "/media-kit/logo.png",
        icon: "🎨",
      },
      {
        id: "logo-with-bg",
        title: "Logo with Background",
        description: "Logo with white background for use on dark surfaces.",
        downloadUrl: "/media-kit/Logo W bg.png",
        icon: "🎨",
      },
      {
        id: "logo-without-bg",
        title: "Logo without Background",
        description: "Clean logo without background for flexible branding.",
        downloadUrl: "/media-kit/Logo W_o Background.png",
        icon: "🎨",
      },
      {
        id: "twitter-banner",
        title: "Twitter Banner",
        description: "Official Twitter/X banner with Magmar branding.",
        downloadUrl: "/media-kit/Twitter Banner.png",
        icon: "�",
      },
    ],
  },
  {
    id: "magmar-product-assets",
    title: "Product Screenshots",
    description:
      "High-quality screenshots and images of Magmar products for marketing and documentation purposes.",
    items: [
      {
        id: "dashboard",
        title: "Dashboard Screenshot",
        description: "Image of the Magmar dashboard interface.",
        downloadUrl: "/media-kit/dashboard.webp",
        icon: "🖼️",
      },
      {
        id: "liquidity",
        title: "Liquidity Interface",
        description: "Screenshot of the liquidity management interface.",
        downloadUrl: "/media-kit/Liquidity.png",
        icon: "💧",
      },
      {
        id: "live",
        title: "Live Trading Interface",
        description: "Image of the live trading platform interface.",
        downloadUrl: "/media-kit/Live.png",
        icon: "📈",
      },
    ],
  },
  {
    id: "magmar-roadmap-docs",
    title: "Documentation & Roadmap",
    description:
      "Official documentation, roadmaps, and presentation materials for partners and media.",
    items: [
      {
        id: "roadmap",
        title: "Product Roadmap",
        description: "Visual roadmap showing Magmar's development timeline.",
        downloadUrl: "/media-kit/Roadmap (1).png",
        icon: "🗺️",
      },
      {
        id: "pitch-deck",
        title: "Magmar Pitch Deck",
        description: "Official pitch deck presentation (PDF format).",
        downloadUrl: "/media-kit/Magmar Pitch.pdf",
        icon: "📄",
      },
    ],
  },
  {
    id: "magmar-video-assets",
    title: "Video Assets",
    description:
      "Promotional and educational video content showcasing Magmar's features and onboarding flow.",
    items: [
      {
        id: "welcome-video",
        title: "Welcome Video",
        description: "Introductory welcome video for new users.",
        downloadUrl: "/media-kit/Welcome.mp4",
        icon: "🎬",
      },
      {
        id: "new-buy-demo",
        title: "New Buy Demo",
        description: "Video demonstration of the new buying process.",
        downloadUrl: "/media-kit/New Buy.mp4",
        icon: "🎥",
      },
    ],
  },
];

export default function MediaKitPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = mediaKitItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownload = (url: string, fileName: string) => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen text-white">
       <div
        className="min-h-screen pt-[200px] bg-[url('/assets/bg.svg')] bg-cover bg-center bg-no-repeat bg-fixed"
      >
        <div className="max-w-[1280px] mx-auto flex relative">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-64 pr-8 sticky top-24 h-fit">
            <nav className="space-y-2">
              <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
                Quick Navigation
              </h3>
              {mediaKitItems.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === section.id
                      ? "bg-orange-500/20 text-orange-500 border border-orange-500/30"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-5 pb-24 lg:px-0">
            {/* Header */}
            <div className="mb-16">
              <h1 className="text-5xl lg:text-[82px] leading-[90%] font-medium mb-6">
                Media Kit
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/70">
                Download official Magmar brand assets, logos, and marketing
                materials. All assets are provided for media, partner, and
                developer use in accordance with our brand guidelines.
              </p>
            </div>

            {/* Media Kit Sections */}
            <div className="space-y-20">
              {mediaKitItems.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <div className="mb-12">
                    <h2 className="mb-4 text-3xl font-medium text-white lg:text-4xl">
                      {section.title}
                    </h2>
                    <p className="leading-relaxed text-white/70">
                      {section.description}
                    </p>
                  </div>

                  {/* Assets Preview */}
                  {section.id === "magmar-brand-assets" && (
                    <div className="p-4 mb-12 border sm:p-6 bg-white/5 rounded-xl border-white/10 backdrop-blur-sm">
                      <div className="flex items-center justify-center w-full h-48 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl">
                        <div className="text-center">
                          <Image
                            src="/assets/logo.png"
                            alt="Magmar Logo"
                            width={80}
                            height={80}
                            className="mx-auto size-14 lg:size-20"
                          />
                          <h3 className="mb-2 text-xl font-medium text-white">
                            Magmar Brand Assets
                          </h3>
                          <p className="text-sm text-white/70">
                            High-quality brand assets and logos
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === "magmar-product-assets" && (
                    <div className="p-4 mb-12 border sm:p-6 bg-white/5 rounded-xl border-white/10 backdrop-blur-sm">
                      <div className="flex items-center justify-center w-full h-48 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📱</div>
                          <h3 className="mb-2 text-xl font-medium text-white">
                            Product Screenshots
                          </h3>
                          <p className="text-sm text-white/70">
                            Interface screenshots and product images
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === "magmar-roadmap-docs" && (
                    <div className="p-4 mb-12 border sm:p-6 bg-white/5 rounded-xl border-white/10 backdrop-blur-sm">
                      <div className="flex items-center justify-center w-full h-48 bg-gradient-to-r from-green-500/20 to-teal-600/20 rounded-xl">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📋</div>
                          <h3 className="mb-2 text-xl font-medium text-white">
                            Documentation & Roadmap
                          </h3>
                          <p className="text-sm text-white/70">
                            Official docs and development timeline
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === "magmar-video-assets" && (
                    <div className="p-4 mb-12 border sm:p-6 bg-white/5 rounded-xl border-white/10 backdrop-blur-sm">
                      <div className="flex items-center justify-center w-full h-48 bg-gradient-to-r from-red-500/20 to-pink-600/20 rounded-xl">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🎬</div>
                          <h3 className="mb-2 text-xl font-medium text-white">
                            Video Assets
                          </h3>
                          <p className="text-sm text-white/70">
                            Promotional and educational videos
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Download Items */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {section.items.map((item) => (
                      <div
                        key={item.id}
                        className="overflow-hidden transition-all duration-300 border rounded-lg group border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/30"
                      >
                        <div className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="text-2xl">{item.icon}</div>
                            <div className="flex-1">
                              <h3 className="mb-2 text-xl font-medium text-white transition-colors group-hover:text-orange-500">
                                {item.title}
                              </h3>
                              <p className="mb-4 text-sm leading-relaxed text-white/70">
                                {item.description}
                              </p>
                              <button
                                onClick={() =>
                                  handleDownload(item.downloadUrl, item.title)
                                }
                                className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 transition-colors hover:text-orange-400"
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
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
