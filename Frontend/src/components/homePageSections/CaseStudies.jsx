import React, { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

import Cards from "./Cards";

const CaseStudies = () => {
  const ref = useRef(null);
  
 

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const timeoutRef = useRef(null);

 

  // Cursor
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

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        cursorX.set(0);
        cursorY.set(0);
      }, 1000);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      clearTimeout(timeoutRef.current);
    };
  }, [cursorX, cursorY]);

  return (
    <div
      ref={ref}
      className="bg-[#F6F6F6] w-screen h-fit relative pt-10 flex gap-6 flex-col items-center"
    >
      <div
        style={{ fontFamily: "Calisga, serif" }}
        className="font-bold text-[28px] md:text-[49px] text-center"
      >
        Case Studies
      </div>

     <Cards/>

      {/* Cursor */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        className="border-4 border-[#A0CB3A] h-10 w-10 rounded-full absolute top-0 left-0 z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="border-4 border-[#A0CB3A] h-2 w-2 rounded-full absolute top-0 left-0 z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default CaseStudies;