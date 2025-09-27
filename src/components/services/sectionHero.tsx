"use client";

import React, { useState } from "react";

import Image from "next/image";

const sidebarCards = [
  {
    title: "Technologies",
    info: (
      <p className="text-sm">
        We use advanced carbon nano-structures for efficient energy capture and
        storage.
        <br />
        Our technology is designed for sustainability and scalability.
      </p>
    ),
    hoverBg: "bg-[#c1e7f7]",
  },
  {
    title: "Features",
    info: (
      <p className="text-sm">
        Customizable, scalable, and highly efficient power systems.
        <br />
        Tailored to meet diverse energy needs.
      </p>
    ),
    hoverBg: "bg-[#ffe6c7]",
  },
  {
    title: "Contact Us",
    info: (
      <p className="text-sm">
        Reach out for collaborations or product inquiries.
        <br />
        We&apos;re here to help you power your future.
      </p>
    ),
    hoverBg: "bg-[#f7c1c1]",
  },
];

const aboutUs = {
  title: "About Us",
  info: (
    <p className="text-sm">
      SEEDS are Sustainable Energy Efficient Designed Structures.
      <br />
      We provide energy generation and capture solutions by formulating
      printable inks using advanced carbon based nano-structures.
      <br />
      These are formed into bespoke auxiliary power systems to support power
      demands.
    </p>
  ),
  bg: "bg-[#eaf6fa]",
};

const SectionHero = () => {
  const [hovered, setHovered] = useState<number | null>(-1);

  return (
    <section className="w-full h-screen bg-black flex justify-between px-8">
      {/* Left Side: Image + Title */}
      <div className="w-[80vw] flex flex-col">
        {/* Image Area */}
        <div className="w-[78vw] h-[34vw] relative rounded-2xl overflow-hidden m-2 flex items-center justify-center">
          <Image
            src="/images/04.png"
            alt="Engines of Creation"
            className="object-cover w-full h-full opacity-80"
            fill
            sizes="20vw"
            priority
          />
        </div>
        {/* Title Area */}
        <div className="h-[120px] bg-[#181818] rounded-2xl m-2 flex items-center px-8 text-white text-3xl font-semibold">
          WEB DEVELOPER
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[340px] flex flex-col gap-3 p-2">
        {/* About Us Card */}
        <div
          className={`${aboutUs.bg} rounded-2xl p-8 text-black mb-2 flex flex-col justify-center transition-all duration-500 ease-in-out relative overflow-hidden`}
          style={{
            minHeight: hovered === -1 ? "22.3vw" : "100px",
            height: hovered === -1 ? "22.3vw" : "100px",
            boxShadow: hovered === -1 ? "0 8px 32px rgba(0,0,0,0.15)" : "",
          }}
        >
          <h2 className="text-lg font-bold mb-2">{aboutUs.title}</h2>
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              hovered === -1 ? "opacity-100" : "opacity-0 h-0"
            }`}
          >
            {hovered === -1 && aboutUs.info}
          </div>
        </div>
        {/* Other Cards with hover effect */}
        {sidebarCards.map((card, idx) => (
          <div
            key={card.title}
            className={`rounded-2xl p-8 mb-2 cursor-pointer transition-all duration-500 ease-in-out relative overflow-hidden ${
              hovered === idx ? card.hoverBg : "bg-[#181818] text-white"
            }`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(-1)}
            style={{
              minHeight: hovered === idx ? "22.3vw" : "100px",
              height: hovered === idx ? "22.3vw" : "100px",
              boxShadow: hovered === idx ? "0 8px 32px rgba(0,0,0,0.15)" : "",
              color: hovered === idx ? "#222" : "#fff",
            }}
          >
            <h2 className="text-lg font-bold mb-2">{card.title}</h2>
            <div
              className={`transition-opacity duration-500 ease-in-out ${
                hovered === idx ? "opacity-100" : "opacity-0 h-0"
              }`}
            >
              {hovered === idx && <div className="text-black">{card.info}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionHero;
