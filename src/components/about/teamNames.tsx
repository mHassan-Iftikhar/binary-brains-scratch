"use client";
import React, { useState } from "react";

type TeamMember = {
  role: string;
  name: string;
  highlight?: boolean;
};

const members: TeamMember[] = [
  { role: "Frontend Developer", name: "Hassan Iftikhar" },
  { role: "Frontend Developer", name: "PIERRE-LUC PAIEMENT" },
  { role: "Full Stack Developer", name: "CARL GODBOUT" },
  { role: "Full Stack Developer", name: "PHILIPPE PERREAULT" },
  { role: "Backend Developer", name: "CAMILLE BRIÈRE" },
  { role: "Backend Developer", name: "CLAIRE ROBERT", highlight: true },
  { role: "UI/UX Designer", name: "ALEX SAUVAGEAU" },
  { role: "UI/UX Designer", name: "MELANIE LAVIOLETTE" },
  { role: "Wordpress Developer", name: "MICHÈLE RIENDEAU" },
  { role: "Wordpress Developer", name: "MEGGIE LAVOIE" },
];

const Row = ({
  role,
  name,
  isActive,
  onHover,
}: {
  role: string;
  name: string;
  isActive: boolean;
  onHover: () => void;
}) => {
  return (
    <div
      onMouseEnter={onHover}
      className={`grid grid-cols-12 items-center border-y border-black/10 transition-colors duration-200 ${
        isActive ? "bg-[#0f7ac6] text-black" : "bg-white text-black"
      }`}
    >
      <div className="col-span-6 sm:col-span-6 md:col-span-6 py-6 px-4 text-sm sm:text-base">
        {role}
      </div>
      <div className="col-span-6 sm:col-span-6 md:col-span-6 py-6 px-4 text-right text-lg sm:text-2xl md:text-3xl font-semibold tracking-wide">
        {name}
      </div>
    </div>
  );
};

const TeamNames: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white px-4 lg:px-10 pb-20">
      {members.map((m, i) => (
        <Row
          key={`${m.role}-${m.name}`}
          role={m.role}
          name={m.name}
          isActive={
            activeIndex === i || (!!m.highlight && activeIndex === null)
          }
          onHover={() => setActiveIndex(i)}
        />
      ))}
    </section>
  );
};

export default TeamNames;
