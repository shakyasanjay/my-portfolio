import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import './FooterStyle.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                <div>
                    <p>123 Housing Society.</p>                    
                    <p>Nepal</p>                    
                </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                +977-9803243792</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                shakyasanjay730@gmail.com</h4>
            </div>
        </div>

        <div className='right'>
            <h4>About Myself</h4>
            <p>Update this as you want later</p>
            <div className='social'>
                <FaFacebook size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                <FaInstagram size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                <FaLinkedin size={20} style={{color: '#fff', marginRight: '2rem'}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
