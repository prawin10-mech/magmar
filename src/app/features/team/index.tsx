"use client";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string; // Use a path like "/assets/Venkatesh.png" or "/team/arthur.jpeg"
  linkedin?: boolean;
  linkedinUrl?: string;
  twitter?: boolean;
  twitterUrl?: string;
  telegram?: boolean;
  telegramUrl?: string;
}

// Your team data
const team: TeamMember[] = [
  {
    name: "B Venkatesh",
    role: "CEO MAGMAR",
    bio: "Founder at Magmar | Ex- Mira Network | Ex-Integrations Engineer at Biconomy | Ex-Technical Lead at 5irechain | Ex-Blockchain Developer at Router Protocol | Polygon Fellow 2022",
    image: "/assets/venkatesh.png",
    linkedin: true,
    linkedinUrl: "https://www.linkedin.com/in/b-venkatesh-b0b839121/",
    twitter: true,
    twitterUrl: "https://x.com/_venmus_",
    telegram: true,
    telegramUrl: "https://t.me/venky_joster",
  },
  {
    name: "Steve",
    role: "Operations at Magmar Infra LLC",
    bio: "Steve, ex-Ecosystem Dev at Rainbow, now leads Ops at Magmar Infra LLC, aligning systems and scaling infra while bridging tech and strategy in Web3 projects.",
    image: "/assets/logo.png",
    telegram: true,
    telegramUrl: "https://t.me/stevemagmar",
  },
  {
    name: "Arthur",
    role: "Backend",
    bio: "Arthur, leads the development and implementation of cutting-edge infrastructure and smart wallet technologies powered by ERC-4337",
    image: "/assets/arthur.jpeg",
    linkedin: true,
    linkedinUrl: "https://www.linkedin.com/in/arthur-leguen-7b995b345/",
  },
  {
    name: "Alejandro Malcom",
    role: "Junior Business Development.",
    bio: "Leads business development and Integrations at Magmar",
    image: "/assets/alejandro.jpeg",
    linkedin: true,
    linkedinUrl: "https://www.linkedin.com/in/alejandro-morera-malcolm-49816916a/",
  },
  {
    name: "Zain",
    role: "CBO (Business & Ecosystem)",
    bio: "4+ years in Web3 BD. Leads dApp onboarding, partnerships, and GTM strategy across DeFi, DePIN, and RWA.",
    image: "/assets/logo.png",
  },
  {
    name: "Mansory",
    role: "Advisor at Magmar",
    bio: "Mansory, in crypto since 2017, helps high-potential teams grow. At Magmar, he advises on KOLs and long-term marketing strategies.",
    image: "/assets/Mansory.png",
    twitter: true,
    twitterUrl: "https://x.com/Mansorycrypto__",
    telegram: true,
    telegramUrl: "https://t.me/Mansorycrypto_Official",
  },
  {
    name: "Blade",
    role: "Director of Partnerships",
    bio: "Focused on strategic alliances and protocol collaborations. Experienced in driving growth across ecosystems.",
    image: "/assets/blade.jpg",
    twitter: true,
    twitterUrl: "https://x.com/ShukriyahLee",
    telegram: true,
    telegramUrl: "https://t.me/thetronerr",
  },
  {
    name: "El Davan",
    role: "Head of Growth & Community",
    bio: "Leads user acquisition, mod teams, and social engagement. Focused on scaling with authenticity and influence.",
    image: "/assets/el-davan.jpg",
    telegram: true,
    telegramUrl: "https://t.me/yaegerweb3",
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="team-bg rounded-[27px] h-[500px] w-full relative group overflow-hidden cursor-pointer flex-shrink-0">
    <div className="w-[401px] h-[72px] bg-[#331400] rounded-b-[27px] blur-[40px] absolute -bottom-5" />
    <Image
      src={member.image}
      alt={member.name}
      fill
      className="object-cover w-full h-full"
      style={{ objectFit: "cover", position: "absolute" }}
      sizes="(max-width: 600px) 100vw, 400px"
      priority={false}
    />
    <div className="absolute bottom-0 left-0 right-0 p-6 rounded-[20px] transition-transform duration-700 ease-in-out transform translate-y-0 group-hover:translate-y-[-400px] z-10 font-[family-name:var(--font-sofia-sans)] bg-gradient-to-t from-black/70 to-transparent">
      <h3 className="text-[22px] text-[#F7F7F7]">{member.name}</h3>
      <p className="font-medium text-white uppercase">{member.role}</p>
    </div>
    <div className="absolute inset-0 bg-[#AD2A01] rounded-[20px] transform translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0">
      <div className="relative w-full h-full p-6">
        {/* Add mask.svg as a background pattern (optional) */}
        <Image
          src="/assets/mask.svg"
          alt="pattern"
          fill
          className="absolute object-cover w-full h-full opacity-40"
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        <div className="relative flex flex-col justify-end h-full z-10">
          <div className="flex gap-3 mt-2">
            {member.linkedin && member.linkedinUrl && (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#000000] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
            )}
            {member.twitter && member.twitterUrl && (
              <a
                href={member.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#000000] transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter size={24} />
              </a>
            )}
            {member.telegram && member.telegramUrl && (
              <a
                href={member.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#000000] transition-colors"
                aria-label="Telegram"
              >
                <FaTelegramPlane size={24} />
              </a>
            )}
          </div>
          <p className="text-white font-[family-name:var(--font-sofia-sans)] mt-4 text-sm leading-relaxed">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const getCardWidth = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 1024) return 350; // Desktop
    if (window.innerWidth >= 768) return 300; // Tablet
    return 280; // Mobile
  }
  return 350;
};

const getVisibleCards = () => {
  if (typeof window !== "undefined") {
    const viewportWidth = Math.min(window.innerWidth - 32, 1280);
    const cardWidth =
      window.innerWidth >= 1024
        ? 350
        : window.innerWidth >= 768
        ? 300
        : 280;
    return Math.floor(viewportWidth / (cardWidth + 24));
  }
  return 1;
};

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(getCardWidth());
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const gap = 24;

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
      setVisibleCards(getVisibleCards());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, team.length - visibleCards);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">Our Team</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Meet the talented individuals behind MAGMAR
        </p>
      </div>
      <div className="relative w-full max-w-7xl">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: -((cardWidth + gap) * currentIndex),
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              width: `${team.length * (cardWidth + gap)}px`,
            }}
          >
            {team.map((member, index) => (
              <div key={index} style={{ minWidth: `${cardWidth}px` }}>
                <TeamMemberCard member={member} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.max(1, maxIndex + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(Math.min(index, maxIndex))}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#AD2A01] scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
            currentIndex === 0
              ? "bg-gray-600/30 text-gray-500 cursor-not-allowed"
              : "bg-black/50 hover:bg-black/70 text-white"
          }`}
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
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
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
          }
          disabled={currentIndex >= maxIndex}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
            currentIndex >= maxIndex
              ? "bg-gray-600/30 text-gray-500 cursor-not-allowed"
              : "bg-black/50 hover:bg-black/70 text-white"
          }`}
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TeamSection;
