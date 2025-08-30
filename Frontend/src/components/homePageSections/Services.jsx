import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
   <div className='w-screen h-[90vh] flex flex-col gap-10 items-center '>
    <div className='text-[49px] text-center mt-10 font-bold'>Services</div>
    <div className='w-[80%] h-[70%] flex flex-wrap justify-between items-center'>
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