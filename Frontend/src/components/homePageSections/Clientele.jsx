import React from 'react'
import { motion as framer } from "framer-motion"

const Clientele  = () => {
  return (
       <div className='w-screen h-[90vh] flex flex-col  items-center  '>
    <div className='text-[49px] text-center mt-10 text-black '>Clientele</div>
    <div className='min-w-full relative flex flex-col justify-center items-center h-[90%]  overflow-clip'>
      <framer.img initial={{x:-100}} animate={{x:100}} transition={{duration:10,repeat:Infinity,repeatType: "reverse",}} src="/images/row1.png"   alt="" />
      <framer.img initial={{x:100}} animate={{x:-100}} transition={{duration:10,repeat:Infinity,repeatType: "reverse",}} src="/images/row2.png"   alt="" />
      <framer.img initial={{x:-100}} animate={{x:100}} transition={{duration:10,repeat:Infinity,repeatType: "reverse",}} src="/images/row3.png"   alt="" />
   
     <div className="absolute w-full h-[100%] inset-0 bg-radial from-[rgb(0,0,0,0)] to-[#ffffff] to 100% pointer-events-none"></div>
    </div>
    </div>
    
  )
}

export default Clientele 