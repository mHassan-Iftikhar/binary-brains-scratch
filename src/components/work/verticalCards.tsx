"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Skiper52 = () => {
  const images = [
    {
      src: "/images/01.png",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 01",
      info: "Project 1: Creative branding for startups.",
    },
    {
      src: "/images/02.png",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 02",
      info: "Project 2: Modern web design solutions.",
    },
    {
      src: "/images/03.png",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 03",
      info: "Project 3: E-commerce platform development.",
    },
    {
      src: "/images/05.png",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 04",
      info: "Project 4: UI/UX for mobile applications.",
    },
    {
      src: "/images/06.png",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 05",
      info: "Project 5: Digital marketing campaign.",
    },
    {
      src: "/images/01.png",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 06",
      info: "Project 6: Content creation and strategy.",
    },
    {
      src: "/images/02.png",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 07",
      info: "Project 7: App development for business.",
    },
    {
      src: "/images/03.png",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 08",
      info: "Project 8: Support & maintenance services.",
    },
    {
      src: "/images/04.png",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 09",
      info: "Project 9: SEO optimization for growth.",
    },
  ];

  return (
    <div className="hidden md:flex h-screen w-screen items-center justify-center overflow-hidden overflow-x-hidden">
      <VerticalCards className="" images={images} />
    </div>
  );
};

export { Skiper52 };

const VerticalCards = ({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string; info: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-7xl px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-1">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-3xl"
              initial={{ width: "3.5rem", height: "24rem" }}
              animate={{
                width: activeImage === index ? "28rem" : "7rem",
                height: activeImage === index ? "28rem" : "28rem",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              <Image
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 28rem, 100vw"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>
        {/* Info at the bottom of the cards container */}
        {activeImage !== null && (
          <div className="w-full flex justify-center mt-20">
            <div className="bg-black/60 rounded-3xl p-4 max-w-md w-full">
              <p className="text-left text-lg text-white/50">
                {images[activeImage].code}
              </p>
              <p className="text-left text-xl text-white mt-2">
                {images[activeImage].info}
              </p>
            </div>
          </div>
        )}=
      </motion.div>
    </motion.div>
  );
};

export default VerticalCards;
