import React from 'react'
import './footer.css'
import { FaReact, 
         FaHeart,
         FaTwitter, 
         FaLinkedin, 
         FaGithub } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className='footer'>
         <h2>Passionate about turning ideas into scalable products. </h2>
         <div className="links">
            <a href="https://twitter.com/Hard2kill_AO" target="_blank" rel="noopener noreferrer">
               <FaTwitter size={30} color="#ffffffc2"/>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
               <FaLinkedin size={30} color="#ffffffc2"/>
            </a>
            <a href="https://github.com/MDevHub" target="_blank" rel="noopener noreferrer">
               <FaGithub size={30} color="#ffffffc2"/>
            </a>
         </div>
         <p id='copyright'>&#169; 2025 Musbaudeen Abdul-Rahman. All right reserved.</p>
         <p id='built'>Built using <FaReact color="#61dafb" id='fa'/> with <FaHeart color='red' id='fa'/></p>
      </footer>
   )
}

export default Footer