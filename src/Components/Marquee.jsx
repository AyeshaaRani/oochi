import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-5  rounded-tl-3xl bg-[#004D43] '>
      <div className="text flex border-t-2 border-b-2 whitespace-nowrap overflow-hidden border-zinc-300">
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}}className='text-[22vw] leading-none  uppercase font-semibold pr-20  '>we are OCHI</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}}className='text-[22vw] leading-none uppercase font-semibold pr-20'> We are Ochi</motion.h1>
       
      </div>
    </div>
  )
}

export default Marquee 

