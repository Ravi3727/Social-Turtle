import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
   <div className='w-screen  h-fit pb-10 pt-10 flex flex-col gap-10 items-center '>
    <div className='text-[49px] text-center  font-bold'>Services</div>
<div className="w-full max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
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