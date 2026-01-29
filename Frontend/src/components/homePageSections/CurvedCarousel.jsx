import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CurvedVideoCarousel = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const indexRef = useRef(0);
  const animatingRef = useRef(false);

  const videos = [
    "/videos/carousel/1.mp4", "/videos/carousel/2.mp4", "/videos/carousel/3.mp4",
    "/videos/carousel/5.mp4", "/videos/carousel/6.mp4", "/videos/carousel/7.mp4",
    "/videos/carousel/8.mp4", "/videos/carousel/9.mp4", "/videos/carousel/10.mp4",
    "/videos/carousel/11.mp4", "/videos/carousel/12.mp4",
  ];

  const total = videos.length;
  const VISIBLE_RANGE = 3; // Reduced slightly for better focus, adjust as needed
  const RADIUS = 1200;     // Reduced radius for a more manageable curve
  const ANGLE_STEP = 18;   // Increased angle for better spacing

  const layout = (animate = true) => {
    itemRefs.current.forEach((el, i) => {
      let pos = i - indexRef.current;

      // Circular Math: find the shortest path
      if (pos > total / 2) pos -= total;
      if (pos < -total / 2) pos += total;

      const isVisible = Math.abs(pos) <= VISIBLE_RANGE;

      // CURVE MATH
      const angle = pos * ANGLE_STEP;
      const rad = (angle * Math.PI) / 180;
      const x = Math.sin(rad) * RADIUS;
      const z = Math.cos(rad) * RADIUS - RADIUS;
      const rotY = -angle;

      // Visual styling based on distance from center
      const dist = Math.abs(pos);
      const scale = isVisible ? 1 - dist * 0.1 : 0.5;
      const opacity = isVisible ? 1 - (dist / (VISIBLE_RANGE + 1)) : 0;

      if (!isVisible) {
        // INSTANT HIDE: If it's out of range, move it immediately without animation
        gsap.set(el, {
          x,
          z,
          rotateY: rotY,
          scale,
          autoAlpha: 0, // autoAlpha handles visibility:hidden and opacity:0
          zIndex: 0,
        });
      } else {
        // SMOOTH ANIMATION: Only animate items that are actually visible
        gsap.to(el, {
          x,
          z,
          rotateY: rotY,
          scale,
          autoAlpha: opacity,
          zIndex: Math.round(100 - dist * 10),
          duration: animate ? 0.8 : 0,
          ease: "power3.out",
        });
      }
    });
  };

  const next = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    indexRef.current = (indexRef.current + 1) % total;
    layout(true);
    setTimeout(() => (animatingRef.current = false), 800);
  };

  useEffect(() => {
    layout(false);
    const interval = setInterval(next, 3000); // Slower interval for better UX
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-[650px] flex items-center justify-center"
        style={{
          perspective: "1500px", // Reduced perspective for more natural depth
          transformStyle: "preserve-3d",
        }}
      >
        {videos.map((video, i) => (
          <div
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            className="absolute w-[370px] h-[500px]"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurvedVideoCarousel;