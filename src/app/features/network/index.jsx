'use client';
import Image from "next/image";

const logos = [
  { src: "/assets/network/aws.png", alt: "aws", width: 100 },
  { src: "/assets/network/nvidia.png", alt: "nvidia", width: 100 },
  { src: "/assets/network/google.png", alt: "google", width: 100 },
  { src: "/assets/network/microsoft.png", alt: "microsoft", width: 150 },
  { src: "/assets/network/aethir.png", alt: "aethir", width: 100 },
  { src: "/assets/network/akash.png", alt: "akash", width: 100 },
  { src: "/assets/network/filecoin.png", alt: "filecoin", width: 100 },
];

export default function Network() {
  // Repeat 3x for smooth loop effect
  const repeated = [...logos, ...logos, ...logos];

  return (
    <div>
      <div className="sm:flex mt-[2%] justify-center items-center flex-col pt-[3%] px-[5%]">
        <h5 className="text-white/50 text-center sm:text-base text-sm">
          Powering the next generation of builders
        </h5>
        <div className="flex sm:flex-row flex-col gap-3 items-center sm:mt-[-10px] sm:mb-[40px] w-full overflow-hidden">
          <div className="w-full overflow-hidden">
            <div className="marquee-track">
              {repeated.map((logo, i) => (
                <Image
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={100}
                  className="mr-5 select-none"
                  draggable={false}
                  priority={i < logos.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
