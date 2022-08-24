import React from 'react'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Hblog from './Hblog'
import Hero from './hero/Hero'
import Hprice from './Hprice'
import Testimonial from './testimonial/Testimonial'

const Home = () => {
  return (
    <>
      <Hero/>
      <AboutCard/>
      <HAbout/>
      <Testimonial/>
      <Hblog/>
      <Hprice/>
    </>
  )
}

export default Home
