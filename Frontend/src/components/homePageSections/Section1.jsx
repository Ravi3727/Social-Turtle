import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react"; // install lucide-react if not already
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion"// install framer-motion if not already
const Section1 = () => {
    const ref = useRef(null);
    const btnref = useRef(null);
    const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
 const [visible, setVisible] = useState(true);
 const [curScale, setCurScale] = useState(1)
 
  const timeoutRef = useRef(null);

useEffect(() => {
  const moveCursor = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      cursorX.set(e.clientX - rect.left);
      cursorY.set(e.clientY - rect.top);
    }
    if (btnref.current) {
  const hoveredEl = document.elementFromPoint(e.clientX, e.clientY);
  setCurScale(btnref.current.contains(hoveredEl) ? 6 : 1);
}

  };

  window.addEventListener("mousemove", moveCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
    clearTimeout(timeoutRef.current); // cleanup timer
  };
}, [cursorX, cursorY]);

  return (
    <div ref={ref}  className="w-screen  min-h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden px-6 py-10">
      {/* Content */}
      <div className="text-center  z-20  text-white flex flex-col gap-6 w-4/5">
        {/* Headline */}
        <h1 style={{
              fontFamily: "Calisga, serif",
           
            }} className="text-[56px] md:text-6xl font-semibold leading-snug">
          Grow Your Business with{" "}
          <span className="text-[#A0CB3A]">Result-Driven</span> Digital
          Marketing Services
        </h1>

        {/* Subtext */}
        <p  style={{
                  fontFamily: "Montserrat, sans-serif",
                  
                }} className="text-[#FFFFFF] text-[20px] font-extralight  leading-tight">
          Boost your online visibility, generate quality leads, and increase ROI
          with our expert SEO, social media, and paid marketing strategies.
        </p>

        {/* CTA Button */}
        <div style={{
                  fontFamily: "Montserrat, sans-serif",
                  
                }} className="flex justify-center mt-3 text-[24px]">
          <motion.button ref={btnref} whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }} className="flex  items-center gap-2 bg-[#A0CB3A] justify-center  text-black font-medium  w-[246px] h-[86px] text-center rounded-full hover:bg-[#8fb832] transition">
            Discover Us <ArrowUpRight className="w-6 h-6" />
          </motion.button>
        </div>
       
              
      </div>

      {/* Turtle illustration (absolute positioned bottom-right) */}
      <img
        src="/images/turtle.png" // replace with your turtle image path
        alt="Turtle illustration"
        className="absolute -bottom-32 right-0 w-64 md:w-96 opacity-90"
      />
     {/* Inner filled cursor */}
<motion.div
  style={{ 
    x: cursorX, 
    y: cursorY, 
    
    scale: curScale, 
    borderRadius: curScale === 5 ? "0%" : "50%" 
  }}
  transition={{ type: "spring", stiffness: 50, damping: 10 }}
  className="bg-[#A0CB3A] h-7 w-7 mix-blend-difference flex items-center justify-center absolute top-0 left-0 z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
/>

{/* Outer ring */}
<motion.div
  style={{ 
    x: cursorX, 
    y: cursorY, 

    scale: curScale === 5 ? 0 : 1,  
    borderRadius: curScale === 5 ? "0%" : "50%" 
  }}
  transition={{ type: "spring", stiffness: 200, damping: 30 }}
  className="border-2 cursor-ring  border-[#A0CB3A] h-14 w-14 flex items-center justify-center absolute top-0 left-0 z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2"
/>

      
    </div>
  );
};

export default Section1;
