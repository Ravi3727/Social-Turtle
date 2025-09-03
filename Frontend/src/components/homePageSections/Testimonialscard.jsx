import { Quote, Star } from 'lucide-react'
import React from 'react'

const Testimonialscard = () => {
    return (
        <div style={{
                  fontFamily: "Montserrat, sans-serif",
                  
                }} className='border-[#000000] border-[0.2px] md:w-[532px] md:h-[376px] h-[342px] w-[348px] py-6 flex flex-col items-center   rounded-lg ' >
            <div className='flex justify-start w-[80%] '>
                <Quote className='rotate-z-180 fill-black stroke-0   ' />
            </div>

            <div className='font-normal text-[16px] md:text-[20px] w-[80%] mt-2 '>Lorem ipsum dolor sit amet consectetur. Neque rhoncus pulvinar eget eleifend ultricies purus cursus. Ut pulvinar laoreet arcu cras varius tellus. Eget venenatis </div>
            <div className='w-[80%]  border-1 border-[#C4C4C4] mt-10'></div>
            <div className='flex mt-2 justify-between gap-8 items-center'>
                   <div className='w-10 h-10 md:w-15 rounded-full md:h-15 bg-[#D9D9D9]'></div>
                <div className="md:flex   md:gap-4 items-center justify-between px-1">
                 
                
                   <div>
                     <div className='font-bold text-lg md:text-[16px]'>Nikhil Sharma </div>
                    <div className='text-[#959595] text-[12px] md:text-sm'>CEO & Managing Director </div>
                   </div>
                    <div className='flex flex-col items-start gap-1'>
                    <div className='flex  '>
                        <img src="/images/star.png" className='md:w-8 md:h-8 h-6 w-6' alt="" />
                        <img src="/images/star.png" className='md:w-8 md:h-8 h-6 w-6' alt="" />
                        <img src="/images/star.png" className='md:w-8 md:h-8 h-6 w-6' alt="" />
                        <img src="/images/star.png" className='md:w-8 md:h-8 h-6 w-6' alt="" />
                        <img src="/images/star.png" className='md:w-8 md:h-8 h-6 w-6' alt="" />
                        
                       
                        </div>
                        <div className='font-extralight hidden text-[12px] md:block  md:text-sm'>
                            5.0 Rating
                        </div>
              
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Testimonialscard