import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundImg from '../components/BackgroundImg';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <BackgroundImg heading='ABOUT' text='I am a friendly Front-End Developer'/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
