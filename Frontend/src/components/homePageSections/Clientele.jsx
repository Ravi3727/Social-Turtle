import React from 'react'
import { motion } from "framer-motion"

const Clientele = () => {
  return (
    <div className='w-screen h-[90vh]  flex flex-col pt-10 items-center  '>
      <div className='text-[49px] text-center mt-10 text-black font-extrabold '>Clientele</div>
      <div className='min-w-full relative flex flex-col justify-center items-center h-[90%]  overflow-clip'>
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%", "0%"] }} // move left continuously
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate images to loop seamlessly */}
          <img src="/images/row1.png" alt="" className="w-auto h-40" />
          <img src="/images/row1.png" alt="" className="w-auto h-40" />
          <img src="/images/row1.png" alt="" className="w-auto h-40" />
          <img src="/images/row1.png" alt="" className="w-auto h-40" />
        </motion.div>
        <motion.div className="flex"
          animate={{ x: ["-100%", "0%", "-100%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <img src="/images/row2.png" className="w-auto h-40" alt="" />
          <img src="/images/row2.png" className="w-auto h-40" alt="" />
          <img src="/images/row2.png" className="w-auto h-40" alt="" />
          <img src="/images/row2.png" className="w-auto h-40" alt="" />
        </motion.div>
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%", "0%"] }} // move left continuously
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate images to loop seamlessly */}
          <img src="/images/row3.png" alt="" className="w-auto h-40" />
          <img src="/images/row3.png" alt="" className="w-auto h-40" />
          <img src="/images/row3.png" alt="" className="w-auto h-40" />
          <img src="/images/row3.png" alt="" className="w-auto h-40" />
        </motion.div>
        <div className="absolute w-full h-[100%] inset-0 bg-radial from-[rgb(0,0,0,0)] to-[#ffffff] to 100% pointer-events-none"></div>
      </div>
    </div>

  )
}

export default Clientele 