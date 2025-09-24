"use client";

import React from "react";
import { Hero, About, Services, Projects } from "@/components/home";
import Footer from "@/components/layouts/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}
