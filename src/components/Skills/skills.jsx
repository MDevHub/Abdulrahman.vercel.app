import React from 'react'
import UIDesign from '../../assets/images/ui-design.png'
import WebDesign from '../../assets/images/web-design.png'
import AppDesign from '../../assets/images/app-design.png'

const Skills = () => {
  return (
    <section
      id='skills'
      className="relative w-full flex flex-col items-center justify-center text-center px-4 bg-white pb-12"
    >
   {/* Smaller grey blurred circles with shadow */}
<div className="pointer-events-none absolute top-4 left-4 w-28 h-28 bg-gray-500 rounded-full opacity-60 filter blur-2xl drop-shadow-lg z-0"></div>
<div className="pointer-events-none absolute bottom-6 right-6 w-36 h-36 bg-gray-500 rounded-full opacity-60 filter blur-3xl drop-shadow-lg z-0"></div>
<div className="pointer-events-none absolute bottom-10 left-10 w-24 h-24 bg-gray-500 rounded-full opacity-60 filter blur-2xl drop-shadow-lg z-0"></div>

      <span data-aos='fade-up' data-aos-delay='300' className="text-4xl font-semibold mt-12 mb-6 text-black font-serif">What I do</span>

      <span data-aos='fade-up' data-aos-delay='800' className="text-base sm:text-lg max-w-3xl text-black font-sans mb-12">
        I'm a creative frontend developer passionate about turning ideas into scalable, user-focused web products.
        Skilled in HTML, CSS, JavaScript, TypeScript, and React, I craft clean, strategic solutions that deliver standout user experiences.
      </span>

      <div  className="w-full max-w-5xl flex flex-col gap-6">
        <div data-aos='zoom-in-left' data-aos-delay='900' className="flex flex-col items-center bg-black/10 p-6 rounded-md text-black">
          <img src={UIDesign} alt="UIDesign" className="h-12 w-12 rounded-full mb-4" />
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
            <p className="text-sm sm:text-base">
              I'm a UI/UX designer passionate about creating intuitive, visually engaging digital experiences that people genuinely enjoy using.
            </p>
          </div>
        </div>

        <div data-aos='zoom-in-right' data-aos-delay='900' className="flex flex-col items-center bg-black/10 p-6 rounded-md text-black">
          <img src={WebDesign} alt="WebDesign" className="h-12 w-12 rounded-full mb-4" />
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Web Design</h2>
            <p className="text-sm sm:text-base">
              Passionate about clean code and cleaner design, I craft modern, engaging websites that tell compelling stories and deliver real results.
            </p>
          </div>
        </div>

        <div data-aos='zoom-in-left' data-aos-delay='900' className="flex flex-col items-center bg-black/10 p-6 rounded-md text-black">
          <img src={AppDesign} alt="AppDesign" className="h-12 w-12 rounded-full mb-4" />
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">App Design</h2>
            <p className="text-sm sm:text-base">
              I transform ideas into functional applications by blending creativity. I build ideas you want on the web. Strategic driven solutions for the best user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
