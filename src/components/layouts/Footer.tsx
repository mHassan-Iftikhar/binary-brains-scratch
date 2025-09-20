"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative min-h-screen w-full overflow-hidden">
      {/* Gradient Noise Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-black/60"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between p-8 text-white">
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
            className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl"
          >
            Interested in working together, trying our the platform or simply learning more?
          </motion.h1>

          {/* Contact Info and Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8 md:flex-row md:items-center md:justify-between md:space-y-0"
          >
            {/* Contact Email */}
            <div className="flex items-center space-x-2">
              <span className="text-xl">Contact Binary Brains at:</span>
              <a 
                href="mailto:binarybrainsofficial@gmail.com"
                className="group flex items-center space-x-1 text-xl font-medium hover:text-gray-300 transition-colors"
              >
                <span>binarybrainsofficial@gmail.com</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-8">
              <a href="#" className="text-xl hover:text-gray-300 transition-colors">How It Works</a>
              <a href="#" className="text-xl hover:text-gray-300 transition-colors">Benefits</a>
              <a href="#" className="text-xl hover:text-gray-300 transition-colors">Features</a>
              <a href="#" className="text-xl hover:text-gray-300 transition-colors">Team</a>
            </nav>
          </motion.div>
        </div>

        <motion.div className='w-full text-center text-[25rem] font-thunder text-zinc-200'>BINARY BRAINS</motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0"
        >
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="relative">
                <div className="h-6 w-6 rounded-sm bg-white"></div>
                <div className="absolute -right-1 top-1/2 h-4 w-2 -translate-y-1/2 bg-white"></div>
                <div className="absolute -left-1 top-1/2 h-4 w-2 -translate-y-1/2 bg-white"></div>
              </div>
            </div>
            {/* <span className="text-xl font-bold">Binary Brains</span> */}
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-8 md:space-y-0">
            {/* Copyright */}
            <span className="text-sm text-white/70">© 2024 Datawizz. All rights reserved.</span>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-gray-300 transition-colors">Linkedin</a>
              <a href="#" className="text-sm hover:text-gray-300 transition-colors">Facebook</a>
              <a href="#" className="text-sm hover:text-gray-300 transition-colors">Twitter</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;