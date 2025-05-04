import React from 'react'
import './intro.css'
import bg from '../../assets/images/image.png'
import btnImg from '../../assets/images/hireme.png'
import { Link } from 'react-scroll'
import ScrollFadeIn from '../ScrollFadeIn';

const Intro = () => {
  return (
   <ScrollFadeIn>
      <section id='intro'>
         <div className='introContent'>
            <h1 className='introText'> AbdulRahman Dev<span id='dot'>.</span></h1>
            <p className="introPara">I am a skilled <span id='front'>Frontend Developer </span> with experience in creating visually appealing and user friendly websites.</p>
            <Link> 
               <button className="btn">
                  <img src={btnImg} alt="Hire" className='btnImg'/>
                  Hire Me
               </button>
            </Link>
         </div>
         <div className='bgDiv'>
            <img src={bg} alt="Profile" className='bg'/>
         </div>
      </section>
   </ScrollFadeIn>
  )
}

export default Intro 