import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative w-full text-black mt-10">
      <div className="mx-auto w-full max-w-9xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Headline row */}
        <div className="grid grid-cols-12 gap-y-10 md:gap-8 items-start">
          {/* Left: Studio */}
          <div className="col-span-12 md:col-span-6">
            <h1 className="leading-none font-thunder text-[20vw] md:text-[12vw] text-black">
              Studio
            </h1>
          </div>
          {/* Right: 2023© */}
          <div className="col-span-12 md:col-span-6 flex md:justify-end">
            <h2
              className="leading-none font-thunder text-transparent text-[18vw] md:text-[10vw]"
              style={{
                WebkitTextStroke: "1px black",
              }}
            >
              2025©
            </h2>
          </div>

          {/* Small label left */}
          <div className="col-span-12 md:col-span-3 order-3 md:order-none">
            <p className="text-md tracking-wide">About us</p>
          </div>

          {/* Paragraph right */}
          <div className="col-span-12 md:col-span-5 md:col-start-7">
            <div className="border-l-2 border-black pl-4 md:pl-6">
              <p className="text-sm leading-relaxed">
                At Binary Brains, we specialize in turning ideas into impactful
                digital solutions. Our team blends creativity with cutting-edge
                technology to design and build software that drives innovation,
                accelerates growth, and empowers businesses to thrive in the
                digital era.
              </p>
            </div>
          </div>

          {/* Large photo spanning lower area */}
          <div className="col-span-12 md:col-span-9 md:col-start-4 mt-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/images/04.png"
                alt="Engines of Creation"
                width={1920}
                height={1080}
                className="object-cover w-full h-full opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
