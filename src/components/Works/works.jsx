import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/images/portfolio-1.jpeg'
import Portfolio2 from '../../assets/images/portfolio-2.png'
import Portfolio3 from '../../assets/images/portfolio-3.png'
import Portfolio4 from '../../assets/images/portfolio-4.png'
import Portfolio5 from '../../assets/images/portfolio-5.jpeg'
import Portfolio6 from '../../assets/images/portfolio-6.jpeg'

const Works = () => {
   return (
      <section id='works'>
         <div className="worksTitle">My Portfolio</div>

         <span className="workDesc" id='desc-w'>
            I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am exited to bring my skilss and experience to help busisnesses achieve their goals and create a strong online presence.
         </span>   
         <div className="worksImgs">
            <div className='workSection' id='reverse'>
               <a href="https://news-mag-sable.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className='works-div' >
                     <img src={Portfolio1} alt="Portfolio1" className="worksImg" /> 
                     <div className="hover">
                        <p>Go to Project</p>
                     </div> 
                  </div>
               </a>
               <div>
                  <h2>01</h2>
                  <h1>News Mag</h1>
                  <p id='info'>A News magazine application where you get information, images and latest News on the most trending, popular, top rated, simiar News all up to date.</p>
                  <a href="https://news-mag-sable.vercel.app/" id='anchor' target="_blank" rel="noopener noreferrer">Go to Project</a>
               </div>
            </div>

            <div className='workSection'>
               <div>
                  <h2>02</h2>
                  <h1>Pleno</h1>
                  <p id='info'>An Autonomous operating system building an advanced operating system for UAV's</p>
                  <a href="https://mdevhub.github.io/MDevHub-Pleno/" id='anchor' target="_blank" rel="noopener noreferrer">Go to Project</a>
               </div>
               <a href="https://mdevhub.github.io/MDevHub-Pleno/" target="_blank" rel="noopener noreferrer">
                  <div className="works-div"><img src={Portfolio4} alt="Portfolio4" className="worksImg" />
                     <div className="hover">
                        <p>Go to Project</p>
                     </div>
                  </div>
               </a>
            </div>

            <div className='workSection' id='reverse'>
               <a href="https://markkodev.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="works-div">
                     <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
                        <div className="hover">
                           <p>Go to Project</p>
                        </div>
                  </div>
               </a>
               <div>
                  <h2>03</h2>
                  <h1>Markko </h1>
                  <p id='info'>A News magazine application where you get information, images and latest News on the most trending, popular, top rated, simiar News all up to date.</p>
                  <a href="https://markkodev.vercel.app/" id='anchor' target="_blank" rel="noopener noreferrer">Go to Project</a>
               </div>
            </div>

            <div className='workSection'>
               <div>
                  <h2>04</h2>
                  <h1>Scape Walkers </h1>
                  <p id='info'>A News magazine application where you get information, images and latest News on the most trending, popular, top rated, simiar News all up to date.</p>
                  <a href="https://mdevhub.github.io/scape-walks/" id='anchor' target="_blank" rel="noopener noreferrer">Go to Project</a>
               </div>
               <a href="https://mdevhub.github.io/scape-walks/" target="_blank" rel="noopener noreferrer">
                  <div className="works-div">
                     <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
                        <div className="hover">
                           <p>Go to Project</p>
                        </div>
                     </div>
                  </a>
            </div>

            <div className='workSection' id='reverse'>
               <a href="https://hulu-movies-vercel-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="works-div">
                     <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
                        <div className="hover">
                           <p>Go to Project</p>
                        </div>
                  </div>
               </a>
               <div>
                  <h2>05</h2>
                  <h1>Movies HUb</h1>
                  <p id='info'>A movie web application where you get information, images and trailer on the most trending, popular, top rated, simiar movies and Tv series all up to date.</p>
                  <a href="https://hulu-movies-vercel-app.vercel.app/" id='anchor' target="_blank" rel="noopener noreferrer">Go to Project</a>
               </div>
            </div>

            <div className='workSection'>
               <div>
                  <h2>06</h2>
                  <h1>Clademy Web</h1>
                  <p id='info'>A movie web application where you get information, images and trailer on the most trending, popular, top rated, simiar movies and Tv series all up to date.</p>
                  <a href="https://mdevhub.github.io/Clademy/" id='anchor' target="_blank" rel="noopener noreferrer">Go to Project</a>
               </div>
               <a href="https://mdevhub.github.io/Clademy/" target="_blank" rel="noopener noreferrer">
                  <div className="works-div">
                     <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
                        <div className="hover">
                           <p>Go to Project</p>
                        </div>
                  </div>
               </a>
            </div>
         </div>
         <a href='https://github.com/MDevHub' target="_blank" rel="noopener noreferrer" id='see'>
            <button className="workBtn">See more </button>
         </a>
      </section>
   )
}

export default Works