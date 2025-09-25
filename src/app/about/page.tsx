import React from "react";
import AboutHero from "@/components/about/aboutHero";
import TeamNames from "@/components/about/teamNames";
import { Header, Footer } from "@/components/layouts";

const page = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <TeamNames />
      <Footer />
    </>
  );
};

export default page;
