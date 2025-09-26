"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative h-[76vh] min-h-[76vh] w-full overflow-hidden">
      {/* Gradient Noise Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-[70vh] min-h-[70vh] flex-col justify-between p-8 text-white">
        {/* Top Section */}
        <div className="flex flex-col space-y-8">
          {/* Contact Us Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-800">
              <Plus className="h-3 w-3 text-white" />
            </div>
            <span className="text-sm font-medium">Contact Us</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Building bold software that moves businesses forward — faster,
            smarter, securely.
          </motion.h1>

          {/* Contact Info and Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8 md:flex-row md:items-center md:justify-between md:space-y-0"
          >
            {/* Contact Email */}
            <div className="flex items-center space-x-2 z-99">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Contact Binary Brains at:
              </span>
              <a
                href="mailto:binarybrainsofficial@gmail.com"
                className="group flex items-center space-x-1 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium hover:text-gray-300 transition-colors cursor-pointer text-[#0f7ac6]"
              >
                <span className="cursor-pointer">binarybrainsofficial@gmail.com</span>
                <ArrowUpRight className="h-4 w-4 md:w-6 md:h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-8 z-99">
              <a
                href="https://www.linkedin.com/company/binary-brains/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm cursor-pointer sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:text-gray-300 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm cursor-pointer sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:text-gray-300 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm cursor-pointer sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:text-gray-300 transition-colors"
              >
                X
              </a>
            </nav>
          </motion.div>
        </div>

        <motion.div className="absolute top-[82%] sm:top-[72%] md:top-[66%] lg:top-[65%] xl:top-[26%] left-0 w-full text-center text-[10rem] sm:text-[20rem] md:text-[22rem] lg:text-[30rem] xl:text-[50rem] font-thunder text-zinc-200">
          BINARY
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
