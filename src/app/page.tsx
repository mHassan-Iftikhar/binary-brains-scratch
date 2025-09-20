'use client';

import React from 'react'
import Home from '@/components/home/page'
import About from './about/page'
import ServicesPage from './services/page'
import Carousel_003 from './projects/page'
import Footer from '@/components/layouts/Footer'

const page = () => {

  const projectImages = [
    {
      src: "/images/01.png",
      alt: "Project 1",
    },
    {
      src: "/images/02.png",
      alt: "Project 2",
    },
    {
      src: "/images/03.png",
      alt: "Project 3",
    },
    {
      src: "/images/04.png",
      alt: "Project 4",
    },
    {
      src: "/images/05.png",
      alt: "Project 5",
    },
    {
      src: "/images/06.png",
      alt: "Project 6",
    },
  ];

  return (
    <>
      <Home />
      <About />
      <ServicesPage />
      <Carousel_003 images={projectImages} />
      <Footer />
    </>
  )
}

export default page