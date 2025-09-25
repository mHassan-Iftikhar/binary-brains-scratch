import React from "react";
import { ProjectHero, Skiper52, Skiper53 } from "@/components/work";
import { Header, Footer } from "@/components/layouts";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <ProjectHero />
      <Skiper52 />
      <Skiper53 />
      <Footer />
    </div>
  );
};

export default page;
