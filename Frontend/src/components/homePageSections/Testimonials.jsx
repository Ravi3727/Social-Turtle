import React from 'react'
import Testimonialscard from './Testimonialscard'

const Testimonials = () => {
  return (
     <div  className='w-screen  h-fit flex flex-col pt-10  items-center gap-6 pb-10 '>
     <div className='flex flex-col w-screen  font-bold text-[49px] items-center justify-center  gap-4 text-center'>
              
                <div style={{
              fontFamily: "Calisga, serif",
           
            }} className='text-[#A0CB3A]'>Testimonials</div>
                  <div style={{
                  fontFamily: "Montserrat, sans-serif",
                  
                }} className='text-[20px] mt-4 font-extralight w-1/2 '>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.
                </div>
                </div>
                <div className="w-full h-fit  py-10 flex items-center gap-6 
                overflow-x-scroll scrollbar-hide px-4 ">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="flex-shrink-0  ">
      <Testimonialscard />
    </div>
  ))}
</div>


    </div>
  )
}

export default Testimonials