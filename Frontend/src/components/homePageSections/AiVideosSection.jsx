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
                  
                }} className=' flex flex-col gap-6 h-fit w-screen py-10 overflow-clip'>
            <div className='flex flex-col w-screen  font-bold text-[28px] md:text-[56px] items-center justify-center leading-tight  text-center'>
                <div>Engage Audience with Stunning</div>
                <div style={{
              fontFamily: "Calisga, serif",
           
            }} className='text-[#A0CB3A]'>AI Generated Videos</div>
                  <div className='text-[20px] mt-4 font-extralight w-1/2 md:block hidden '>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.
                </div>
                </div>
           

    
   
<CurvedCarousel images={images} />
 
  
        </div>
    )
}

export default AiVideosSection