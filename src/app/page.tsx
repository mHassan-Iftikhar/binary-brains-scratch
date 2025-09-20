'use client';

'use client';

import React from 'react'
import Home from '@/components/home/page'
import About from '@/components/about/page'
import ServicesPage from '@/components/services/page'
import ProjectsPage from './projects/page'

const page = () => {
  // Add proper image data for the carousel
  const projectImages = [
    {
      src: "/images/01.png",
      alt: "Project 1 - Web Development",
    },
    {
      src: "/images/02.png",
      alt: "Project 2 - Mobile App",
    },
    {
      src: "/images/03.png",
      alt: "Project 3 - UI/UX Design",
    },
    {
      src: "/images/04.png",
      alt: "Project 4 - E-commerce",
    },
    {
      src: "/images/05.png",
      alt: "Project 5 - Dashboard",
    },
    {
      src: "/images/06.png",
      alt: "Project 6 - Landing Page",
    },
  ];

  return (
    <>
      <Home />
      <About />
      <ServicesPage />
      <ProjectsPage images={projectImages} />
    </>
  )
}

export default page