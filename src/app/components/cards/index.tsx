import { motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  i: number;
  title: string;
  description: string;
  imageUrl: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card = ({
  i,
  title,
  description,
  imageUrl,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 left-0 flex items-center justify-center w-full h-screen md:mt-5"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col sm:inline items-center relative sm:h-[470px] h-fit w-full rounded-[25px] sm:p-[50px] p-[5%] origin-top border border-[#353637] overflow-hidden bg-gradient-to-br from-black via-black to-red-900/20"
      >
        <div className="absolute inset-0  bg-black z-[40] rounded-[40px]"></div>
        <video
          className="md:absolute right-0 -top-[20px] lg:top-0  md:w-[45%] z-[50] w-[100%] object-cover md:object-contain"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={`/assets/videos/${imageUrl}`} type="video/mp4" />
        </video>
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center h-full relative z-[100]">
          <div className="col-span-1">
            <div className="flex flex-col">
              <h2 className="sm:text-[40px] md:text-[30px] text-[24px] text-white font-bold leading-[40px] ">
                {title}
              </h2>

              <p className="text-white sm:text-base text-sm my-[3%] max-w-[95%] newFont ">
                {description}
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <motion.div>
              {/* <img className="w-full h-full " src={bg} alt="image" />
              <img className="w-full h-full " src={`/${src}`} alt="image" /> */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
