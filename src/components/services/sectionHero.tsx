'use client'

import React, { useState } from "react";

const sidebarCards = [
  {
    title: "Technology",
    info: (
      <p className="text-sm">
        We use advanced carbon nano-structures for efficient energy capture and
        storage.
        <br />
        Our technology is designed for sustainability and scalability.
      </p>
    ),
    bg: "bg-[#181818] text-white",
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
    bg: "bg-[#181818] text-white",
  },
  {
    title: "Contact Us",
    info: (
      <p className="text-sm">
        Reach out for collaborations or product inquiries.
        <br />
        We're here to help you power your future.
      </p>
    ),
    bg: "bg-[#181818] text-white",
  },
];

const SectionHero = () => {
  // -1 means About Us is open by default
  const [hovered, setHovered] = useState<number | null>(-1);

  return (
    <section className="w-full h-screen bg-black flex justify-between px-8">
      {/* Left Side: Image + Title */}
      <div className="w-[80vw] flex flex-col">
        {/* Image Area */}
        <div className="w-[78vw] h-[34vw] relative rounded-2xl overflow-hidden m-2 flex items-center justify-center">
          <img
            src="/images/04.png"
            alt="Engines of Creation"
            className="object-cover w-full h-full opacity-80"
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
          className={`bg-[#eaf6fa] rounded-2xl p-8 text-black mb-2 flex flex-col justify-center transition-all duration-500 ease-in-out relative overflow-hidden`}
          style={{
            minHeight: hovered === -1 ? "220px" : "60px",
            boxShadow: hovered === -1 ? "0 8px 32px rgba(0,0,0,0.15)" : "",
          }}
          onMouseEnter={() => setHovered(-1)}
          onMouseLeave={() => setHovered(null)}
        >
          <h2 className="text-lg font-bold mb-2">About Us</h2>
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              hovered === -1 ? "opacity-100" : "opacity-0 h-0"
            }`}
          >
            {hovered === -1 && (
              <p className="text-sm">
                SEEDS are Sustainable Energy Efficient Designed Structures.
                <br />
                We provide energy generation and capture solutions by formulating
                printable inks using advanced carbon based nano-structures.
                <br />
                These are formed into bespoke auxiliary power systems to support power
                demands.
              </p>
            )}
          </div>
        </div>
        {/* Other Cards with hover effect */}
        {sidebarCards.map((card, idx) => (
          <div
            key={card.title}
            className={`rounded-2xl p-8 mb-2 min-h-[60px] cursor-pointer transition-all duration-500 ease-in-out relative overflow-hidden ${card.bg}`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            style={{
              boxShadow: hovered === idx ? "0 8px 32px rgba(0,0,0,0.15)" : "",
              minHeight: hovered === idx ? "220px" : "60px",
              background: hovered === idx ? "#eaf6fa" : "#181818",
              color: hovered === idx ? "#222" : "#fff",
            }}
          >
            <h2 className="text-lg font-bold mb-2">{card.title}</h2>
            <div
              className={`transition-opacity duration-500 ease-in-out ${
                hovered === idx ? "opacity-100" : "opacity-0 h-0"
              }`}
            >
              {hovered === idx && (
                <div className="text-black">
                  {card.info}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionHero;