import React from "react";
import AboutHero from "@/components/about/aboutHero";
import TeamNames from "@/components/about/teamNames";
import { Footer } from "@/components/layouts";

const page = () => {
  return (
    <>
      <AboutHero />
      <TeamNames />
      <Footer />
    </>
  );
};

export default page;
