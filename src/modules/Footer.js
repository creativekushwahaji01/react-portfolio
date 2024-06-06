import React from 'react'
import SocialIcons from './Sociallinks'
import avtar from '../imgs/thumb avtar.png';
import '../css/Footer.css';

const Footer = () => {
  return (
    <div className='footer_main'>
        <div className='footer_cont'>
            <img className='footer_img' src={avtar} alt='hii' />
            <p>Thank you for taking the time to explore my portfolio. Your interest in my work means a lot to me! If you need any technical assistance, guidance on a project, or if you have a job opportunity that you think would be a great fit for my skills, please don’t hesitate to reach out. I’m always excited to connect with new people and take on new challenges. Let's work together to create something amazing!</p>
        </div>
        <h2>We are just one click away</h2>
        <SocialIcons/>
    </div>
  )
}

export default Footer
