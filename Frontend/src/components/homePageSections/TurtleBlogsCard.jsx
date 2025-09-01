import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const TurtleBlogsCard = () => {
  return (
    <div style={{
                  fontFamily: "Montserrat, sans-serif",
                  
                }} className='w-[438px] h-[530px] gap-4 flex flex-shrink-0 flex-col rounded-xl overflow-clip  shadow-[0_3px_0px_rgba(0,0,0,0.2)] border-1 border-[#D9D9D9]'>
        <div className='h-[358px] bg-[#D9D9D9]'></div>
        <div className='w-full flex justify-between items-center px-2 text-[#7C7B7B] text-[14px]'>
            <div>12th Aug 2024</div>
            <div>12 min read</div>
        </div>
        <div className='w-full flex justify-between items-center text-[18px] px-2  font-semibold'>
            <div className='w-[80%]'>5 AI Tools That Are Changing the Digital Marketing Game in 2025</div>
            <div className='bg-[#A0CB3A] min-h-[50px] min-w-[50px] rounded-full flex justify-center items-center'> <ArrowUpRight /></div>
        </div>
        <div className='w-[70%] text-[#434343] text-[14px] px-2'>
            The Ultimate Guide to Transforming Your Space
        </div>

    </div>
  )
}

export default TurtleBlogsCard