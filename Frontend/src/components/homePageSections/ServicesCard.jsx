import React from 'react'
import { Link } from "react-router-dom";
const ServicesCard = ({ title, description, link, imgLink }) => {
  return (
    <Link to={`/services/${link}`} className='border-[#000000] border-[0.2px] md:w-[352px] pt-3 w-[269px] h-[233px] flex-shrink-0   rounded-lg px-4 pb-4' style={{ boxShadow: "0 8px 10px -5px rgba(0,0,0,0.3)" }}>
      <img src={imgLink} className='md:h-[60px] h-[49px] rounded-md border-2 border-[#A0CB3A]' alt="" />
      <div className='font-bold mt-2 text-[16px] md:text-[20px]'>{title}</div>
      <div style={{
        fontFamily: "Montserrat, sans-serif",

      }} className='font-extralight mt-2 text-[14px] md:text-[15px] w-full leading-tight'>{description}</div>
    </Link>
  )
}

export default ServicesCard