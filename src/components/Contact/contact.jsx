import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'


const Contact = () => {
   const form = useRef()
   const [emailSent, setEmailSent] = useState(false)

   const sendEmail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
             form.current,  process.env.REACT_APP_EMAILJS_USER_ID)
         .then((result) => {
               console.log(result.text)
               e.target.reset()
               setEmailSent(true)
               setTimeout(() => setEmailSent(false), 1500) // Hide message after 2 seconds
            }, (error) => {
               console.log('FAILED...', error.text)
         })
   }

   return (
      <section id="contactPage">
         <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>  


            <form className='contactForm' ref={form} onSubmit={sendEmail}>
               <input type="text" className='name' placeholder='Your Name' name='name' required/>
               <input type="tel" className="email" placeholder='Your Phone Number' name='tel' required/>
               <input type="email" className="email" placeholder='Your Email' name='email' required/>
               <textarea className='msg' name="message" rows='5' placeholder='Your Message' required></textarea>
               {emailSent && <div className="emailSentMsg">Email Sent! ✅</div>}
               <button type='submit' className="submitBtn" value='send'>Submit</button>
            </form>
         </div>
      </section>
   )
}
export default Contact