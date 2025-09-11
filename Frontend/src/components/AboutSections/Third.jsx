import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import bulb from "../../assets/bulb.png";
import stock from "../../assets/stock.png";
import turtle from "../../assets/turtle.png";
import samosa from "../../assets/sam.png";
import stroke1 from "../../assets/stroke1.png";

const Third = () => {
  const items = [
    { img: bulb, alt: "Idea to impact", caption: "Lorem ipsum dolor sit amet consectetur." },
    { img: stock, alt: "Growth metrics", caption: "Lorem ipsum dolor sit amet consectetur." },
    { img: turtle, alt: "Team at work", caption: "Lorem ipsum dolor sit amet consectetur." },
    { img: samosa, alt: "Snack-friendly", caption: "Lorem ipsum dolor sit amet consectetur." },
  ];

  // ✅ No TypeScript here
  const trackRef = useRef(null);
  const [trackW, setTrackW] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const w = trackRef.current.getBoundingClientRect().width;
        setTrackW(w);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Travel exactly one track width, then reverse back to zero
  const travelX = -trackW;

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-14 sm:py-16 mb-18 lg:py-20">
      {/* Heading + subtext */}
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-[28px] sm:text-4xl lg:text-[50px] font-bold text-black"
          style={{ fontFamily: "Calisga, serif" }}
        >
          The Social Turtle Spark
        </h2>
        <p
          className="mt-4 text-gray-700 text-[16px] sm:text-[20px] lg:text-[20px] leading-[100%] tracking-[0%]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          At Social Turtle, we don’t just deliver work—we deliver wow. Every project is crafted with
          care, creativity, and a touch of madness that keeps our clients coming back for more. We
          believe in strong ideas, honest conversations, and lots of chai breaks in between.
        </p>
      </div>

      {/* Mobile: oscillating single-row marquee */}
      {/* Mobile: one-by-one infinite slider */}
<div className="md:hidden max-w-sm mx-auto mt-10 sm:mt-12 lg:mt-16">
  <div className="w-full overflow-hidden relative">
    <motion.div
      className="flex"
      animate={{ x: [0, "-100%", "-200%", "-300%", "0%"] }}
      transition={{
        duration: 16, // total cycle
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {items.map((it, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-full flex flex-col items-center justify-center px-6"
        >
          <img src={it.img} alt={it.alt} className="h-32 w-auto object-contain" />
          <p
            className="mt-4 text-gray-700 text-sm text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {it.caption}
          </p>
        </div>
      ))}
    </motion.div>
  </div>
</div>


      {/* Tablet/Desktop: original grid */}
      <div className="hidden md:block max-w-6xl mx-auto mt-10 sm:mt-12 lg:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 items-start">
          {items.map((it, idx) => (
            <div key={idx} className="text-center">
              <img
                src={it.img}
                alt={it.alt}
                className="mx-auto h-24 w-auto sm:h-28 lg:h-32 object-contain"
              />
              <p
                className="mt-4 text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {it.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marker-highlight warning */}
      <div className="mt-16 sm:mt-20 lg:mt-24">
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="relative mx-auto w-[96%] sm:w-[88%] lg:w-[74%]">
            <img src={stroke1} alt="" className="block w-full max-w-none object-contain" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <p
              className="text-center leading-[1.08] text-[26px] sm:text-[30px] lg:text-[40px] px-3"
              style={{ fontFamily: "Helvetica Neue, sans-serif", fontWeight: 700 }}
            >
              <span className="block">Warning: Working with us may cause</span>
              <span className="block">extreme brand glow-ups.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
