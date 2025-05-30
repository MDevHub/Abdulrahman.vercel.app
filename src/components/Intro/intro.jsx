import React from 'react'
import bg from '../../assets/images/image.png'
import { Link } from 'react-scroll'

const Intro = () => {
   return (
      <section 
         
         id="intro"
         className="relative flex flex-col lg:flex-row justify-between items-center w-full px-6 sm:px-8 pt-[100px] sm:pt-[130px] lg:pr-28 md:pt-[150px] pb-12 overflow-hidden"
         style={{ minHeight: 'calc(100vh)' }}
      >
         {/* Text content */}
         <div className="z-10 w-full text-center lg:text-left lg:px-4 text-black flex flex-col items-center lg:items-start">
            <h1 className="text-2xl sm:text-5xl font-semibold font-sans mb-4">
               AbdulRahman Dev
               <span className="inline-block rounded-full ml-1">.</span>
            </h1>
            <p className="text-lg sm:text-xl font-light mb-6 lg:max-w-lg">
               I am an experienced{' '}
               <span className="font-serif font-bold">Frontend Developer </span>
               specializing in building visually engaging, user-friendly websites with a strong focus on usability and modern design principles.
            </p>
            <Link to="contact" smooth={true} offset={-70} duration={500}>
               <button data-aos='fade-up' data-aos-delay='600' className="relative group flex items-center px-8 py-2 border border-black rounded-full cursor-pointer bg-transparent overflow-hidden text-black lg:self-start">
                  <span className="absolute top-0 right-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full -z-10"></span>
                  <span data-aos='fade-up' data-aos-delay='900' className="relative group-hover:text-white transition-colors duration-300">Hire Me</span>
               </button>
            </Link>
         </div>

         {/* Circle container with image */}
         <div
            className="cursor-pointer relative mt-12 lg:mt-0 w-full sm:max-w-[350px] lg:max-w-[350px] min-h-2 sm:h-[350px] rounded-full bg-gradient-to-t from-gray-100 to-slate-500 shadow-lg overflow-hidden flex items-center justify-center"
            style={{ maxHeight: 'calc(100vh - 140px)' }} // keeps container max height within viewport minus padding
         >
            <img
            data-aos='fade-up' data-aos-delay='600'
            src={bg}
            alt="Profile"
            className="object-contain w-[70%] h-[full] transition-transform duration-500 ease-in-out"
         />

         </div>
      </section>
   )
}

export default Intro
