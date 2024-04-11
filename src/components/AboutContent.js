import './AboutContentStyles.css'
import {Link} from 'react-router-dom'
import i1 from '../assets/i1.jpg'
import i2 from '../assets/i2.jpg'
import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who am I?</h1>
        <p>update this as you want </p>
        <Link to='/contact'>
            <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={i1} className='img' alt='true'/>
            </div>
            <div className='img-stack bottom'>
                <img src={i2} className='img' alt='true'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
