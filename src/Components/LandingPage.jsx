import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3s" className="w-full h-screen bg-zinc-900 border-t">
      <div className="textstructure mt-20 px-10">
        {["We Create", "Eyes Opening", "Presentation"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-end overflow-hidden ">
              {index === 1 && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className="mr-[1vw] w-[8vw] h-[5vw] rounded-md bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] relative -top-[1vw]"></motion.div>}
              <h1 className="flex items-center uppercase text-[6vw] h-full leading-[7vw] tracking-tighter font-semibold">
                {item}
              </h1>
            </div>
          </div>
         ))}
      </div>

      <div className="border-t-2 border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["For Public and Private Companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-600">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
