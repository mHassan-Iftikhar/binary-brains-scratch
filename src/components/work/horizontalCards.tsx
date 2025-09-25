"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";
import HorizontalCards from "./verticalCards";

const Skiper53 = () => {
  const images = [
    {
      src: "/images/01.png",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/02.png",
      alt: "Illustrations by ©AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/03.png",
      alt: "Illustrations by ©AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/04.png",
      alt: "Illustrations by ©AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/05.png",
      alt: "Illustrations by ©AarzooAly",
      code: "# 23",
    },

    {
      src: "/images/06.png",
      alt: "Illustrations by ©AarzooAly",
      code: "# 23",
    },
  ];

  return (
    <div className="block md:hidden w-screen overflow-visible">
      <HoverExpand_002 className="" images={images} />
    </div>
  );
};

export { Skiper53 };

const HoverExpand_002 = ({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn(
        "relative min-h-[220vh] w-full max-w-none px-5 lg:hidden overflow-x-hidden",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="relative w-full flex flex-col gap-1 pb-40">
          {images.map((image, index) => {
            const cardRef = useRef<HTMLDivElement | null>(null);
            const inView = useInView(cardRef, {
              amount: 0.7,
              once: true,
              margin: "0px 0px -20% 0px",
            });

            return (
              <motion.div
                key={index}
                ref={cardRef}
                className="group sticky top-0 overflow-hidden rounded-3xl w-full"
                style={{ top: `${index * 3.5}rem` }}
                initial={{ height: "3rem" }}
                animate={{ height: inView ? "28rem" : "3rem" }}
                transition={{ type: "tween", duration: 0.25, ease: "linear" }}
              >
                <AnimatePresence>
                  {inView && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute h-full w-full bg-gradient-to-t from-black/50 to-transparent"
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {inView && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute flex h-full w-full flex-col items-end justify-end px-4 pb-5"
                    >
                      <p className="text-left text-xs text-white/50">
                        {image.code}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <img
                  src={image.src}
                  className="size-full object-cover"
                  alt={image.alt}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HorizontalCards;
