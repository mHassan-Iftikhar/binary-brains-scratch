"use client";

import React from "react";
import { Terminal } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative selection:bg-white selection:text-black overflow-hidden">
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
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Mobile Layout - Only for mobile devices */}
      <div className="md:hidden w-full h-screen flex flex-col items-center justify-center relative z-20 px-4 text-center">
        {/* Creative UI/UX Badge - First */}
        <div className="mb-6">
          <div className="text-sm backdrop-blur-md border border-white/20 text-zinc-300 bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <Image src="/ai.png" alt="logo" width={20} height={20} />
            <span className="whitespace-nowrap">
              CREATIVE UI/UX & DEVELOPMENT
            </span>
          </div>
        </div>

        {/* Main Heading - Second */}
        <div className="mb-6">
          <div className="text-4xl font-medium leading-[0.9] text-white">
            YOUR{" "}
            <span className="gradient-text inline-block relative border border-zinc-600 rounded px-2 py-1 ml-1">
              IDEA
            </span>
          </div>
        </div>

        {/* Services Text - Third */}
        <div className="mb-12">
          <div className="text-4xl font-medium leading-[0.9] text-white">
            OUR{" "}
            <span className="gradient-text inline-block relative border border-zinc-600 rounded px-2 py-1 ml-1">
              SOLUTIONS
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Hidden on mobile, original layout for desktop */}
      <div className="hidden md:flex w-full h-screen items-center justify-center relative z-20">
        <div className="w-full text-7xl sm:text-6xl md:text-6xl lg:text-[6rem] xl:text-[5rem] leading-[0.8] sm:leading-[0.8] md:leading-[0.8] lg:leading-[0.8] xl:leading-[11rem] font-medium px-4 sm:px-6 text-zinc-200 flex items-center justify-between">
          <div className="leading-[1] flex flex-col items-start text-white">
            <div className="flex items-center">
              YOUR{" "}
              <span className="gradient-text inline-block relative border ml-2">
                IDEA
              </span>
            </div>
            <div className="text-[20px] md:text-md lg:text-lg xl:text-xl mt-4 backdrop-blur-md border border-white/20 text-zinc-300 bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
              <Image src="/ai.png" alt="logo" width={24} height={24} />
              <span>CREATIVE UI/UX & DEVELOPMENT</span>
            </div>
          </div>
          <span className="leading-[1] flex flex-col items-end text-right text-white">
            <span className="flex items-center">
              OUR{" "}
              <a
                className="text-lg md:text-sm lg:text-lg xl:text-2xl  bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 cursor-pointer"
                href="/contact"
              >
                GET IN TOUCH
              </a>
            </span>
            <span className="gradient-text inline-block relative">
              SOLUTIONS
            </span>
          </span>
        </div>
      </div>

      {/* Bottom Section - Mobile responsive */}
      <div className="absolute bottom-4 left-0 right-0 z-20 px-4">
        {/* Mobile Bottom Layout */}
        <div className="md:hidden flex flex-col items-center gap-4">
          {/* Geometric Shapes */}
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-[0] h-[0] border-l-[8px] border-r-[8px] border-b-[16px] border-l-transparent border-r-transparent border-b-white"></div>
            <div className="w-4 h-4 bg-white"></div>
          </div>

          {/* Tagline */}
          <div className="text-center text-xs text-white max-w-sm">
            <Terminal className="inline-block mr-1 w-3 h-3 text-white" />
            <span>
              &ldquo;At Binary Brains, we turn ideas into powerful digital
              solutions—combining creativity and technology to build products
              that drive growth and impact.&rdquo;
            </span>
          </div>
        </div>

        {/* Desktop Bottom Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Geometric Shapes - Left */}
          <div className="flex items-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full"></div>
            <div className="w-[0] h-[0] border-l-[12px] border-r-[12px] border-b-[24px] sm:border-l-[16px] sm:border-r-[16px] sm:border-b-[32px] border-l-transparent border-r-transparent border-b-white"></div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white"></div>
          </div>

          {/* Tagline - Right */}
          <div className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] text-xs sm:text-sm md:text-base lg:text-xl text-white text-right">
            <Terminal className="inline-block mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            &ldquo;At Binary Brains, we turn ideas into powerful digital
            solutions—combining creativity and technology to build products that
            drive growth and impact.&rdquo;
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(
            135deg,
            #1e3a8a,
            #103675,
            #0055bd,
            #174478,
            #1e3a8a
          );
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: gradientShift 4s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Fallback for browsers that don't support background-clip */
        @supports not (-webkit-background-clip: text) {
          .gradient-text {
            color: #3b82f6 !important;
            -webkit-text-fill-color: #3b82f6 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default page;
