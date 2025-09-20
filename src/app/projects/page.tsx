"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn("w-full", className)}
    >
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <div className="text-3xl md:text-[10rem] font-humane font-bold text-transparent mb-4"
          style={{
            WebkitTextStroke: '1px black',
          }}
        >
          Our Projects
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of successful projects and creative solutions
          we&apos;ve delivered for our clients.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 3000,
                  disableOnInteraction: false,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={showPagination ? { clickable: true } : false}
          navigation={showNavigation}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide 
              key={index}
              className="!w-auto"
              style={{ width: 'auto' }}
            >
              <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

// Main page component - this must be the default export
const ProjectsPage = () => {
  const images = [
    {
      src: "/images/01.png",
      alt: "Project 1 - Web Development",
    },
    {
      src: "/images/02.png",
      alt: "Project 2 - Mobile App",
    },
    {
      src: "/images/03.png",
      alt: "Project 3 - UI/UX Design",
    },
    {
      src: "/images/04.png",
      alt: "Project 4 - E-commerce",
    },
    {
      src: "/images/05.png",
      alt: "Project 5 - Dashboard",
    },
    {
      src: "/images/06.png",
      alt: "Project 6 - Landing Page",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3] min-h-screen py-20">
      <Carousel_003 
        className="" 
        images={images} 
        showPagination 
        loop 
        autoplay
        showNavigation
        spaceBetween={30}
      />
    </div>
  );
};

// Export the page component as default
export default ProjectsPage;

// Export the carousel component for use in other parts of the app
export { Carousel_003 };