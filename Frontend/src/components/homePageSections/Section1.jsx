import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react"; // install lucide-react if not already

const Section1 = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden px-6">
      {/* Content */}
      <div className="text-center absolute z-20  text-white flex flex-col gap-6 w-3/5">
        {/* Headline */}
        <h1 className="text-[56px] md:text-6xl font-semibold leading-snug">
          Grow Your Business with{" "}
          <span className="text-[#A0CB3A]">Result-Driven</span> Digital
          Marketing Services
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-[20px] font-extralight  leading-tight">
          Boost your online visibility, generate quality leads, and increase ROI
          with our expert SEO, social media, and paid marketing strategies.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-3 text-[24px]">
          <button className="flex items-center gap-2 bg-[#A0CB3A] justify-center  text-black font-medium  w-[246px] h-[86px] text-center rounded-full hover:bg-[#8fb832] transition">
            Discover Us <ArrowUpRight className="font-3xl" />
          </button>
        </div>
      </div>

      {/* Turtle illustration (absolute positioned bottom-right) */}
      <img
        src="/images/turtle.png" // replace with your turtle image path
        alt="Turtle illustration"
        className="absolute -bottom-30 right-0 w-64 md:w-96 opacity-90"
      />
    </div>
  );
};

export default Section1;
