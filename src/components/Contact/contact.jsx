import React, { useRef, useState, useEffect } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
   const form = useRef();
   const [emailSent, setEmailSent] = useState(false);
   const [isSending, setIsSending] = useState(false); // NEW

   const sendEmail = (e) => {
      e.preventDefault();
      setIsSending(true); // NEW

      emailjs
         .sendForm('service_ofx32qg', 'template_kmq9a8q', form.current, '_jDzLmQ3di9dD6C0H')
         .then((result) => {
               console.log(result.text);
               e.target.reset();
               setEmailSent(true);
               setTimeout(() => setEmailSent(false), 1500);
               setIsSending(false); // NEW
            }, (error) => {
               console.log('FAILED...', error.text);
               setIsSending(false); // NEW
         });
   };

   return (
      <section id="contactPage">
         <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">
               Please fill out the form below to discuss any work opportunities.
            </span>

            <form className='contactForm' ref={form} onSubmit={sendEmail} data-aos="fade-up" data-aos-delay="800">
               <input type="text" className='name' placeholder='Your Name' name='name' required />
               <input type="tel" className="email" placeholder='Your Phone Number' name='tel' required />
               <input type="email" className="email" placeholder='Your Email' name='email' required />
               <textarea className='msg' name="message" rows='5' placeholder='Your Message' required></textarea>

               {emailSent && <div className="emailSentMsg" data-aos="fade-in">Email Sent! ✅</div>}

               {/* Spinner directly above the submit button */}
               {isSending && (
                  <div className="flex justify-center items-center mb-2">
                     <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  </div>
               )}

               <button
                  type="submit"
                  value="Send"
                  className="my-10 relative group content-center flex items-center px-8 py-2 border border-black rounded-full cursor-pointer bg-transparent overflow-hidden text-black"
               >
                  <span className="absolute top-0 right-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full -z-10"></span>
                  <span className="relative group-hover:text-white transition-colors duration-300">
                     Submit
                  </span>
               </button>
            </form>
         </div>
      </section>
   );
};

export default Contact;
