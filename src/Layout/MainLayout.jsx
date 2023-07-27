import React from 'react'
import Navbar from '../Components/Navbar'
import LandingPage from '../Components/LandingPage'
import Papers from '../Components/Cards/Papers'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <LandingPage />
        <Papers />
    </>
  )
}

export default MainLayout