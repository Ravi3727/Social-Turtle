import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion"
const CaseStudies = () => {
    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,         // track this section
    offset: ["start end", "end start"], 
  });
    const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
 const [visible, setVisible] = useState(true);
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

    setVisible(true);

    // reset hide timer
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 1000); // 1 second of inactivity
  };

  window.addEventListener("mousemove", moveCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
    clearTimeout(timeoutRef.current); // cleanup timer
  };
}, [cursorX, cursorY]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <div ref={ref}  className='bg-[#F6F6F6] w-screen min-h-[70vh] relative pt-10 pb-10  flex  gap-6 flex-col items-center'>
        <div style={{
              fontFamily: "Calisga, serif",
           
            }} className='font-bold text-[49px] text-center'>Case Studies</div>
        <motion.img  style={{ scale }}  src="/images/mountain.png" className='w-[95%] h-[554px] mt-6 object-cover' alt="" />
      <motion.div
  style={{ x: cursorX, y: cursorY, opacity: visible ? 1 : 0, }}
  transition={{ type: "spring", stiffness: 50, damping: 10 }}
  className="border-4 border-[#A0CB3A] h-10 w-10 rounded-full flex items-center justify-center absolute top-0 left-0 z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
>
 
</motion.div>
      <motion.div
  style={{ x: cursorX, y: cursorY, opacity: visible ? 1 : 0, }}
  transition={{ type: "spring", stiffness: 200, damping: 30 }}
  className="border-4 border-[#A0CB3A] h-2 w-2 rounded-full flex items-center justify-center absolute top-0 left-0 z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
>
 
</motion.div>
 </div>
  )
}

export default CaseStudies