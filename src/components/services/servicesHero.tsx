import React from "react";

type CardBase = { id: string };
type BrandBlue = CardBase & { type: "brand"; title: string };
type DarkLogo = CardBase & { type: "logo" };
type Info = CardBase & { type: "info"; name: string; subtitle: string };
type Card = BrandBlue | DarkLogo | Info;

const CARD_SIZE = "w-[260px] h-[140px]";

const BrandCard = ({ title }: { title: string }) => (
  <div
    className={`relative ${CARD_SIZE} rounded-xl bg-[#0f7ac6] text-white overflow-hidden border border-white/10`}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="select-none text-6xl font-extrabold tracking-tight">
        bB
      </span>
    </div>
    <div className="absolute left-4 top-3 text-[10px] leading-3 opacity-90">
      <div>Software Solutions</div>
      <div className="opacity-80">Your Growth Co.</div>
    </div>
  </div>
);

const LogoCard = () => (
  <div
    className={`relative ${CARD_SIZE} rounded-xl bg-[#1E1E1E] overflow-hidden border border-white/10`}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="select-none text-[92px] font-extrabold text-black/30 leading-none">
        01
      </span>
    </div>
  </div>
);

const InfoCard = ({ name, subtitle }: { name: string; subtitle: string }) => (
  <div
    className={`relative ${CARD_SIZE} rounded-xl bg-[#2A2A2A] text-white overflow-hidden border border-white/10 p-4`}
  >
    <div className="text-base md:text-lg font-semibold">{name}</div>
    <div className="text-xs md:text-sm opacity-70 mt-1">{subtitle}</div>
    <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white/20" />
  </div>
);

const CONTENT: { columns: Card[][] } = {
  columns: [
    [
      { id: "c1r1", type: "logo" },
      { id: "c1r2", type: "brand", title: "Brand" },
      {
        id: "c1r3",
        type: "info",
        name: "Web Development",
        subtitle: "Modern websites and web apps",
      },
      { id: "c1r4", type: "logo" },
    ],
    [
      { id: "c2r1", type: "logo" },
      {
        id: "c2r2",
        type: "info",
        name: "App Development",
        subtitle: "iOS, Android, cross‑platform",
      },
      { id: "c2r3", type: "brand", title: "Brand" },
      {
        id: "c2r4",
        type: "info",
        name: "WordPress Development",
        subtitle: "Custom themes, plugins, CMS",
      },
    ],
    [
      { id: "c3r1", type: "logo" },
      {
        id: "c3r2",
        type: "info",
        name: "UI/UX Design",
        subtitle: "Intuitive, accessible interfaces",
      },
      {
        id: "c3r3",
        type: "info",
        name: "Branding & Design",
        subtitle: "Visual identity and assets",
      },
      { id: "c3r4", type: "brand", title: "Brand" },
    ],
    [
      { id: "c4r1", type: "brand", title: "Brand" },
      {
        id: "c4r2",
        type: "info",
        name: "Branding & Design",
        subtitle: "Logos, guidelines, systems",
      },
      { id: "c4r3", type: "logo" },
      {
        id: "c4r4",
        type: "info",
        name: "WordPress Development",
        subtitle: "Sites, stores, CMS",
      },
    ],
  ],
};

const servicesHero = () => {
  return (
    <section className="w-full h-screen bg-[#0D0E10] text-white flex items-center justify-center">
      <div className="flex items-center justify-center gap-5">
        {CONTENT.columns.map((col, colIdx) => (
          <div
            key={colIdx}
            className="flex flex-col items-center justify-center gap-5"
          >
            {col.map((card, rowIdx) => {
              const hidden =
                (colIdx === 0 && rowIdx === 0) ||
                (colIdx === 1 && rowIdx === 3) ||
                (colIdx === 2 && (rowIdx === 0 || rowIdx === 1)) ||
                (colIdx === 3 && rowIdx === 3);
              const wrapperClass = hidden ? "invisible" : "";
              if (card.type === "brand")
                return (
                  <div key={card.id} className={wrapperClass}>
                    <BrandCard title={card.title} />
                  </div>
                );
              if (card.type === "logo")
                return (
                  <div key={card.id} className={wrapperClass}>
                    <LogoCard />
                  </div>
                );
              return (
                <div key={card.id} className={wrapperClass}>
                  <InfoCard name={card.name} subtitle={card.subtitle} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default servicesHero;
