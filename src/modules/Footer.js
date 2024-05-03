import React from 'react'
import SocialIcons from './Sociallinks'
import avtar from '../imgs/thumb avtar.png';
import '../css/Footer.css';

const Footer = () => {
  return (
    <div className='footer_main'>
        <div className='footer_cont'>
            <img className='footer_img' src={avtar} alt='hii' />
            <p>It's great to hear that you're eager to learn and open to feedback on your website and content. While I can certainly provide assistance and guidance, please note that I don't have the ability to access external websites or platforms to view your content directly. 

If you have specific questions or encounter issues with your website, you can describe the problem or provide code snippets, and I'll do my best to help you troubleshoot and find solutions. Feel free to ask questions or seek advice on any web development or content-related topics, and I'll be here to assist you.</p>
        </div>
        <h2>We are just one click away</h2>
        <SocialIcons/>
    </div>
  )
}

export default Footer
