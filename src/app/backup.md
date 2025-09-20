'use client';

import React, { useEffect } from 'react'
import { Terminal } from 'lucide-react'

const page = () => {
  useEffect(() => {
    // Create video elements for text backgrounds
    const createVideoText = (elementClass: string, videoSrc: string) => {
      const element = document.querySelector(`.${elementClass}`) as HTMLElement;
      if (element) {
        // Clear any existing video
        const existingVideo = element.querySelector('video');
        if (existingVideo) {
          existingVideo.remove();
        }

        // Store original text content
        const textContent = element.textContent || '';

        // Create video element
        const video = document.createElement('video');
        video.src = videoSrc;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;

        // Set up the element styles for proper text masking
        element.style.position = 'relative';
        element.style.display = 'inline-block';
        element.style.overflow = 'hidden';
        element.style.background = 'transparent';
        element.style.backgroundClip = 'text';
        element.style.webkitBackgroundClip = 'text';
        element.style.webkitTextFillColor = 'transparent';
        element.style.color = 'transparent';

        // Update background with video frames using canvas
        video.addEventListener('loadeddata', () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          const updateBackground = () => {
            if (video.readyState >= 2) {
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
              ctx?.drawImage(video, 0, 0);
              const dataURL = canvas.toDataURL();
              element.style.backgroundImage = `url(${dataURL})`;
              element.style.backgroundSize = 'cover';
              element.style.backgroundPosition = 'center';
              element.style.backgroundRepeat = 'no-repeat';
            }
            requestAnimationFrame(updateBackground);
          };

          updateBackground();
        });

        // Don't append the video to the element, just use it for canvas updates
        video.style.display = 'none';
        document.body.appendChild(video);
      }
    };

    // Apply video text effect with a small delay to ensure DOM is ready
    setTimeout(() => {
      createVideoText('video-text-our', '/text-video.mp4');
      createVideoText('video-text-solutions', '/text-video.mp4');
    }, 100);
  }, []);

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center relative selection:bg-white selection:text-black overflow-hidden'>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className='absolute inset-0 bg-black/40 z-10'></div>

      {/* Main Heading - Centered */}
      <div className='w-full h-screen flex items-center justify-center relative z-20'>
        <div className='w-full text-7xl sm:text-9xl md:text-8xl lg:text-[10rem] xl:text-[5rem] leading-[0.8] sm:leading-[0.8] md:leading-[0.8] lg:leading-[0.8] xl:leading-[11rem] font-medium px-4 sm:px-6 text-zinc-200 flex items-center justify-between'>
          <span className='leading-[1.2] flex items-center text-white'>
            YOUR <span className='video-text-our inline-block relative ml-2'>IDEA</span>
            <span className='text-[20px]'>CREATIVE UI/UX & DEVELOPMENT</span>
          </span>
          <span className='leading-[1] flex flex-col items-end text-right text-white'>
            <span>OUR</span>
            <span className='video-text-solutions inline-block  relative'>SOLUTIONS</span>
          </span>
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

      <style jsx>{`
        .video-text-our,
        .video-text-solutions {
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          color: transparent !important;
        }

        /* Fallback for browsers that don't support background-clip */
        @supports not (-webkit-background-clip: text) {
          .video-text-our,
          .video-text-solutions {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            background-size: 400% 400%;
            animation: gradient 3s ease infinite;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}

export default page