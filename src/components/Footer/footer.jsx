import React from 'react'
import { FaReact, 
         FaHeart,
         FaTwitter, 
         FaLinkedin,
         FaGithub } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="bg-black text-white px-6 py-20 text-center space-y-6">
   <h2 className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto">
      Passionate about turning ideas into scalable products.
   </h2>
   
   <div className="flex justify-center gap-6 flex-wrap">
      <a href="https://twitter.com/Hard2kill_AO" target="_blank" rel="noopener noreferrer">
         <FaTwitter size={30} className="text-white/75 hover:text-white transition" />
      </a>
      <a href="https://www.linkedin.com/in/abdulrahman-musbaudeen-3a0127369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
         <FaLinkedin size={30} className="text-white/75 hover:text-white transition" />
      </a>
      <a href="https://github.com/MDevHub" target="_blank" rel="noopener noreferrer">
         <FaGithub size={30} className="text-white/75 hover:text-white transition" />
      </a>
   </div>

   <p className="text-sm text-white/70">
      &#169; 2025 Musbaudeen Abdul-Rahman. All rights reserved.
   </p>

   <p className="text-sm flex justify-center items-center gap-1 text-white/70">
      Built using <FaReact className="text-[#61dafb]" /> with <FaHeart className="text-red-500" />
   </p>
</footer>

   )
}

export default Footer