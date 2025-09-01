import React from 'react'
import TurtleBlogsCard from './TurtleBlogsCard'

const TurtleBlogs = () => {
  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center mt-4 gap-6">
      {/* Header */}
      <div className="flex flex-col w-full font-bold text-[49px] items-center justify-center text-center">
      <div style={{
              fontFamily: "Calisga, serif",
           
            }}>Turtle Talks:  <span className="text-[#A0CB3A]">Blogs</span></div>
        <div style={{
                  fontFamily: "Montserrat, sans-serif",
                  
                }} className="text-lg mt-4 font-light w-1/2">
          Lorem ipsum dolor sit amet consectetur. Morbi diam tellus metus
          bibendum. Lorem ipsum dolor sit amet consectetur. Morbi diam tellus
          metus bibendum.
        </div>
      </div>

      {/* Horizontal scroll cards */}
      <div className="flex w-full overflow-x-scroll min-h-fit py-10 scrollbar-hide gap-6 px-4 justify-center items-center">
        <div className="flex-shrink-0"><TurtleBlogsCard /></div>
        <div className="flex-shrink-0"><TurtleBlogsCard /></div>
        <div className="flex-shrink-0"><TurtleBlogsCard /></div>
      </div>
    </div>
  )
}

export default TurtleBlogs
