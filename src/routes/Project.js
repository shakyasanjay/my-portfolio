import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundImg from '../components/BackgroundImg';

const Project = () => {
  return (
    <div>
      <Navbar />
      <BackgroundImg heading='PROJECT.' text='Some of my recent works'/>
      <Footer />
    </div>
  )
}

export default Project
