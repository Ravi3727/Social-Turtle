import React from 'react'
import { Link } from "react-router-dom";
const ServicesCard = () => {
  return (
    <Link  to="/services" className='border-[#000000] border-[0.2px] md:w-[352px] md:h-[233px] pt-3 w-[269px] h-[178px]  flex-shrink-0   rounded-lg px-4 pb-4' style={{ boxShadow: "0 8px 10px -5px rgba(0,0,0,0.3)" }}>
        <img src="/images/rect.png" className='md:h-[60px] h-[49px]' alt="" />
        <div className='font-bold mt-2 text-[16px md:text-[20px]'>Branding and packaging </div>
        <div style={{
                  fontFamily: "Montserrat, sans-serif",
                  
                }} className='font-extralight mt-2 text-[14px] md:text-[15px] w-2/3 leading-tight'>Lorem ipsum dolor sit amet consectetur. Id lectus enim sem lorem amet mi.</div>
    </Link>
  )
}

export default ServicesCard