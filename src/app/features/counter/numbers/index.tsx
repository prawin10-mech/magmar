'use client';

import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Numbers() {
  const [viewRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Trigger the countup only once
  if (inView && !hasAnimated) setHasAnimated(true);

  return (
    <div
      ref={viewRef}
      className="mt-[2%] max-w-[1440px] mx-auto px-[5%] w-full"
      style={{ userSelect: 'none' }}
    >
      <div className="grid grid-cols-2 gap-y-8 items-center">
        <div className="col-span-1 flex flex-col items-center">
          <h1 className="text-white sm:text-[70px] font-semibold text-[40px] leading-[90%]">
            {hasAnimated ? <CountUp end={50} duration={2} /> : 0}M
          </h1>
          <h5 className="text-white sm:text-base text-sm">UserOps</h5>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <h1 className="text-white sm:text-[70px] font-semibold text-[40px] leading-[90%]">
            {hasAnimated ? (
              <>
                <CountUp end={1.2} decimals={1} duration={2} />M
              </>
            ) : (
              <>0.0M</>
            )}
          </h1>
          <h5 className="text-white sm:text-base text-sm">Smart Accounts</h5>
        </div>
        <div className="mt-5 col-span-1 flex flex-col items-center">
          <h1 className="text-white sm:text-[70px] font-semibold text-[40px] leading-[90%]">
            {hasAnimated ? <CountUp end={2} duration={2} /> : 0}+
          </h1>
          <h5 className="text-white sm:text-base text-center text-sm">
            Users Onboarded
          </h5>
        </div>
        <div className="mt-5 col-span-1 flex flex-col items-center">
          <h1 className="text-white sm:text-[70px] font-semibold text-[40px] leading-[90%]">
            {hasAnimated ? <CountUp end={12} duration={2} /> : 0}+
          </h1>
          <h5 className="text-white sm:text-base text-sm">Volume</h5>
        </div>
      </div>
    </div>
  );
}
