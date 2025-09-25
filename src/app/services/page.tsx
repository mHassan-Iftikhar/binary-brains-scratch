import React from "react";
import ServicesHero from "@/components/services/servicesHero";
import { Header, Footer } from "@/components/layouts";
import Services02 from "@/components/services/services02";

const page = () => {
  return (
    <>
      <Header />
      <Services02 />
      <ServicesHero />
      <Footer />
    </>
  );
};

export default page;
