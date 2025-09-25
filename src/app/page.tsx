"use client";

import React from "react";
import { Hero, About, Services, Projects } from "@/components/home";
import { Header, Footer } from "@/components/layouts";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}
