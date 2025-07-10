"use client"



const Content = ({ 
  heading, 
  subparagraph, 
  paragraph 
}: {
  heading: string;
  subparagraph: string;
  paragraph: string;
}) => {
  return (
    <div
      className="relative bg-[#3a3a3a] py-[5%] px-[4%] rounded-xl"
      style={{
        backgroundImage: "url('/assets/bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <h2 className="sm:text-4xl text-xl font-semibold text-white mb-2">
        {heading}
      </h2>
      <p className="sm:text-base text-sm text-white sm:mb-4 sm:mt-[7%]">
        {subparagraph}
      </p>
      <p className="sm:text-base text-sm text-white sm:mb-4 mt-[5%] sm:mt-[7%]">
        {paragraph}
      </p>
    </div>
  );
};

export default Content;
