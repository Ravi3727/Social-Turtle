import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/NavBar'
import Footer from './components/homePageSections/Footer'
import ScrollToTop from './components/scrollToTop'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
