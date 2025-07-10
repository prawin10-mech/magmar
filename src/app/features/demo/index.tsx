"use client";
import { useRef, useState } from "react";

export default function DemoPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState({});

//   const [selectedVideo, setSelectedVideo] = useState(null);

  // Add headers array corresponding to each video
  const headers = [
    "Inside Magmar: B Venkatesh Answers the Big Questions",
    "How to Integrate MagMar SDK in Minutes | Gasless Transactions Made Easy (ERC-4337)",
    "Magmar SDK | Build Web3 Experiences with AI + Account Abstraction (ERC-4337)",
    "MagMar Wallet Built on ERC-4337 | Gasless, Secure & Developer-Ready",
  ];

  const videos = [
    "https://www.youtube.com/embed/eLUpsXXc8jI?si=sFdOT0MckcDccqkv",
    "https://www.youtube.com/embed/4GGQQjomAnM?si=JZJLC8q5xD138jqH",
    "https://www.youtube.com/embed/yuSz5hBSIDs?si=DIsbQiE2Ge39hV-I",
    "https://www.youtube.com/embed/LqvhCwDlnlk?si=4kampBRaFGh8qz0W",
  ];

  const containerRef = useRef(null);

  const scrollToVideo = (index: number) => {
    setCurrentIndex(index);
    const container = containerRef.current;
    if (!container) return;
    const videoElement = (container as HTMLElement).children[0]?.children[index];
    if (!videoElement) return;
    const containerWidth = (container as HTMLElement).offsetWidth;
    const videoWidth = (videoElement as HTMLElement).offsetWidth;

    // Calculate the scroll position to center the video
    const scrollLeft =
      (videoElement as HTMLElement).offsetLeft - (containerWidth - videoWidth) / 2;
    (container as HTMLElement).scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  };

  const handleVideoPlay = (index: number) => {
    setCurrentIndex(index);
    // const videoUrl = videos[index] + "&autoplay=1";
    // setSelectedVideo(videoUrl as any);
    setPlayingVideos((prev) => ({ ...prev, [index]: true }));

    // Scroll to center the video container
    const container = containerRef.current;
    if (container) {
      const videoElement = (container as HTMLElement).children[0].children[index];
      const containerWidth = (container as HTMLElement).offsetWidth;
      const videoWidth = (videoElement as HTMLElement).offsetWidth;
      const scrollLeft =
        (videoElement as HTMLElement).offsetLeft - (containerWidth - videoWidth) / 2;

      (container as HTMLElement).scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="demo"
      className="flex flex-col items-center gap-4 mb-[50px] md:mb-[100px] px-5 h-full"
    >
      {/* Overlay for closing the expanded video */}
      {Object.values(playingVideos).some(Boolean) && (
        <div
          className="fixed inset-0 bg-black/30 z-[150]"
          onClick={() => {
            const playingIndex = Object.entries(playingVideos).find(
              ([, isPlaying]) => isPlaying
            )?.[0];
            if (playingIndex !== undefined) {
              setPlayingVideos((prev) => ({ ...prev, [playingIndex]: false }));
            }
          }}
        />
      )}

      <h1 className="bg-clip-text md:text-[30px] text-[24px] font-black text-transparent font-[family-name:var(--font-belgro)] uppercase text-white text-center leading-[115%] md:w-[800px] mb-10">
        {headers[currentIndex]}
      </h1>
      <div
        className="w-full overflow-x-auto scrollbar-hide"
        ref={containerRef}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-20 min-w-max p-4 md:ml-[calc(50%-375px)]">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`
                w-full md:w-[750px] p-4 transition-all duration-300
                ${currentIndex === index ? "z-10" : "md:blur-sm"}
              `}
            >
              <div
                className={`border border-[#ffffff2e] rounded-[20px] transition-all duration-300 relative md:h-[370px] ${
                  currentIndex === index ? "md:scale-110" : "md:scale-90"
                }`}
              >
                {video.includes("youtube.com") || video.includes(".mp4") ? (
                  <iframe
                    src={video}
                    className="w-full h-full rounded-[20px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={video}
                    alt="Coming Soon"
                    className="w-full h-full rounded-[20px] object-cover"
                  />
                )}
                {!playingVideos[index as keyof typeof playingVideos] && (
                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-[20px] cursor-pointer"
                    onClick={() => handleVideoPlay(index)}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render the expanded video OUTSIDE the scroll container */}
      {Object.entries(playingVideos).map(([idx, isPlaying]) =>
        isPlaying ? (
          <div
            key={idx}
            className="
              fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[96vw] max-w-[1200px]
              h-auto aspect-video
              z-[200] flex items-center justify-center
              p-2
            "
            style={{
              maxHeight: "90vh",
            }}
          >
            <iframe
              src={videos[parseInt(idx)] + "&autoplay=1"}
              className="w-full h-full rounded-[20px] bg-black"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                maxHeight: "90vh",
              }}
            />
            <button
              className="absolute p-2 text-white rounded-full top-2 right-2 md:top-4 md:right-4 bg-black/50 hover:bg-black/70"
              onClick={() =>
                setPlayingVideos((prev) => ({ ...prev, [idx]: false }))
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : null
      )}

      <div className="flex gap-2 ">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToVideo(index)}
            className={`
              w-[35px] h-[35px] flex items-center justify-center text-white border
              ${
                currentIndex === index
                  ? "border-[#FD1D1D]"
                  : "border-[#ffffff2e]"
              }
              hover:border hover:border-[#FD1D1D] transition-colors rounded-full
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
