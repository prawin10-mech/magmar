'use client';

import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="px-[5%] sm:my-[10%] my-[5%]" id="pricing">
      <div className="w-full h-[50%] bg-[#1E1D1E] sm:py-[4%] py-[6%] rounded-[16px]">
        <div className="px-[6%] flex justify-center items-center flex-col">
          <h2 className="sm:text-[32px] text-[30px] font-semibold text-white sm:leading-[40px] leading-[30px] text-center mb-[1.5%]">
            Track Your Portfolio in Excruciating Detail.
          </h2>
          <p className="sm:w-[700px] sm:text-lg text-sm text-white text-center sm:text-white/60 sm:my-0 my-[4%]">
            Track your Magmar Wallet (realized and unrealized), historical
            portfolio balances, collectibles and their floor prices and your
            real time net-worth, all with a websockets powered chart that
            refreshes every 5 seconds for a truly real time portfolio management
            experience.
          </p>
        </div>
        <div className="flex justify-center mt-[2%] px-[6%]">
          <Image
            src="/assets/dashboard.webp"
            alt="dashboard"
            width={850}
            height={600}
            className="h-[600px] border border-red-500 rounded-[25px]"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
