import './HeroImgStyles.css'
import i2 from '../assets/i2.jpg';
import {Link} from 'react-router-dom'
import React from 'react'

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={i2} alt='i2' width={"100%"} height={"100%"}/>
      </div>
      <div className='content'>
        <p>HI, I'M A STUDENT.</p>
        <h1>REACT DEVELOPER.</h1>
        <div>
          <Link to='/project' className='btn'>Projects</Link>
          <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
