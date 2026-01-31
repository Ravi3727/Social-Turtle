import React from "react";
import { motion } from "framer-motion";
import groupImage from "../../assets/sidepng.png";
import { useRef, useState, useLayoutEffect } from "react";

const Second = () => {
  const slideRef = useRef(null);
  const [slideW, setSlideW] = useState(0);

  useLayoutEffect(() => {
    const update = () => {
      if (slideRef.current)
        setSlideW(slideRef.current.getBoundingClientRect().width);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // How many slides fill the viewport with no gaps
  const slidesPerTrack = 4; // adjust based on image aspect and desired density
  const slides = new Array(slidesPerTrack).fill(0);
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Text Section */}
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="text-[28px] sm:text-4xl lg:text-[52px] font-bold text-black mb-4 leading-[100%] tracking-[0%]"
            style={{ fontFamily: "Calisga, serif", fontWeight: 400 }}
          >
            Think Deep, <br /> Move Smart
          </h2>
          <p
            className="text-gray-700 text-[16px] sm:text-[20px] lg:text-[20px] mt-10 max-w-3xl mx-auto  leading-[100%] tracking-[0%]"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
          >
            We're Social Turtle — a creative marketing and advertising agency
            that blends strategy with storytelling. We don't just market brands;
            we connect them with the right audience in meaningful, lasting ways.
            From planning to execution, we craft digital experiences that stick.
          </p>
          <p
            className="text-gray-700 text-[16px] sm:text-[20px] lg:text-[20px] max-w-3xl mx-auto  leading-[100%] tracking-[0%] mt-4"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
          >
            Fueled by big ideas, bolder chai, and creative chaos, our team
            across Bengaluru, Delhi, and Mumbai turns thoughts into impact and
            campaigns into conversations. At Social Turtle, we're not just in
            the race — we're setting the pace.
          </p>
        </div>
      </div>

      {/* Infinite Oscillating Motion Carousel */}
      {/* Full-width, gapless, oscillating rail */}
      {/* Infinite one-direction image rail */}
      <div className="w-screen overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25, // speed (increase = slower)
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }}
        >
          {[...slides, ...slides].map((_, i) => (
            <img
              key={i}
              src={groupImage}
              alt="carousel item"
              className="w-screen h-[200px] sm:h-[260px] lg:h-[280px] object-cover flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Second;
