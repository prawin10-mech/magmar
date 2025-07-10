'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { toast } from 'sonner';
import Button from '@/app/components/buttons/Button';

const docsLinks = [
  { name: "Integration Docs", href: "https://magmar-toolkit.gitbook.io/sdk-integration" },
  { name: "Whitepaper", href: "https://magmar-1.gitbook.io/magmar" },
  { name: "Company Formation Docs", href: "https://drive.google.com/file/d/11V-FcuZPSA3XjGPL93U0t_qiu7F-9VT4/view?usp=sharing" },
  { name: "Pitchdeck", href: "https://drive.google.com/file/d/1D4UgW9lHsVq1xDdWyU28RrSJwqhJpFhd/view?usp=sharing" },
  { name: "Terms of service", href: "/terms-of-service" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

const resourcesLinks = [
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Glossary", href: "/glossary" },
  { name: "Media Kit", href: "/media-kit" },
];

function DocsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button type="button" className="relative hover:text-white transition-colors duration-300 flex items-center gap-1">
        Docs
        <IoIosArrowDown className="text-lg transition-transform duration-300 group-hover:rotate-180" />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[250px] bg-black/90 backdrop-blur-md rounded-lg py-2 shadow-lg border border-white/10 z-20">
          {docsLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.href.startsWith('/') ? undefined : "_blank"}
              rel={link.href.startsWith('/') ? undefined : "noopener noreferrer"}
              className="block px-4 py-2 text-sm transition-colors text-white/80 hover:text-white hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function ResourcesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button type="button" className="relative hover:text-white transition-colors duration-300 flex items-center gap-1">
        Resources
        <IoIosArrowDown className="text-lg transition-transform duration-300 group-hover:rotate-180" />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[250px] bg-black/90 backdrop-blur-md rounded-lg py-2 shadow-lg border border-white/10 z-20">
          {resourcesLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.href.startsWith('/') ? undefined : "_blank"}
              rel={link.href.startsWith('/') ? undefined : "noopener noreferrer"}
              className="block px-4 py-2 text-sm transition-colors text-white/80 hover:text-white hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function LinkedInDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button type="button" className="mt-1 text-white transition-colors duration-300 transform hover:text-white hover:scale-110">
        <FaLinkedinIn className="text-[22px]" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[200px] bg-black/90 backdrop-blur-md rounded-lg py-2 shadow-lg border border-white/10 z-20">
          <a
            href="https://www.linkedin.com/company/magmarinfra/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-sm transition-colors text-white/80 hover:text-white hover:bg-white/10"
          >Company</a>
          <a
            href="https://www.linkedin.com/in/b-venkatesh-b0b839121/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-sm transition-colors text-white/80 hover:text-white hover:bg-white/10"
          >Founder</a>
        </div>
      )}
    </div>
  );
}

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDocs, setShowDocs] = useState(false);
  const [showResources, setShowResources] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleChart = () => {
    toast.success("COMING SOON !!!");
  };

  return (
    <div className="relative">
      <div className={`fixed w-full z-[100000] transition-all duration-500 ${isScrolled ? "" : "bg-transparent"}`}>
        <div className={`transition-all duration-500 ${
          isScrolled
            ? "max-w-[1100px] md:mx-auto mx-5 rounded-full mt-4 bg-black/90 backdrop-blur-md border border-white/10"
            : "md:max-w-[1440px] md:mx-auto border border-transparent md:bg-transparent bg-black mx-5 md:mt-0 mt-5 md:rounded-none rounded-full"
        }`}>
          <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? "py-3 px-8" : "md:py-6 py-2 px-[5%]"}`}>
            <Link href="/" className="flex items-center">
              <Image
                className={`transition-all duration-500 ${isScrolled ? "w-fit h-10" : "w-fit h-12"} object-contain`}
                src="/assets/logo.17c595847422deb7abc3.png"
                alt="Magmar logo"
                width={48}
                height={48}
                priority
              />
              <h4 className={`font-bold text-[#fd1d1d] transition-all duration-500 ${isScrolled ? "text-xl" : "text-2xl"}`}>
                Magmar
              </h4>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm text-white/80">
                <li className="group">
                  <Link href="/" className="relative transition-colors duration-300 hover:text-white">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="group">
                  <a href="#demo" className="relative transition-colors duration-300 hover:text-white">
                    Demo
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li className="group">
                  <a href="#features" className="relative transition-colors duration-300 hover:text-white">
                    Features
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li className="group"><DocsDropdown /></li>
                <li className="group"><ResourcesDropdown /></li>
                <li className="cursor-pointer group" onClick={handleChart}>
                  <span className="relative transition-colors duration-300 hover:text-white">
                    Chart
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </li>
                <li className="cursor-pointer group">
                  <a
                    href="https://contractwolf.io/projects/magmar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative transition-colors duration-300 hover:text-white"
                  >
                    KYC
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="items-center hidden gap-6 md:flex">
              <div className="flex items-center gap-4">
                <LinkedInDropdown />
                <a
                  href="https://github.com/Magmar-toolkit/magmar-examples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 transform hover:text-white hover:scale-110"
                >
                  <FiGithub className="text-xl" />
                </a>
                <a
                  href="https://x.com/Magmarerc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 transform hover:text-white hover:scale-110"
                >
                  <FaXTwitter className="text-xl" />
                </a>
                <a
                  href="https://t.me/magmareth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 transform hover:text-white hover:scale-110"
                >
                  <FaTelegramPlane className="text-xl" />
                </a>
              </div>
              <a
                href="https://app.magmarinfra.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  text="Build with us"
                  className="transition-transform duration-300 transform rounded-full hover:scale-105"
                  variant="secondary"
                  type="button"
                />
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setToggle(!toggle)}
              className="md:hidden text-[30px] text-white hover:text-gray-300 transition-colors"
              aria-label="Open menu"
            >
              {toggle ? <IoClose /> : <HiMenuAlt4 />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className={`${toggle ? "flex flex-col" : "hidden"} py-6 bg-black/90 backdrop-blur-md fixed top-24 right-0 mx-4 my-2 min-w-[250px] rounded-[20px] sidebar z-[100]`}>
        <ul className="flex flex-col items-start justify-end flex-1 gap-6 px-6 text-white list-none">
          <li className="w-full transition-colors hover:text-white">
            <Link href="/" className="block w-full">Home</Link>
          </li>
          <li className="w-full transition-colors hover:text-white">
            <a href="#demo" className="block w-full">Demo</a>
          </li>
          <li className="w-full transition-colors hover:text-white">
            <a href="#features" className="block w-full">Features</a>
          </li>
          <li className="w-full">
            <button
              onClick={() => setShowDocs(!showDocs)}
              className="flex items-center justify-between w-full transition-colors hover:text-white"
            >
              <span className="flex items-center gap-2">
                Docs <IoIosArrowDown className="text-lg" />
              </span>
            </button>
            {showDocs && (
              <div className="flex flex-col w-full gap-3 pl-4 mt-3 border-l border-white/20">
                {docsLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target={link.href.startsWith('/') ? undefined : "_blank"}
                    rel={link.href.startsWith('/') ? undefined : "noopener noreferrer"}
                    className="block w-full"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li className="w-full">
            <button
              onClick={() => setShowResources(!showResources)}
              className="flex items-center justify-between w-full transition-colors hover:text-white"
            >
              <span className="flex items-center gap-2">
                Resources <IoIosArrowDown className="text-lg" />
              </span>
            </button>
            {showResources && (
              <div className="flex flex-col w-full gap-3 pl-4 mt-3 border-l border-white/20">
                {resourcesLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target={link.href.startsWith('/') ? undefined : "_blank"}
                    rel={link.href.startsWith('/') ? undefined : "noopener noreferrer"}
                    className="block w-full"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li
            className="w-full transition-colors cursor-pointer hover:text-white"
            onClick={handleChart}
          >
            Chart
          </li>
          <li className="w-full">
            <a
              href="https://contractwolf.io/projects/magmar"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full transition-colors duration-300 hover:text-white"
            >
              KYC
            </a>
          </li>
          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com/Magmar-toolkit/magmar-examples"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 transform hover:text-white hover:scale-110"
            >
              <FiGithub className="text-2xl" />
            </a>
            <a
              href="https://x.com/Magmarerc"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              <FaXTwitter className="text-2xl" />
            </a>
            <a
              href="https://t.me/magmareth"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              <FaTelegramPlane className="text-2xl" />
            </a>
          </div>
          <div className="w-full mt-4">
            <a
              href="https://app.magmarinfra.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button
                text="Build with us"
                className="w-full transition-transform duration-300 transform rounded-full hover:scale-105"
                variant="secondary"
              />
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
