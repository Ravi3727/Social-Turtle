import React from 'react'

const AiVideosSection = () => {
    return (
        <div className='min-h-screen w-screen pt-8'>
            <div className='flex flex-col w-screen  font-bold text-[49px] items-center justify-center  text-center'>
                <div>Engage Audience with Stunning</div>
                <div className='text-[#A0CB3A]'>AI Generated Videos</div>
                  <div className='text-lg mt-4 font-light w-1/2 '>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus bibendum.
                </div>
                </div>
             <div className='perspective-distant perspective-origin-center'>
                 <img src="/images/carousel/image.png" className="shadow-lg object-cover bg-cover  [clip-path:path('M0,0 H100 V80 Q50,120 0,80 Z')]" alt="" />
             </div>
        </div>
    )
}

export default AiVideosSection