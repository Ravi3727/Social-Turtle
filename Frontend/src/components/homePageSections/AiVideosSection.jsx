import React, { useEffect, useRef,useState } from 'react'
import {motion} from "framer-motion"
import CurvedCarousel from './CurvedCarousel';
const AiVideosSection = () => {

const images = [
    "/images/carousel/img1.png",
    "/images/carousel/img2.png",
    "/images/carousel/img3.png",
    "/images/carousel/img4.png",
    "/images/carousel/img5.png",
    "/images/carousel/img6.png",
 
];
const [photos, setPhotos] = useState(images)
const cenRef = useRef(null);
function getCurveStyle(i, mid) {
  const diff = Math.abs(i - mid);
  // Closer to center => larger scale
  const scale = 1 - diff * 0.15;
  return { scale: Math.max(scale, 0.5) };
}
 

    return (
        <div style={{
                  fontFamily: "Montserrat, sans-serif",
                  
                }} className='min-h-screen flex flex-col gap-6 h-fit w-screen py-10 overflow-clip'>
            <div className='flex flex-col w-screen  font-bold text-[56px] items-center justify-center leading-tight  text-center'>
                <div>Engage Audience with Stunning</div>
                <div style={{
              fontFamily: "Calisga, serif",
           
            }} className='text-[#A0CB3A]'>AI Generated Videos</div>
                  <div className='text-[20px] mt-4 font-extralight w-1/2 '>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.
                </div>
                </div>
           

     {/* <motion.div className='flex relative justify-between items-center gap-6 '  // move left continuously
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}>
        <div ref={cenRef} className='bg-red-400  w-10 h-5 absolute left-1/2 -translate-x-1/2' ></div>
        {images.map((src, i) => {
        const { scale } = getCurveStyle(i, Math.floor(images.length / 2));
        return (
          <motion.img
            key={i}
            src={src}
            alt=""
            id={`img-${i}`}
            className={`w-[250px] h-[500px] flex-shrink-0 rotate-z-${(i - Math.floor(images.length / 2)) * 15}`}
            style={{ scaleY: scale,  transformOrigin: 'center bottom' }} // Anchor scaling from bottom
          />
        );
      })}
      {images.map((src, i) => {
        const { scale} = getCurveStyle(i, Math.floor(images.length / 2));
        return (
          <motion.img
            key={i}
            src={src}
            alt=""
            id={`img-${i}`}
            className="w-[250px] h-[500px] flex-shrink-0"
            style={{ scaleY: scale,  transformOrigin: 'center bottom' }} // Anchor scaling from bottom
          />
        );
      })}
    

     </motion.div> */}
     <div>
<CurvedCarousel images={images} />
     </div>
  
        </div>
    )
}

export default AiVideosSection