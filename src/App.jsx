import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import Intro from "./components/Intro/intro"
import Navbar from "./components/NavBar/navbar"
import Skills from "./components/Skills/skills"
import Works from "./components/Works/works"


function App() {
  useEffect (() => {
    Aos.init ({
      duration: 1000,
    });
  },[]);
  return (
    <div className="App bg-gradient-to-tl from-slate-100 to-gray-300" >

      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
