"use client"
import Button from "@/app/components/buttons/Button";

export default function Hero() {
  return (
    <div className="relative h-screen full ">
      <div className="absolute inset-0 z-10 bg-transparent"></div>

      <div className="absolute bottom-[15%] w-full z-20 h-full">
        <div className="w-full h-full flex flex-col justify-end pb-8 max-w-[1440px] mx-auto px-[5%]">
          <h1 className="text-white font-bold text-[45px] leading-[50px]">
            Powering Crypto <br className="hidden md:flex " />
            Adoption
          </h1>
          <p className="text-white font-medium sm:text-lg text-base sm:w-[500px] w-full mt-[3%] mb-4">
            An ERC-4337 toolkit for RWA and DePIN enhancing gasless
            transactions, social login, multichain support and much more, making
            DeFi accessible and secure
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://app-cashback-next.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="Enter Dapp" />
            </a>
            <a
              href="https://drive.google.com/file/d/16DNG9GsCsFv2CIRognhU_jhXgQ6K9L-F/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="MagmarInfra LLC" variant="secondary" />
            </a>
          </div>
        </div>
      </div>

      <video
        src="/assets/videos/Hero.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 z-0 object-cover pointer-events-none size-full"
      />
      {/* <iframe
        src="https://my.spline.design/retrofuturismbganimation-eEIH08C8i7fJN9Tlm8HbCS63/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute z-0 pointer-events-none"
      ></iframe> */}
    </div>
  );
}
