import React from 'react'

const About = () => {
  return (
    <div className='w-full py-20 bg-[#CDEA68] px-20 rounded-tl-3xl text-black'>
        <h1 className='font-[Neue_Montreal] text-[3vw] leading-[4vw] tracking-tighter'> Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great peo­ple.</h1>

        <div className="flex p-20 w-full border-t-[1px] mt-20 border-[#191d0c]">
            <div className='w-1/2 '>
                <h1 className='text-5xl'>Our Approach</h1>
                <button className='flex gap-10 items-center px-10 py-5 bg-zinc-900 text-white rounded-full mt-10 uppercase'>Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#65752e]'></div>
            </div>    
</div>
  )
}

export default About
