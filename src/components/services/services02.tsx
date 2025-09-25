import React from "react";

type InfoItem = { title: string; subtitle: string };

const Dot = () => (
  <span className="inline-block h-4 w-4 rounded-full bg-[#2E2E2E] border border-white/10" />
);

const InfoCard = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="rounded-xl bg-[#1F2124] text-white p-4 md:p-5 border border-white/10">
    <div className="flex items-center gap-2 text-xs text-white/60">
      <Dot />
    </div>
    <div className="mt-3 font-extrabold text-sm md:text-base leading-tight">
      {title}
    </div>
    <div className="mt-1 text-[11px] md:text-xs text-white/60">{subtitle}</div>
  </div>
);

const TallMediaCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-xl overflow-hidden border border-white/10">
    <img
      src={src}
      alt={alt}
      className="w-full h-[18rem] md:h-[32rem] object-cover" // decreased height here
    />
  </div>
);

const SERVICES_CONTENT: {
  left: { infos: InfoItem[] };
  center: { tallMedia: { src: string; alt: string } };
  right: { infos: InfoItem[] };
} = {
  left: {
    infos: [
      {
        title: "BRAND STRATEGY & IDENTITY",
        subtitle: "Build a strong and consistent brand",
      },
      {
        title: "WEB DESIGN & DEVELOPMENT",
        subtitle: "Design and develop modern websites",
      },
      {
        title: "SEO & DIGITAL MARKETING",
        subtitle: "Boost your online presence and reach",
      },
      {
        title: "E-COMMERCE SOLUTIONS",
        subtitle: "Grow your business with online sales",
      },
    ],
  },
  center: {
    tallMedia: { src: "/images/04.png", alt: "Hero sculpture visual" },
  },
  right: {
    infos: [
      {
        title: "UI/UX & GRAPHIC DESIGN",
        subtitle: "Craft intuitive and visual experiences",
      },
      {
        title: "CONTENT CREATION",
        subtitle: "Create impactful and engaging content",
      },
      {
        title: "APP DEVELOPMENT",
        subtitle: "Build scalable and robust applications",
      },
      {
        title: "SUPPORT & MAINTENANCE",
        subtitle: "Keep your digital assets running smoothly",
      },
    ],
  },
};

const Services02 = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-[#0D0E10] text-white py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs md:text-sm tracking-[0.2em] text-white/60">
          CREATED TO MAKE YOU STAND OUT WITH
        </p>
        <h2 className="mt-2 text-center font-extrabold text-5xl md:text-7xl tracking-tight">
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px white" }}
          >
            OUR SERVICES
          </span>
        </h2>

        <div className="mt-10 md:mt-14 grid grid-cols-12 gap-4 md:gap-6">
          {/* Left column */}
          <div className="col-span-12 md:col-span-4 space-y-4 md:space-y-6">
            {SERVICES_CONTENT.left.infos.map((it, i) => (
              <InfoCard key={i} title={it.title} subtitle={it.subtitle} />
            ))}
          </div>

          {/* Center column */}
          <div className="col-span-12 md:col-span-4">
            <TallMediaCard
              src={SERVICES_CONTENT.center.tallMedia.src}
              alt={SERVICES_CONTENT.center.tallMedia.alt}
            />
          </div>

          {/* Right column */}
          <div className="col-span-12 md:col-span-4 space-y-4 md:space-y-6">
            {SERVICES_CONTENT.right.infos.map((it, i) => (
              <InfoCard key={i} title={it.title} subtitle={it.subtitle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services02;
