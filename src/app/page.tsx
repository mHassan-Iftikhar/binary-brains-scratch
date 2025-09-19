import React from 'react'
import { Terminal } from 'lucide-react'

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center relative selection:bg-white selection:text-black overflow-hidden bg-black text-white'>
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className='absolute inset-0 w-full h-full object-cover z-0 opacity-100'
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className='absolute inset-0 bg-black/40 z-10'></div>

      {/* Main Heading - Centered */}
      <div className='w-full h-screen flex items-center justify-center relative z-20'>
        <div className='w-full text-7xl sm:text-9xl md:text-8xl lg:text-[10rem] xl:text-[5rem] leading-[0.8] sm:leading-[0.8] md:leading-[0.8] lg:leading-[0.8] xl:leading-[11rem] font-medium px-4 sm:px-6 text-zinc-200 flex items-center justify-between'>
          <span className='leading-[1.2]'>YOUR <span className='border-zinc-600 border-b border-[1px] rounded px-3 -py-4 text-[var(--primary-color)]'>IDEA</span></span>
          <span className='leading-[1.2]'>OUR <br /> <span className='border-zinc-600 border-b border-[1px] rounded px-3 -py-4 text-[var(--primary-color)]'>SOLUTIONS</span></span>
        </div>
      </div>

      {/* Geometric Shapes - Bottom Left */}
      <div className="flex items-center absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 z-20">
        {/* Circle */}
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full"></div>

        {/* Triangle */}
        <div className="w-[0] h-[0] border-l-[12px] border-r-[12px] border-b-[24px] sm:border-l-[16px] sm:border-r-[16px] sm:border-b-[32px] border-l-transparent border-r-transparent border-b-white"></div>

        {/* Square */}
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white"></div>
      </div>

      {/* Tagline - Bottom Right */}
      <div className='absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] text-xs sm:text-sm md:text-base lg:text-xl z-20 text-white'>
        <Terminal className='inline-block mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white' />
        "At Binary Brains, we turn ideas into powerful digital solutions—combining creativity and technology to build products that drive growth and impact."
      </div>
    </div>
  )
}

export default page