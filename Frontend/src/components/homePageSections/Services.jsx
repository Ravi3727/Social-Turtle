import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
   <div className='w-screen   h-fit pb-10 pt-10 flex flex-col gap-6 items-center '>
    <div style={{
              fontFamily: "Calisga, serif",
           
            }} className='text-[49px] text-center  font-bold'>Services</div>
<div className="w-full scrollbar-hide mx-auto flex md:flex-wrap gap-6 overflow-scroll justify-center">
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