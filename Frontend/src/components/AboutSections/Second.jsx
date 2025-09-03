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
            className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-black mb-4 leading-[100%] tracking-[0%]"
            style={{ fontFamily: "Calisga, serif", fontWeight: 400 }}
        >
            Think Deep, Move Smart
        </h2>
          <p
            className="text-gray-700 text-sm sm:text-base lg:text-lg mt-10 max-w-3xl mx-auto leading-[100%]"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight:400 }}
          >
            We're Social Turtle — a creative marketing and advertising agency
            that blends strategy with storytelling. We don't just market brands;
            we connect them with the right audience in meaningful, lasting ways.
            From planning to execution, we craft digital experiences that stick.
          </p>
          <p
            className="text-gray-700 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-[100%] mt-4"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight:400 }}
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
      <div className="w-screen overflow-hidden">
        <motion.div
          className="flex w-max"
          // Move left by exactly one full track width, then reverse back
          animate={{ x: [0, slideW * -slidesPerTrack, 0] }}
          transition={{
            duration: 18, // total cycle time
            ease: "easeInOut",
            repeat: Infinity, // loop forever
            repeatType: "reverse", // true oscillation (left <-> right)
            repeatDelay: 0.6, // pause at each end
          }}
          style={{ willChange: "transform" }}
        >
          {/* Track A */}
          <div className="flex">
            {slides.map((_, i) => (
              <img
                ref={i === 0 ? slideRef : null}
                key={`A-${i}`}
                src={groupImage}
                alt="carousel item"
                className="w-screen h-[200px] sm:h-[260px] lg:h-[280px] object-cover flex-shrink-0"
              />
            ))}
          </div>

          {/* Track B (duplicate, ensures no gaps) */}
          <div className="flex">
            {slides.map((_, i) => (
              <img
                key={`B-${i}`}
                src={groupImage}
                alt="carousel item"
                className="w-screen h-[200px] sm:h-[260px] lg:h-[280px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Second;
