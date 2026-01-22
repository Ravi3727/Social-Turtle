import React from 'react'
import { motion } from "framer-motion"

const Clientele = () => {
  return (
    <div className='w-screen h-fit   flex flex-col justify-between items-center overflow-x-clip   '>
      <div style={{
        fontFamily: "Calisga, serif",

      }} className=' text-[28px] md:text-[49px] text-center mt-10 text-black font-extrabold '>Clientele</div>
      <div className='w-full relative h-fit flex flex-shrink-0 flex-col gap-2 justify-center items-center mt-2 overflow-clip'>
        <motion.div
          className="flex  justify-evenly items-center w-full  "
          animate={{ x: ["0%", "-100%", "0%"] }} // move left continuously
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <img
            src="/images/row1.png"
            className="h-32 md:h-52  min-w-fit flex-shrink-0 object-cover"
            alt=""
          />
          <img
            src="/images/row1.png"
            className="h-32 md:h-52  min-w-fit flex-shrink-0 object-cover"
            alt=""
          />
          <img
            src="/images/row1.png"
            className="h-32 md:h-52  min-w-fit flex-shrink-0 object-cover"
            alt=""
          />


        </motion.div>
        <motion.div className="flex gap-0 -translate-x-[100%] w-full "
          animate={{ x: ["0%", "100%", "0%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >

          <img
            src="/images/row2.png"
            className="h-32 md:h-52 w-full min-w-fit flex-shrink-0 object-cover"
            alt=""
          />
          <img
            src="/images/row2.png"
            className="h-32 md:h-52 w-full min-w-fit flex-shrink-0 object-cover"
            alt=""
          />
          <img
            src="/images/row2.png"
            className="h-32 md:h-52 w-full min-w-fit flex-shrink-0 object-cover"
            alt=""
          />


        </motion.div>
        <motion.div
          className="flex gap-0 w-full "
          animate={{ x: ["0%", "-100%", "0%"] }} // move left continuously
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <img
            src="/images/row3.png"
            className="h-32 md:h-52 w-full min-w-fit flex-shrink-0 object-cover"
            alt=""
          />
          <img
            src="/images/row3.png"
            className="h-32 md:h-52 w-full min-w-fit flex-shrink-0 object-cover"
            alt=""
          />
          <img
            src="/images/row3.png"
            className="h-32 md:h-52 w-full min-w-fit flex-shrink-0 object-cover"
            alt=""
          />
        </motion.div>
        <div className="absolute w-full h-[100%] inset-0 bg-radial from-[rgb(0,0,0,0)] to-[#ffffff] to 100% pointer-events-none"></div>
      </div>

    </div>

  )
}

export default Clientele 