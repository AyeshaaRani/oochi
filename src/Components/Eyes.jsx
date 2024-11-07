import React, { useEffect, useState } from 'react'

const Eyes = () => {


    const [rotate, setrotate] = useState(0)
    useEffect(()=>{
        window.addEventListener('mousemove', (e)=>{
           let mouseX = e.clientX;
           let mouseY = e.clientY;

           let deltaX = mouseX - window.innerWidth/2;
           let deltaY = mouseY - window.innerHeight/2;
           var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
       setrotate(angle-180)
        })
    })
  return (
    <div className=' w-full eyes h-screen overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed="-.6s" className='relative w-full h-full bg-cover bg-center bg-red-500 bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
            <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full ">
                    <div className='w-5 h-5 rounded-full bg-zinc-100'></div></div>
              
                </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full ">   <div className='w-5 h-5 rounded-full bg-zinc-100'></div></div>
              
                </div>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Eyes
