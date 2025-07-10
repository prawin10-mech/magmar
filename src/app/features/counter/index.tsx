"use client";

import Image from "next/image";
import Numbers from "./numbers";

export default function Counter() {
  return (
    <div className="pb-[10%] px-[5%]">
      <div className="h-[400px] w-full relative">
        <Image
          src="/assets/bg.svg"
          alt="Background"
          fill
          className="absolute w-full h-full object-cover rounded-[30px] z-0"
          style={{ objectFit: "cover", borderRadius: "30px" }}
          priority
        />
        <div className="px-[5%] absolute z-[10] flex items-center h-full text-white w-full">
          <div className="grid items-center grid-cols-1 sm:grid-cols-2 w-full">
            <div className="col-span-1">
              <h2 className="sm:text-[50px] text-[24px] font-bold sm:leading-[50px] leading-[35px]">
                We set standards for seamless blockchain transactions, so you
                can scale with effortless UX
              </h2>
            </div>
            <div className="w-full col-span-1">
              <Numbers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
