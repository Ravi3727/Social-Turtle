import React, { useEffect, useRef, useState } from 'react'
import CurvedVideoCarousel from './CurvedCarousel';
const AiVideosSection = () => {

  const cenRef = useRef(null);
  function getCurveStyle(i, mid) {
    const diff = Math.abs(i - mid);
    // Closer to center => larger scale₹
    const scale = 1 - diff * 0.15;
    return { scale: Math.max(scale, 0.5) };
  }


  return (
    <div style={{
      fontFamily: "Montserrat, sans-serif",

    }} className=' flex flex-col gap-6 h-fit w-screen py-10 overflow-clip'>
      <div className='flex flex-col w-screen  font-bold text-[28px] md:text-[56px] items-center justify-center leading-tight  text-center'>
        <div>Turn Heads with AI-Powered</div>
        <div style={{
          fontFamily: "Calisga, serif",

        }} className='text-[#A0CB3A] '>Visual Stories</div>
        <div className='text-[20px] mt-4 font-extralight w-1/2 md:block hidden '>
          We create AI-generated videos that feel real, creative, and scroll-stopping.
          <br />
          Built to grab attention, spark curiosity, and keep your audience watching.
        </div>
      </div>




      <CurvedVideoCarousel />


    </div>
  )
}

export default AiVideosSection