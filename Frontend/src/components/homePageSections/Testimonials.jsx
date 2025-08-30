import React from 'react'
import Testimonialscard from './Testimonialscard'

const Testimonials = () => {
  return (
     <div className='w-screen h-[90vh] flex flex-col  items-center  '>
     <div className='flex flex-col w-screen  font-bold text-[49px] items-center justify-center  text-center'>
              
                <div className='text-[#A0CB3A]'>Testimonials</div>
                  <div className='text-lg mt-4 font-light w-1/2 '>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.
                </div>
                </div>
                <div className="w-full h-[70%] flex items-center gap-6 overflow-x-scroll scrollbar-hide px-4">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="flex-shrink-0">
      <Testimonialscard />
    </div>
  ))}
</div>

    </div>
  )
}

export default Testimonials