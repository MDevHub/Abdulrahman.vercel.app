import React from 'react'
import './works.css'
import { Link } from 'react-scroll'
import Portfolio1 from '../../assets/images/portfolio-1.png'
import Portfolio2 from '../../assets/images/portfolio-2.png'
import Portfolio3 from '../../assets/images/portfolio-4.png'
import Portfolio4 from '../../assets/images/portfolio-44.png'
import Portfolio5 from '../../assets/images/portfolio-5.jpeg'
import Portfolio6 from '../../assets/images/portfolio-6.jpeg'

const Works = () => {
   return (
      <section data-aos='fade-up' data-aos-delay='1000' id='works' className='bg-gradient-to-bl from-gray-200 to-sl'>
         <div className="worksTitle">My Portfolio</div>

         <span className="workDesc" id='desc-w'>
            I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am exited to bring my skilss and experience to help busisnesses achieve their goals and create a strong online presence.
         </span>   
         <div className="worksImgs">
            <div className='workSection' id='reverse'>
               <a href="https://elexy-store.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className='works-div' >
                     <img src={Portfolio1} alt="Portfolio1" className="worksImg" /> 
                     <div className="hover">
                        <p>Go to Project</p>
                     </div> 
                  </div>
               </a>
               <div>
                  <h2>01</h2>
                  <h1>Elexy E-commerce Store</h1>
                  <p id='info'>“An elegant online store for [fashion/electronics/etc.], designed for seamless browsing, easy checkout, and mobile responsiveness, all powered by a clean and intuitive interface</p>
                  <a href="https://elexy-store.vercel.app/" id='anchor' target="_blank" rel="noopener noreferrer">Go to Project</a>
               </div>
            </div>

            <div className='workSection'>
               <div>
                  <h2>02</h2>
                  <h1>Bloom Clinic</h1>
                  <p id='info'>A clean and modern website for a medical clinic, designed to showcase services, book appointments, and provide essential health information to patients.</p>
                  <a href="https://bloom-clinic-navy.vercel.app/" id='anchor' target="_blank" rel="noopener noreferrer">Go to Project</a>
               </div>
               <a href="https://bloom-clinic-navy.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="works-div"><img src={Portfolio4} alt="Portfolio4" className="worksImg" />
                     <div className="hover">
                        <p>Go to Project</p>
                     </div>
                  </div>
               </a>
            </div>

            <div className='workSection' id='reverse'>
               <a href="https://vodimovieweb.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="works-div">
                     <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
                        <div className="hover">
                           <p>Go to Project</p>
                        </div>
                  </div>
               </a>
               <div>
                  <h2>03</h2>
                  <h1>Vodi Movie </h1>
                  <p id='info'>A movie discovery platform where users can explore films by genre from animation to comedy to drama with a clean UI and smooth navigation.</p>
                  <a href="https://vodimovieweb.vercel.app/" id='anchor' target="_blank" rel="noopener noreferrer">Go to Project</a>
               </div>
            </div>

            <div className='workSection'>
               <div>
                  <h2>04</h2>
                  <h1>Pleno </h1>
                  <p id='info'>An innovative drone tech company building autonomous systems and advanced control solutions for UAVs.</p>
                  <a href="https://plenoelectronics.vercel.app/" id='anchor' target="_blank" rel="noopener noreferrer">Go to Project</a>
               </div>
               <a href="https://plenoelectronics.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="works-div">
                     <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
                        <div className="hover">
                           <p>Go to Project</p>
                        </div>
                     </div>
                  </a>
            </div>

            <div className='workSection' id='reverse'>
               <a href="https://markkodev.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="works-div">
                     <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
                        <div className="hover">
                           <p>Go to Project</p>
                        </div>
                  </div>
               </a>
               <div>
                  <h2>05</h2>
                  <h1>Markko</h1>
                  <p id='info'>A modern online marketplace platform built to help businesses showcase and sell their products efficiently with a sleek, user-friendly interface.</p>
                  <a href="https://markkodev.vercel.app/" id='anchor' target="_blank" rel="noopener noreferrer">Go to Project</a>
               </div>
            </div>

            <div className='workSection'>
               <div>
                  <h2>06</h2>
                  <h1>Scape Walkers</h1>
                  <p id='info'>A web platform designed for construction and architecture teams to manage projects, showcase work, and collaborate on building solutions efficiently.</p>
                  <a href="https://scapewalkers.vercel.app/" id='anchor' target="_blank" rel="noopener noreferrer">Go to Project</a>
               </div>
               <a href="https://scapewalkers.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="works-div">
                     <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
                        <div className="hover">
                           <p>Go to Project</p>
                        </div>
                  </div>
               </a>
            </div>
         </div>
         
        <div className="flex justify-center">
   <a
      href='https://github.com/MDevHub'
      target="_blank" rel="noopener noreferrer" id='see'
   >
      <button
            className="relative group content-center flex items-center px-8 py-2 border border-black rounded-full cursor-pointer bg-transparent overflow-hidden text-black lg:self-start"
         >
         <span className="absolute top-0 right-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full -z-10"></span>
         <span
            className="relative group-hover:text-white transition-colors duration-300"
         >
            See More
         </span>
      </button>
  </a>
</div>

      </section>
   )
}

export default Works