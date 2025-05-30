import React from 'react'
import bg from '../../assets/images/image.png'
import btnImg from '../../assets/images/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
   return (
      <section
      id="intro"
      className="relative flex flex-col lg:flex-row justify-between items-center w-full px-6 sm:px-8 pt-30 pb-12 overflow-hidden"
      style={{ minHeight: 'calc(100vh - 4rem)' }}
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
               <button className="relative group flex items-center px-8 py-2 border border-black rounded-full cursor-pointer bg-transparent overflow-hidden text-black lg:self-start">
                  <span className="absolute top-0 right-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full -z-10"></span>
                  <span className="relative group-hover:text-white transition-colors duration-300">Hire Me</span>
               </button>
            </Link>
         </div>

         {/* Image wrapper for hover scaling */}
         <div className="relative mt-12 lg:mt-0 w-full sm:max-w-[70%] lg:w-[60%] h-auto rounded-full overflow-hidden">
            <img
               src={bg}
               alt="Profile"
               className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
               style={{ pointerEvents: 'none' }}
            />
         </div>
      </section>
   )
}

export default Intro
