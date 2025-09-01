import React from 'react'
import Section1 from '../components/homePageSections/Section1'
import Services from '../components/homePageSections/Services'
import CaseStudies from '../components/homePageSections/CaseStudies'
import AiVideosSection from '../components/homePageSections/AiVideosSection'
import Clientele from '../components/homePageSections/Clientele'
import Testimonials from '../components/homePageSections/Testimonials'
import TurtleBlogs from '../components/homePageSections/TurtleBlogs'
import { motion, useScroll } from 'framer-motion'

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
<motion.div >
<Section1/>
<Services/>
<CaseStudies/>
<AiVideosSection/>
<Clientele/>
<Testimonials/>
<TurtleBlogs/>

</motion.div>
  )
}

export default Home
