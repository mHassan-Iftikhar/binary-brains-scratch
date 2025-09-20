'use client';

import React from 'react'
import Home from '@/components/home/page'
import About from './about/page'
import ServicesPage from './services/page'
import ProjectsPage from './projects/page'
import Footer from '@/components/layouts/Footer'

const page = () => {


  return (
    <>
      <Home />
      <About />
      <ServicesPage />
      <ProjectsPage />
      <Footer />
    </>
  )
}

export default page