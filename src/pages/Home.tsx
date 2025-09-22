import React from 'react'
import { Hero, About, Services, Projects } from '@/components/home'
import { Footer } from '@/components/layouts'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </>
  )
}

export default Home