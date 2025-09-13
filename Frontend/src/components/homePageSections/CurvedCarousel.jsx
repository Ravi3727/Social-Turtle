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
    const radius = 4000; // bigger radius for full-screen coverage
    const angle = position * 5;
    const radians = (angle * Math.PI) / 180;

    const x = Math.sin(radians) * radius+10;
    const z = Math.cos(radians) * radius - radius*1.5;
    const rotY = -angle;

    const distance = Math.abs(position);

    // ✅ Center is smallest, sides get larger
    let scale = 0.8 + Math.min(distance * 0.10, 0.8);
    let opacity = 1;

    // hide images going too far
    if (distance > 7) {
      opacity = 0; 
      scale = 0.2;
    }

    let zIndex = 50 - distance;

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotY}deg) scaleY(${scale})`,
      zIndex,
      opacity,
         transition: isTransitioning
      ? "transform 0.8s cubic-bezier(0.23,1,0.32,1), opacity 0.8s cubic-bezier(0.23,1,0.32,1)"
      : "none",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",

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
    }, 500);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <div  className="w-screen h-fit  flex items-start text-white overflow-x-hidden relative">
     
        <div
          ref={containerRef}
          className="relative flex scroll-smooth items-center justify-center overflow-y-clip w-full min-h-[606px] h-full"
          style={{
            perspective: "6000px",
            perspectiveOrigin: "center 50%",
                transformStyle: "preserve-3d",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute w-[290px] md:w-[300px]  h-[600px] cursor-pointer left-1/2  -translate-x-1/2 "
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
  );
};

export default CurvedImageCarousel;
