import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'


const Contact = () => {
   const form = useRef()
   const [emailSent, setEmailSent] = useState(false)

   const sendEmail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm('service_ofx32qg', 'template_kmq9a8q', form.current, '_jDzLmQ3di9dD6C0H')
         .then((result) => {
               console.log(result.text)
               e.target.reset()
               setEmailSent(true)
               setTimeout(() => setEmailSent(false), 2000) // Hide message after 2 seconds
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
               <input type="text" className='name' placeholder='Your Name' name='name' />
               <input type="tel" className="email" placeholder='Your Phone Number' name='tel' />
               <input type="email" className="email" placeholder='Your Email' name='email' />
               <textarea className='msg' name="message" rows='5' placeholder='Your Message'></textarea>
               {emailSent && <div className="emailSentMsg">Email Sent! ✅</div>}
               <button type='submit' className="submitBtn">Submit</button>
            </form>
         </div>
      </section>
   )
}
export default Contact