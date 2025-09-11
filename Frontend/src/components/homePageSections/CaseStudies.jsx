import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from "framer-motion";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CaseStudies = () => {
  const ref = useRef(null);
  const animRef = useRef(null);
const images = [
  { src: "/images/mountain.png", height: "h-[80vh]" },
  { src: "/images/mountain.png", height: "h-[80vh]" },
  { src: "/images/mountain.png", height: "h-[80vh]" },
  { src: "/images/mountain.png", height: "h-[80vh]" },
];
  gsap.registerPlugin(ScrollTrigger);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef(null);

  // GSAP Animation
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const images = animRef.current.querySelectorAll("img");

      // Initial state
      gsap.set(images, { y: "150%", opacity: 1, scale: 1.3 });

      // Timeline for sequencing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animRef.current,
          start: "center 70% ",
          end: "+=100%", // total scroll distance
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Animate each image one after the other
      images.forEach((img, i) => {
        tl.to(img, {
          y: "0%",
          opacity: 1,
          scale:0.9,
          duration: 1
        }, i); // stagger by index
      });
    }, animRef);

    return () => ctx.revert();
  }, []);

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

      setVisible(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 1000);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      clearTimeout(timeoutRef.current);
    };
  }, [cursorX, cursorY]);

  return (
    <div ref={ref} className='bg-[#F6F6F6] w-screen h-fit relative overflow-clip pt-10 pb-10 flex gap-6 flex-col items-center'>
      <div style={{ fontFamily: "Calisga, serif" }} className='font-bold text-[28px] md:text-[49px]  text-center'>
        Case Studies
      </div>

      {/* Pinned container */}
      <div className='h-[180vh] w-screen   relative '>
        
      <div ref={animRef} className='w-screen   flex flex-col items-center h-screen  overflow-hidden '>
       {images.map((img, i) => (
    <img
      key={i}
      src={img.src}
      className={`w-[100vw]  object-center  rounded-2xl absolute object-cover ${img.height}`}
    />
  ))}

        
      </div>
</div>
      {/* Cursor */}
      <motion.div
        style={{ x: cursorX, y: cursorY, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        className="border-4 border-[#A0CB3A] h-10 w-10 rounded-full absolute top-0 left-0 z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        style={{ x: cursorX, y: cursorY, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="border-4 border-[#A0CB3A] h-2 w-2 rounded-full absolute top-0 left-0 z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default CaseStudies;
