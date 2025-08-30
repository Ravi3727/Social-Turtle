import { Quote, Star } from 'lucide-react'
import React from 'react'

const Testimonialscard = () => {
    return (
        <div className='border-[#000000] border-[0.2px] w-[35vw] h-[40vh] py-6 flex flex-col items-center   rounded-lg ' >
            <div className='flex justify-start w-[80%]'>
                <Quote />
            </div>

            <div className='font-normal text-[20px] w-[80%] mt-2 '>Lorem ipsum dolor sit amet consectetur. Neque rhoncus pulvinar eget eleifend ultricies purus cursus. Ut pulvinar laoreet arcu cras varius tellus. Eget venenatis </div>
            <div className='w-[80%]  border-1 border-[#C4C4C4] mt-10'></div>
            <div className='flex mt-2 justify-between gap-8 items-center'>
                <div className="flex gap-3 items-center justify-between">
                    <div className='w-15 rounded-full h-15 bg-[#D9D9D9]'></div>
                <div>
                    <div className='font-bold'>Nikhil Sharma </div>
                    <div className='text-[#959595] text-sm'>CEO & Managing Director </div>
                </div>
                </div>
                <div className=''>
                    <div className='flex  '>
                        <img src="/images/star.png" className='w-8 h-8' alt="" />
                        <img src="/images/star.png" className='w-8 h-8' alt="" />
                        <img src="/images/star.png" className='w-8 h-8' alt="" />
                        <img src="/images/star.png" className='w-8 h-8' alt="" />
                        <img src="/images/star.png" className='w-8 h-8' alt="" />
                       
                        </div>
                        <div className='font-extralight text-sm'>
                            5.0 Rating
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonialscard