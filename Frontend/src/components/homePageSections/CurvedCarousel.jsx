import React, { useState, useEffect, useRef } from "react";

const CurvedImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  const images = [
    "/images/carousel/img1.png",
    "/images/carousel/img2.png",
    "/images/carousel/img3.png",
    "/images/carousel/img4.png",
    "/images/carousel/img5.png",
    "/images/carousel/img6.png",
    "/images/carousel/img3.png",
    "/images/carousel/img4.png",
    "/images/carousel/img5.png",
    "/images/carousel/img6.png",
  ];

  const totalImages = images.length;

  const getImageStyle = (index) => {
    // relative position using modulo → infinite loop
    let position = (index - currentIndex) % totalImages;
    if (position < -Math.floor(totalImages / 2)) {
      position += totalImages;
    }
    if (position > Math.floor(totalImages / 2)) {
      position -= totalImages;
    }

    // curve parameters
    const radius = 1000; // bigger radius for full-screen coverage
    const angle = position * 25;
    const radians = (angle * Math.PI) / 180;

    const x = Math.sin(radians) * radius+10;
    const z = Math.cos(radians) * radius - radius;
    const rotY = -angle;

    const distance = Math.abs(position);

    // ✅ Center is smallest, sides get larger
    let scale = 0.8 + Math.min(distance * 0.15, 0.8);
    let opacity = 1;

    // hide images going too far
    if (distance > 3) {
      opacity = 0; 
      scale = 0.2;
    }

    let zIndex = 50 - distance;

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotY}deg) scaleY(${scale})`,
      zIndex,
      opacity,
      transition: isTransitioning
        ? "all 0.8s cubic-bezier(0.23,1,0.32,1)"
        : "none",
    };
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalImages);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 200);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <div className="w-screen h-[60vh] md:h-[80vh]  text-white overflow-hidden relative">
      <div className="flex items-center justify-center w-full h-full">
        <div
          ref={containerRef}
          className="relative  flex gap-2 w-full h-full"
          style={{
            perspective: "2500px",
            perspectiveOrigin: "center 50%",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute w-[300px] h-[604px] cursor-pointer left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                ...getImageStyle(index),
                transformStyle: "preserve-3d",
              }}
            >
              <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border border-white/20">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default CurvedImageCarousel;
