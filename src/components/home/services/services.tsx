"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

interface Service {
  id: number;
  src: string;
  alt: string;
  title: string;
  color: string;
  description: string;
}

const ServicesPage = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imagesRef = useRef(null);
  const [hoveredService, setHoveredService] = useState<Service | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    import("split-type").then((SplitTypeModule) => {
      const SplitType = SplitTypeModule.default;

      if (titleRef.current && containerRef.current) {
        const split = new SplitType(titleRef.current, {
          types: "chars",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom 80%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          split.chars,
          {
            y: 100,
            opacity: 0,
            rotationX: -90,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: "back.out(1.7)",
          }
        );

        tl.fromTo(
          ".service-image",
          {
            rotation: 45,
            opacity: 0,
          },
          {
            rotation: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          0.3
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const serviceImages = [
    {
      id: 1,
      src: "/images/01.png",
      alt: "Web Development",
      title: "WEB DEV",
      color: "#FF4757",
      description: "Custom websites and web applications",
    },
    {
      id: 2,
      src: "/images/02.png",
      alt: "App Development",
      title: "APP DEV",
      color: "#FF6B35",
      description: "iOS and Android applications",
    },
    {
      id: 3,
      src: "/images/06.png",
      alt: "UI/UX",
      title: "UI/UX",
      color: "#26C6DA",
      description: "UI/UX design and development",
    },
    {
      id: 4,
      src: "/images/03.png",
      alt: "UI/UX Design",
      title: "DESIGN",
      color: "#F7931E",
      description: "User interface and experience design",
    },
    {
      id: 5,
      src: "/images/04.png",
      alt: "BRANDING",
      title: "BRAND",
      color: "#FFD23F",
      description: "Brand identity and visual design",
    },
  ];

  const handleServiceHover = (service: Service) => {
    setHoveredService(service);
  };

  const handleServiceLeave = () => {
    setHoveredService(null);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Service Images Grid */}
      <div
        ref={imagesRef}
        className="flex flex-wrap justify-center items-center gap-4 mb-16 max-w-4xl relative z-10"
      >
        {serviceImages.map((service) => (
          <div
            key={service.id}
            className="service-image relative group cursor-pointer"
            onMouseEnter={() => handleServiceHover(service)}
            onMouseLeave={handleServiceLeave}
          >
            <div
              className={`rounded-xl overflow-hidden transition-all duration-500 relative
                ${
                  hoveredService?.id === service.id
                    ? "w-32 h-32 md:w-40 md:h-40 rotate-6 z-20"
                    : "w-32 h-32 md:w-40 md:h-40"
                }
              `}
              style={{
                transform:
                  hoveredService?.id === service.id
                    ? "rotate(8deg) scale(1.15)"
                    : "rotate(0deg) scale(1)",
                zIndex: hoveredService?.id === service.id ? 20 : 1,
              }}
            >
              {/* Fallback with gradient background if image fails */}
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs relative z-10">
                {hoveredService?.id === service.id ? (
                  <div className="text-center p-2">
                    <div className="text-md md:text-lg font-black mb-1">
                      {service.title}
                    </div>
                    <div className="text-[8px] md:text-[10px] opacity-80 leading-tight">
                      {service.description}
                    </div>
                  </div>
                ) : (
                  service.title.split(" ")[0]
                )}
              </div>

              {/* Actual image overlay using fill */}
              <Image
                src={service.src}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 80px, 160px"
                className={`object-cover transition-opacity duration-300 ${
                  hoveredService?.id === service.id
                    ? "opacity-20"
                    : "opacity-70 hover:opacity-90"
                }`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target && target.style) {
                    target.style.display = "none";
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Title - Changes based on hover */}
      <div className="text-center relative z-0">
        <h1
          ref={titleRef}
          className="text-[7.5rem] sm:text-[13.5rem] md:text-[19.5rem] lg:text-[24rem] xl:text-[30rem] font-thunder transition-all duration-500"
          style={{
            color: hoveredService ? hoveredService.color : "#FFFFFF",
          }}
        >
          {hoveredService ? hoveredService.title : "SERVICES"}
        </h1>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-500 sm:w-80 sm:h-80 md:w-96 md:h-96"
          style={{
            backgroundColor: hoveredService
              ? `${hoveredService.color}20`
              : "#3B82F620",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-500 sm:w-80 sm:h-80 md:w-96 md:h-96"
          style={{
            backgroundColor: hoveredService
              ? `${hoveredService.color}30`
              : "#8B5CF630",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ServicesPage;
