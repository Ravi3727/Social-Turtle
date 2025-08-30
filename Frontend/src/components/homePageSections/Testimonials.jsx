import React from 'react'
import Testimonialscard from './Testimonialscard'

const Testimonials = () => {
  return (
     <div className='w-screen  h-[90vh] flex flex-col pt-10  items-center  '>
     <div className='flex flex-col w-screen  font-bold text-[49px] items-center justify-center  text-center'>
              
                <div className='text-[#A0CB3A]'>Testimonials</div>
                  <div className='text-[20px] mt-4 font-extralight w-1/2 '>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.
                </div>
                </div>
                <div className="w-full h-fit  py-2 flex items-center gap-6 
                overflow-x-auto scrollbar-hide px-4 scroll-smooth snap-x snap-mandatory">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="flex-shrink-0 snap-center w-72">
      <Testimonialscard />
    </div>
  ))}
</div>


    </div>
  )
}

export default Testimonials