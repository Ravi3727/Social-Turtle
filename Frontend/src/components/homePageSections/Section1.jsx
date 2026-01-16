import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Section1 = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const btnref = useRef(null);
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("");
  const audioUnlocked = useRef(false);

  // 1. Handle Responsive Video Src
  useEffect(() => {
    const updateVideoSrc = () => {
      const src = window.innerWidth < 768
        ? "/videos/social_turtle_website_video.mp4"
        : "/videos/wedsite_video.mp4";
      setVideoSrc(src);
    };
    updateVideoSrc();
    window.addEventListener("resize", updateVideoSrc);
    return () => window.removeEventListener("resize", updateVideoSrc);
  }, []);

  // 2. Video Control Helper
  const controlVideo = (shouldPlay) => {
    if (!videoRef.current) return;
    if (shouldPlay) {
      videoRef.current.muted = !audioUnlocked.current;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          videoRef.current.muted = true;
          videoRef.current.play();
        });
      }
    } else {
      videoRef.current.pause();
    }
  };

  // 3. Animation Logic
  useGSAP(() => {
    if (!videoSrc) return;

    const discoverUsText = btnref.current?.querySelector(".btn-content");

    // Timeline for the transition
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%", // Scroll distance for the animation
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onToggle: (self) => controlVideo(self.isActive),
      },
    });

    tl.to(contentRef.current, {
      y: "-30vh",
      opacity: 0,
      scale: 0.9,
      ease: "power2.inOut"
    }, 0)
      .to(btnref.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        ease: "power1.inOut"
      }, 0)
      .to(videoRef.current, {
        opacity: 1,
        duration: 0.2
      }, 0.1)
      .to(discoverUsText, {
        opacity: 0,
        scale: 0.5,
        duration: 0.2
      }, 0);

  }, { scope: containerRef, dependencies: [videoSrc] });

  // 4. Click Handler: Smoothly scrolls through the ScrollTrigger range
  const handleButtonClick = () => {
    audioUnlocked.current = true;
    controlVideo(true);

    // Get the ScrollTrigger instance for this section
    const st = ScrollTrigger.getById("section-trigger") || ScrollTrigger.getAll().find(s => s.trigger === containerRef.current);

    if (st) {
      gsap.to(window, {
        scrollTo: st.end, // Scroll to the end of the animation phase
        duration: 1.5,
        ease: "power3.inOut"
      });
    }
  };

  // 5. Cursor Logic (Desktop Only)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [curScale, setCurScale] = useState(1);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springBtnX = useSpring(btnX, { stiffness: 150, damping: 15 });
  const springBtnY = useSpring(btnY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (btnref.current) {
        const rect = btnref.current.getBoundingClientRect();
        const isHovered = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
        setCurScale(isHovered ? 4 : 1);
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);




  return (
    <div
      ref={containerRef}
      className="w-full h-screen bg-black relative overflow-hidden"
    >
      {/* 1. Initial Content   */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-32 px-6 text-center pointer-events-none"
      >
        <h1 style={{ fontFamily: "Calisga, serif" }} className="text-[32px] lg:text-[56px] text-white font-extralight leading-tight">
          Grow Your Business with <br />
          <span className="text-[#A0CB3A] font-extrabold">Result-Driven</span> Digital Marketing
        </h1>
        <p className="text-[16px] md:text-[20px] max-w-2xl text-white/80 font-extralight mt-6">
          Boost your online visibility, generate quality leads, and increase ROI with our expert SEO.
        </p>
      </div>

      {/* 2. Expanding Button / Video Container */}
      <motion.div
        ref={btnref}
        style={{
          x: springBtnX,
          y: springBtnY,
          left: "50%",
          top: "75%",
          translateX: "-50%",
          translateY: "-50%",
          position: "absolute"
        }}
        onMouseMove={(e) => {
          if (window.innerWidth < 768) return;
          const rect = btnref.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          btnX.set((e.clientX - centerX) * 0.3);
          btnY.set((e.clientY - centerY) * 0.3);
        }}
        onMouseLeave={() => { btnX.set(0); btnY.set(0); }}
        onClick={handleButtonClick}
        className="z-30 bg-[#A0CB3A] w-[180px] h-[60px] md:w-[240px] md:h-[80px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer"
      >
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
          />
        )}
        <div className="btn-content relative z-10 flex items-center gap-2 text-black font-bold pointer-events-none">
          <span className="text-sm md:text-base">Discover Us</span>
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </motion.div>

      {/* 3. Custom Cursor */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          scale: curScale,
          translateX: "-50%",
          translateY: "-50%"
        }}
        className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-[#A0CB3A] mix-blend-difference rounded-full pointer-events-none z-50"
      />
    </div>
  );
};

export default Section1;