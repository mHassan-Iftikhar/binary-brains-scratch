"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProjectsPage() {
  const images = [
    {
      src: "/images/01.png",
      alt: "Project 1",
    },
    {
      src: "/images/02.png",
      alt: "Project 2",
    },
    {
      src: "/images/03.png",
      alt: "Project 3",
    },
    {
      src: "/images/04.png",
      alt: "Project 4",
    },
    {
      src: "/images/05.png",
      alt: "Project 5",
    },
    {
      src: "/images/06.png",
      alt: "Project 6",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
      <Carousel_003 className="" images={images} showPagination loop autoplay />
    </div>
  );
}

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
  const css = `
  .Carousal_003 {
    width: 100vw;
    height: 70vh;
    padding-bottom: 50px !important;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 40vw !important;
    height: 60vh !important;
    max-width: 40vw !important;
    max-height: 60vh !important;
  }

  .swiper-pagination-bullet {
    background-color: #000 !important;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background-color: #3b82f6 !important;
    opacity: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

  // Show placeholder if no images
  if (!images || images.length === 0) {
    return (
      <div className={cn("flex items-center justify-center py-20", className)}>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Projects Available
          </h3>
          <p className="text-gray-500">
            Projects will be displayed here once added.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn(
        "relative h-[120vh] w-full mx-auto px-5 py-10 mt-30 overflow-hidden",
        className
      )}
    >
      <style>{css}</style>

      {/* Section Title */}
      <div className="text-center mb-10">
        <div
          className="text-[6rem] sm:text-[8rem] md:text-[9rem] lg:text-[9rem] xl:text-[10rem] font-humane font-bold text-transparent mb-4"
          style={{
            WebkitTextStroke: "1px black",
          }}
        >
          Our Projects
        </div>
        <div className="text-gray-600 max-w-2xl text-xl sm:text-2xl mx-auto">
          Explore our portfolio of successful projects and creative solutions
          we&apos;ve delivered for our clients.
        </div>
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
                  delay: 1500,
                  disableOnInteraction: true,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                src={image.src}
                alt={image.alt}
                width={800}
                height={1200}
                priority={index === 0}
              />
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
