"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectHero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !textRef.current || !subtitleRef.current)
        return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: true,
          pin: true,
          anticipatePin: 0.6,
        },
      });

      // Animation for subtitle text
      tl.fromTo(
        subtitleRef.current,
        { scale: 1, yPercent: 0, opacity: 1 },
        { scale: 0.5, yPercent: -150, opacity: 1, ease: "none" },
        0
      );

      // Animation for WORKS text (starts slightly later for gap effect)
      tl.fromTo(
        textRef.current,
        { scale: 1, yPercent: 0, opacity: 1 },
        { scale: 0.25, yPercent: -110, opacity: 1, ease: "none" },
        0.2 // Slight delay to create visual gap
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div
        ref={subtitleRef}
        className="will-change-transform flex items-center gap-2 absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 font-poppins font-light text-sm md:text-2xl text-center"
      >
        <div className="drop-shadow-xl shadow-[#0f7ac6] bg-[#0f7ac6] w-6 h-3 md:h-3 md:w-3 rounded-full"></div>
        Reliable software, beautifully designed, expertly built.
      </div>
      <div
        ref={textRef}
        className="will-change-transform absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 text-transparent font-bold font-thunder text-[13rem] md:text-[40rem] lg:text-[50rem] xl:text-[50rem]"
        style={{ WebkitTextStroke: "1px black" }}
      >
        WORKS
      </div>
    </section>
  );
};

export default ProjectHero;
