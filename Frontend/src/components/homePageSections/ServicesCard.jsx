import React from 'react'

const ServicesCard = () => {
  return (
    <div className='border-[#000000] border-[0.2px] w-[352px] h-[233px] py-3    rounded-lg px-4' style={{ boxShadow: "0 8px 10px -5px rgba(0,0,0,0.3)" }}>
        <img src="/images/rect.png" className='h-[60px]' alt="" />
        <div className='font-bold mt-2'>Branding and packaging </div>
        <div className='font-extralight mt-2 text-sm w-2/3'>Lorem ipsum dolor sit amet consectetur. Id lectus enim sem lorem amet mi.</div>
    </div>
  )
}

export default ServicesCard