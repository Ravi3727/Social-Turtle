// import React, { use, useEffect, useRef, useState } from "react";
// import { ArrowRight, ArrowUpRight } from "lucide-react"; // install lucide-react if not already
// import {
//   motion,
//   useMotionValue,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "framer-motion"; // install framer-motion if not already

// const Section1 = () => {
//   const ref = useRef(null);
//   const btnref = useRef(null);
//   const cursorX = useMotionValue(0);
//   const cursorY = useMotionValue(0);
//   const [anime, setAnime] = useState(false);

//   const [visible, setVisible] = useState(true);

//   const [curScale, setCurScale] = useState(1);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const bottomPos = useTransform(scrollYProgress, [0.5, 0.6], ["10%", "0%"]);

//   const hei = useTransform(
//     scrollYProgress,
//     [0.5, 0.6],
//     ["0px", `${Math.max(window.innerHeight, 800)}px`]
//   );

//   const wid = useTransform(scrollYProgress, [0.5, 0.6], ["0vw", "100vw"]);
//   const round = useTransform(scrollYProgress, [0.5, 0.6], ["100%", "0"]);
//   const clipPath = useTransform(
//     scrollYProgress,
//     [0.5, 0.6],
//     [
//       "polygon(50% 5%, 65% 40%, 95% 50%, 65% 60%, 50% 95%, 35% 60%, 5% 50%, 35% 40%)",
//       "polygon(0% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%)",
//     ]
//   );
//   const textColor = useTransform(
//     scrollYProgress,
//     [0.4, 0.58],
//     ["#ffffff", "#000000"]
//   );
//   const textColorGreen = useTransform(
//     scrollYProgress,
//     [0.4, 0.58],
//     ["#A0CB3A", "#000000"]
//   );

//   const timeoutRef = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const scale = useMotionValue(1);

//   const springX = useSpring(x, { stiffness: 100, damping: 10 });
//   const springY = useSpring(y, { stiffness: 100, damping: 10 });
//   const springScale = useSpring(scale, { stiffness: 200, damping: 15 });

//   useEffect(() => {
//     const moveCursor = (e) => {
//       const rect = ref.current?.getBoundingClientRect();
//       if (!rect) return;

//       if (
//         e.clientX >= rect.left &&
//         e.clientX <= rect.right &&
//         e.clientY >= rect.top &&
//         e.clientY <= rect.bottom
//       ) {
//         cursorX.set(e.clientX - rect.left);
//         cursorY.set(e.clientY - rect.top);
//       }
//       if (btnref.current) {
//         const hoveredEl = document.elementFromPoint(e.clientX, e.clientY);
//         setCurScale(btnref.current.contains(hoveredEl) ? 6 : 1);
//       }
//     };

//     window.addEventListener("mousemove", moveCursor);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       clearTimeout(timeoutRef.current); // cleanup timer
//     };
//   }, [cursorX, cursorY]);

//   const smoothScrollTo = (targetY, duration = 3000) => {
//     const startY = window.scrollY;
//     const distance = targetY - startY;
//     const startTime = performance.now();

//     function step(currentTime) {
//       const elapsed = currentTime - startTime;
//       const progress = Math.min(elapsed / duration, 1);

//       // Easing function (ease-in-out)
//       const ease =
//         progress < 0.5
//           ? 2 * progress * progress
//           : 1 - Math.pow(-2 * progress + 2, 3) / 2;

//       window.scrollTo(0, startY + distance * ease);

//       if (progress < 1) {
//         requestAnimationFrame(step);
//       }
//     }

//     requestAnimationFrame(step);
//   };

//   useEffect(() => {
//     if (anime) {
//       smoothScrollTo(window.innerHeight, 3000); // 3 seconds
//       setAnime(false);
//     }
//   }, [anime]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ color: textColor }}
//       className={`w-screen  bg-black min-h-[800px] h-screen  cursor-none  flex flex-col justify-center items-center relative overflow-hidden px-6 `}
//     >
//       <div className="text-center  z-40  h-fit sm:top-[10%] top-[15%] flex flex-col items-center gap-6 w-3/5  absolute md:w-full lg:w-4/5">
//         {/* Headline */}
//         <motion.h1
//           style={{
//             fontFamily: "Calisga, serif",
//             color: textColor,
//           }}
//           className={`text-[28px] md:text-[56px]  font-normal leading-snug `}
//         >
//           Grow Your Business with{" "}
//           <motion.span
//             style={{
//               fontFamily: "Calisga, serif",
//               color: textColorGreen,
//             }}
//           >
//             Result-Driven
//           </motion.span>{" "}
//           Digital Marketing Services
//         </motion.h1>

//         {/* Subtext */}

//         <p
//           style={{
//             fontFamily: "Montserrat, sans-serif",
//             color: textColor,
//           }}
//           className={`text-[14px] md:text-[20px] md:w-2/3 font-extralight  leading-tight`}
//         >
//           Boost your online visibility, generate quality leads, and increase ROI
//           with our expert SEO, social media, and paid marketing strategies.
//         </p>

//         {/* CTA Button */}
//       </div>

//       <div
//         style={{
//           fontFamily: "Montserrat, sans-serif",
//         }}
//         className=" relative h-screen w-screen min-h-[800px]  z-10       text-[20px]  md:text-[24px]"
//       >
//         <motion.div
//           style={{
//             width: wid,
//             height: hei,
//             bottom: bottomPos,
//             borderRadius: round,
//             clipPath: clipPath,
//           }}
//           className="absolute   left-1/2 -translate-x-1/2 z-10 bg-white"
//         />

//         <motion.button
//           ref={btnref}
//           style={{
//             x: springX,
//             y: springY,

//             // ✅ Framer controls scale now
//           }}
//           whileTap={{ scale: 2.5 }} // ✅ Works now
//           transition={{ duration: 0.3 }}
//           onMouseMove={(e) => {
//             const rect = btnref.current.getBoundingClientRect();
//             const offsetX = e.clientX - rect.left - rect.width / 2;
//             const offsetY = e.clientY - rect.top - rect.height / 2;
//             x.set(offsetX / 3);
//             y.set(offsetY / 3);
//           }}
//           onClick={() => {
//             if (ref.current) {
//               const targetY = ref.current.offsetHeight;
//               smoothScrollTo(targetY, 2000); // scroll whole section in 2s
//             }
//           }}
//           onMouseLeave={() => {
//             // Reset on leave
//             btnref.current.style.transform = "translate(0px, 0px) scale(1)";
//           }}
//           className="flex  items-center gap-2  bottom-[20%] left-1/2 -translate-x-1/2 bg-[#A0CB3A] justify-center absolute z-20 px-2  text-black sm:font-medium sm:w-[246px] sm:h-[86px] h-[65px] w-[180px] rounded-4xl text-center sm:rounded-full hover:bg-[#8fb832] transition"
//         >
//           Discover Us <ArrowUpRight className="w-6 h-6" />
//         </motion.button>
//       </div>

//       {/* Turtle illustration (absolute positioned bottom-right) */}

//       <img
//         src={"/images/turtle.png"}
//         alt="Turtle illustration"
//         className={`absolute -bottom-[15%] -right-[10%]  z-0  md:right-0  w-72 sm:w-80 lg:w-96 opacity-90`}
//       />

//       {/* Inner filled cursor */}
//       <motion.div
//         style={{
//           x: cursorX,
//           y: cursorY,

//           scale: curScale,
//           borderRadius: curScale === 5 ? "0%" : "50%",
//         }}
//         transition={{ type: "spring", stiffness: 50, damping: 10 }}
//         className="bg-[#A0CB3A] h-7 w-7 mix-blend-difference flex items-center justify-center absolute top-0 left-0 z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2"
//       />

//       {/* Outer ring */}
//       <motion.div
//         style={{
//           x: cursorX,
//           y: cursorY,

//           scale: curScale === 5 ? 0 : 1,
//           borderRadius: curScale === 5 ? "0%" : "50%",
//         }}
//         transition={{ type: "spring", stiffness: 200, damping: 30 }}
//         className="border-2 cursor-ring  border-[#A0CB3A] h-14 w-14 flex items-center justify-center absolute top-0 left-0 z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2"
//       />
//     </motion.div>
//   );
// };

// export default Section1;
import React, { useEffect, useRef, useState } from "react";
import {  ArrowUpRight } from "lucide-react"; // install lucide-react if not already
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Section1 = () => {
  const ref = useRef(null);
  const greRef = useRef(null);
  const btnref = useRef(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
const isAnimatingRef = useRef(false);

 
useEffect(() => {
  const handleResize = () => {
    window.location.reload();
// re-evaluates start/end positions
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  const [curScale, setCurScale] = useState(1);

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
useGSAP(() => {

const discoverUs=btnref.current?.querySelector("div");
  
     let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ref.current,
      start: "top -10%",
      end: "bottom 60%",
      scrub: true,
   
         onUpdate: () => {
      isAnimatingRef.current = true; // mark animation active
    },
  
    onEnterBack: () => {
      isAnimatingRef.current = true;
    },
    onLeaveBack: () => {
      isAnimatingRef.current = false;
    },
    },
  });

  tl.to([btnref.current], {
    width: "100%",
    height: "100%",
    borderRadius: "0px",
    top: 0,
    left: 0,
  x:0,y:0,
   ease: "power1.inOut"

  }).to(
    [ref.current,greRef.current],
    {
      color: "#000000",
      ease: "power2.inOut",
    },
    0 // 👈 run at same time as first tween
  ).to([discoverUs], {
    bottom: "20%",
  },0);
}, []);

  // const bottomPos = useTransform(scrollYProgress, [0.5, 0.6], ["10%", "0%"]);

  // const hei = useTransform(
  //   scrollYProgress,
  //   [0.5, 0.6],
  //   ["0px", `${Math.max(window.innerHeight, 800)}px`]
  // );

  // const wid = useTransform(scrollYProgress, [0.5, 0.6], ["0vw", "100vw"]);
  // const round = useTransform(scrollYProgress, [0.5, 0.6], ["100%", "0"]);
  // const clipPath = useTransform(
  //   scrollYProgress,
  //   [0.5, 0.6],
  //   [
  //     "polygon(50% 5%, 65% 40%, 95% 50%, 65% 60%, 50% 95%, 35% 60%, 5% 50%, 35% 40%)",
  //     "polygon(0% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%)",
  //   ]
  // );
  // const textColor = useTransform(
  //   scrollYProgress,
  //   [0.4, 0.58],
  //   ["#ffffff", "#000000"]
  // );
  // const textColorGreen = useTransform(
  //   scrollYProgress,
  //   [0.4, 0.58],
  //   ["#A0CB3A", "#000000"]
  // );

  const timeoutRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  const springX = useSpring(x, { stiffness: 100, damping: 10 });
  const springY = useSpring(y, { stiffness: 100, damping: 10 });
  const springScale = useSpring(scale, { stiffness: 200, damping: 15 });

  useEffect(() => {
    const moveCursor = (e) => {
     // ✅ skip updates during GSAP animation

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
    <motion.div
      ref={ref}
     
      className={`w-screen text-white   bg-black  h-screen  cursor-none  flex flex-col justify-between items-center relative overflow-hidden  `}
    >
      

      <div
        style={{
          fontFamily: "Montserrat, sans-serif",
        }}
        className=" relative h-screen  w-screen   z-10 flex  justify-between   flex-col  items-center     text-[20px]  md:text-[24px]"
      >
       <div className="text-center  z-50     flex flex-col items-center gap-6 pt-10 w-full px-2   ">
        {/* Headline */}
        <motion.h1
          style={{
            fontFamily: "Calisga, serif",
         
          }}
          className={`text-[28px] lg:text-[56px]  font-extralight leading-tight `}
        >
          Grow Your Business with{" "}
          <motion.span
          ref={greRef}
            style={{
              fontFamily: "Calisga, serif",
            
            }} className="text-[#A0CB3A] font-extrabold"
          >
            Result-Driven
          </motion.span>{" "}
          Digital Marketing Services
        </motion.h1>

        {/* Subtext */}

        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
           
          }}
          className={`text-[14px] md:text-[20px] md:w-2/3 font-extralight  leading-tight`}
        >
          Boost your online visibility, generate quality leads, and increase ROI
          with our expert SEO, social media, and paid marketing strategies.
        </p>

        {/* CTA Button */}
      </div>
       
        <motion.button
  ref={btnref}
  style={{ x: springX, y: springY }}
  whileTap={{ scale: 1.1 }}
  transition={{ duration: 0.3 }}
  onMouseMove={(e) => {
     if (isAnimatingRef.current) return; 
    const rect = btnref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX / 3);
    y.set(offsetY / 3);
  }}
  onClick={() => {
    x.set(0);
  y.set(0);
    gsap.to(window, {
       scrollTo: { y: window.innerHeight, autoKill: true }, // ✅ must be an object
     duration: 2, // 2 seconds
      ease: "power2.inOut",
      // reset flag after scroll
    });
  }}
  className="flex items-center gap-2 bottom-[20%]    bg-[#A0CB3A] justify-center absolute z-40 px-2 text-black sm:font-medium sm:w-[246px] sm:h-[86px] h-[65px] w-[180px] rounded-full text-center hover:bg-[#8fb832] transition"
>
<div className="flex absolute items-center bottom-1/2 translate-y-1/2 gap-1">
    Discover Us <ArrowUpRight className="w-6 h-6" />
</div>
</motion.button>

      </div>

      {/* Turtle illustration (absolute positioned bottom-right) */}

      <img
        src={"/images/turtle.png"}
        alt="Turtle illustration"
        className={`absolute -bottom-20 -right-[10%]  z-0  md:right-0  w-56  sm:w-80 lg:w-96 opacity-90`}
      />

      {/* Inner filled cursor */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,

          scale: curScale,
          borderRadius: curScale === 5 ? "0%" : "50%",
        }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        className="bg-[#A0CB3A] h-7 w-7 mix-blend-difference flex items-center justify-center absolute top-0 left-0 z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />

      {/* Outer ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,

          scale: curScale === 5 ? 0 : 1,
          borderRadius: curScale === 5 ? "0%" : "50%",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="border-2 cursor-ring  border-[#A0CB3A] h-14 w-14 flex items-center justify-center absolute top-0 left-0 z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
};

export default Section1;