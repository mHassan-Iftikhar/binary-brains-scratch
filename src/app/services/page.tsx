import React from "react";
import SectionHero from "@/components/services/sectionHero";
import { Header, Footer } from "@/components/layouts";
import Services02 from "@/components/services/services02";

const page = () => {
  return (
    <>
      <Header />
      <Services02 />
      <SectionHero />
      <Footer />
    </>
  );
};

export default page;
