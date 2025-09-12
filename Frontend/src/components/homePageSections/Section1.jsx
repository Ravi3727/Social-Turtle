import React, { use, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react"; // install lucide-react if not already
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion"// install framer-motion if not already
const Section1 = () => {
    const ref = useRef(null);
    const btnref = useRef(null);
    const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
 const [visible, setVisible] = useState(true);

 const [curScale, setCurScale] = useState(1)

const { scrollYProgress } = useScroll({
    target: ref,    
    offset: ["start end", "end start"], 
  });

  const bottomPos = useTransform(scrollYProgress, [0.5, 0.6], ['10%', '0%']); 


const hei = useTransform(scrollYProgress, [0.5, 0.6], ["0px", `${Math.max(window.innerHeight, 800)}px`
]);

const wid = useTransform(scrollYProgress, [0.5, 0.6], ['0vw','100vw']);
const round=useTransform(scrollYProgress, [0.5, 0.6], ['100%','0']);
const clipPath = useTransform(
  scrollYProgress,
  [0.5, 0.6],
 [ 'polygon(50% 5%, 65% 40%, 95% 50%, 65% 60%, 50% 95%, 35% 60%, 5% 50%, 35% 40%)', 
   'polygon(0% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%)']

);




const textColor = useTransform(scrollYProgress, [0.4,0.58], ["#ffffff", "#000000"]);
const textColorGreen = useTransform(scrollYProgress, [0.4,0.58], ["#A0CB3A", "#000000"]);

  const timeoutRef = useRef(null);
  const x = useMotionValue(0);
const y = useMotionValue(0);
const scale = useMotionValue(1);

const springX = useSpring(x, { stiffness: 100, damping: 10 });
const springY = useSpring(y, { stiffness: 100, damping: 10 });
const springScale = useSpring(scale, { stiffness: 200, damping: 15 });

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

  
const smoothScrollTo = (targetY, duration = 2000) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-in-out curve
    const ease =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
};

    


  return (
    
    <motion.div ref={ref}  style={{  color: textColor }}  className={`w-screen  bg-black min-h-[800px] h-screen  cursor-none  flex flex-col justify-center items-center relative overflow-hidden px-6 `}>
    
      <div className="text-center  z-40  h-fit sm:top-[10%] top-[15%] flex flex-col items-center gap-6 w-3/5  absolute md:w-full lg:w-4/5">
        {/* Headline */}
        <motion.h1 style={{
              fontFamily: "Calisga, serif",
           color: textColor, 
            }} className= {`text-[28px] md:text-[56px]  font-semibold leading-snug `}>
          Grow Your Business with{" "}
          <motion.span style={{
              fontFamily: "Calisga, serif",
           color: textColorGreen, 
            }}>Result-Driven</motion.span> Digital
          Marketing Services
        </motion.h1>

        {/* Subtext */}
        <p  style={{
                  fontFamily: "Montserrat, sans-serif",
                     color: textColor, 
                }} className={`text-[14px] md:text-[20px] md:w-2/3 font-extralight  leading-tight`}>
          Boost your online visibility, generate quality leads, and increase ROI
          with our expert SEO, social media, and paid marketing strategies.
        </p>

        {/* CTA Button */}
        
       
              
      </div>
    
 <div style={{
                  fontFamily: "Montserrat, sans-serif",
                  
                }} className=" relative h-screen w-screen min-h-[800px]  z-10       text-[20px]  md:text-[24px]">
                 
                 <motion.div 
                 style={{
          width: wid,
          height: hei,
          bottom: bottomPos, 
          borderRadius: round,
          clipPath: clipPath,
        
        }}
                className="absolute   left-1/2 -translate-x-1/2 z-10 bg-white"
            />
      
          <motion.button ref={btnref}   style={{
    x: springX,
    y: springY,
    
    // ✅ Framer controls scale now
  }}
 
   
  whileTap={{ scale: 2.5 }}  // ✅ Works now
 transition={{ duration: 0.3 }}
  onMouseMove={(e) => {
    const rect = btnref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX / 3);
    y.set(offsetY / 3);
  }}
onClick={() => {
  if (ref.current) {
    const targetY =  ref.current.offsetHeight; 
    smoothScrollTo(targetY, 2000); // scroll whole section in 2s
  }
}}
  
  onMouseLeave={() => {
    // Reset on leave
    btnref.current.style.transform = "translate(0px, 0px) scale(1)";
  }} className="flex  items-center gap-2  bottom-[20%] left-1/2 -translate-x-1/2 bg-[#A0CB3A] justify-center absolute z-20 px-2  text-black font-medium  md:w-[246px] md:h-[86px] sm:h-[95px] sm:w-[200px] h-[70px] w-[150px] rounded-4xl text-center sm:rounded-full hover:bg-[#8fb832] transition">
            Discover Us <ArrowUpRight className="w-6 h-6" />
          </motion.button>
        </div>
      





      {/* Turtle illustration (absolute positioned bottom-right) */}
      <img
        src={"/images/turtle.png"} 
        alt="Turtle illustration"
        className={`absolute -bottom-[15%] -right-[10%]  z-0  md:right-0  w-72 sm:w-80 lg:w-96 opacity-90`}
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
  className="bg-[#A0CB3A] h-7 w-7 mix-blend-difference flex items-center justify-center absolute top-0 left-0 z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2"
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
  
    </motion.div>
  );
};

export default Section1;
