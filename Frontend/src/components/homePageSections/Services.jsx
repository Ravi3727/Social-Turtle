import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
   <div className='w-screen   h-fit pb-10 pt-10 flex flex-col justify-evenly  gap-6 items-center '>
    <div style={{
              fontFamily: "Calisga, serif",
           
            }} className=' text-[28px] md:text-[49px] text-center  font-bold'>Services</div>
<div className="w-full scrollbar-hide mx-auto items-center flex md:flex-wrap gap-6 overflow-scroll scroll-smooth justify-center">
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
    </div>

   </div>
  )
}

export default Services