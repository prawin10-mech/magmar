'use client';

import Image from 'next/image';

// The images, using public/assets
const logos = [
  '/assets/wallet/1-01.png',
  '/assets/wallet/3-01.png',
  '/assets/wallet/5-01.png',
  '/assets/wallet/6-01.png',
  '/assets/wallet/7-01.png',
  '/assets/wallet/8-01.png',
  '/assets/wallet/9-01.png',
  '/assets/wallet/10-01.png',
  '/assets/wallet/11-01.png',
  '/assets/wallet/12-01.png',
  '/assets/wallet/13-01.png',
];

// Custom Marquee Component
function ChainMarquee({
  direction = 'left',
  duration = 44.5,
}: {
  direction?: 'left' | 'right';
  duration?: number;
}) {
  // Repeat images 2 times for seamless scrolling
  const repeated = [...logos, ...logos];
  return (
    <div
      className="rfm-marquee-container mq flex"
      style={{
        overflowX: 'hidden',
        display: 'flex',
      }}
    >
      <div
        className={`rfm-marquee flex ${
          direction === 'right' ? 'animate-scroll-reverse' : 'animate-scroll'
        }`}
        style={{
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {repeated.map((src, i) => (
          <div key={i} className="image_wrapper flex flex-col">
            <Image
              src={src}
              alt=""
              width={100}
              height={100}
              className="w-[100px] mr-5 select-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Add the animation in your globals.css (if not already present)
/*
@keyframes scroll {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
@keyframes scroll-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
}
.animate-scroll {
  animation-name: scroll;
}
.animate-scroll-reverse {
  animation-name: scroll-reverse;
}
*/

export default function Wallet() {
  return (
    <div className="text-center text-white mt-[10%] px-[5%] relative">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-black sm:text-[40px] text-[30px] sm:px-[20%] px-[5%] leading-[40px] sm:leading-[50px]">
          Supports all EVM Chains
        </h2>
        <p className="sm:w-[600px] sm:text-base text-sm w-full text-white/60">
          Magmar is going to support all major and even non-mainstream EVM Chains to allow total connectivity.
        </p>
      </div>
      <div className="px-[5%]">
        <ChainMarquee direction="right" duration={44.5} />
        <div className="mt-[-50px]">
          <ChainMarquee direction="left" duration={44.5} />
        </div>
      </div>
    </div>
  );
}
