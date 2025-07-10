'use client';

import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#18181A] mt-[3%] text-white px-[5%] py-[5%] w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between">
        {/* Left: Description & Copyright */}
        <div className="flex flex-col">
          <h5 className="text-sm sm:w-[300px] w-full text-white">
            Magmar Infra is an ERC-4337 toolkit for RWA and DePIN enhancing gasless transactions, social login, multichain support and much more, making DeFi accessible and secure
          </h5>
          <h6 className="hidden sm:flex text-xs mt-[2%] text-white/60">
            Copyright © 2025 Magmar Wallet
          </h6>
        </div>

        {/* Right: Socials, Policy, Contact */}
        <div className="flex flex-col sm:items-end sm:mt-0 mt-[4%]">
          <div className="flex items-center gap-3 mb-3 sm:gap-7 sm:mb-5">
            {/* Telegram */}
            <a
              href="https://t.me/magmareth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="rounded-[6px] w-[40px] h-[40px] flex justify-center items-center border border-transparent hover:border-white transition"
            >
              <svg
                width="24"
                height="24"
                className="sm:w-[40px] w-[30px]"
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="#fff" d="M120,0C53.7,0,0,53.7,0,120s53.7,120,120,120s120-53.7,120-120S186.3,0,120,0z"/>
                  <path fill="#27A7E7" d="M195,75l-25,118c-2,9-7,12-15,7l-42-31l-20,19c-2,2-4,4-8,4l3-42l77-70c4-4-1-6-7-2l-95,60L34,109c-9-3-9-9,2-13l149-58C193,33,202,41,195,75z"/>
                </g>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/magmarinfra/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[6px] w-[40px] h-[40px] flex justify-center items-center border border-white hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-[22px]" />
            </a>
            {/* Twitter (X) */}
            <a
              href="https://x.com/Magmarerc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="rounded-[6px] w-[40px] h-[40px] flex justify-center items-center border border-transparent hover:border-white transition"
            >
              <FaXTwitter className="text-[22px]" />
            </a>
          </div>

          {/* Contact */}
          <h6 className="text-sm sm:w-[300px] sm:text-right">
            You can email legal@magmarinfra.com to provide feedback for support requests
          </h6>

          {/* Copyright mobile */}
          <h6 className="flex sm:hidden text-xs mt-[2%] text-white/60">
            Copyright © 2025 Magmar Wallet
          </h6>

          {/* Policies */}
          <div className="flex gap-4 mt-[2%]">
            <a
              href="mailto:legal@magmarinfra.com"
              className="text-xs underline text-white/60 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:legal@magmarinfra.com"
              className="text-xs underline text-white/60 hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
