import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

const FeaturedProjects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (index) => setHoveredCard(index);
  const handleHoverEnd = () => setHoveredCard(null);

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-8xl tracking-tight">Featured Projects</h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex mt-10 gap-10">
          {/* Card 1 */}
          <motion.div
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={handleHoverEnd}
            className="cardcontainer w-1/2 h-[75vh] relative"
          >
            <h1 className="absolute flex left-full -translate-x-1/3 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] tracking-tighter leading-none text-6xl font-semibold font-[Dm Sans] overflow-hidden">
              {"FYDE".split('').map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={hoveredCard === 0 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-xl w-full h-full bg-zinc-600">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt="FYDE Project"
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={handleHoverEnd}
            className="relative cardcontainer w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] tracking-tighter leading-none text-6xl font-semibold font-[Dm Sans]">
              {"VISE".split('').map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={hoveredCard === 1 ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card rounded-xl w-full h-full bg-zinc-600">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt="VISE Project"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
