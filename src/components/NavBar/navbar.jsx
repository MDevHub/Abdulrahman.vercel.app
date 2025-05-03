import React, { useState, useEffect, useRef } from 'react'
import './navbar.css'
import logo from '../../assets/images/logo.png'
import contactImg from '../../assets/images/contact.png'
import { Link } from 'react-scroll'
import menu from '../../assets/images/menu.png'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);

   const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const navMenuRef = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  if (showMenu) {
    document.addEventListener('mousedown', handleClickOutside);
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [showMenu]);


  return (
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>

         <div className='logo-div'>
            <img src={logo} alt="Logo" className='logo' />
         </div>

         <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Home </Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Clients </Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Portfolio </Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Clients </Link>
         </div>

         <button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
         }}>
            <img src={contactImg} alt="" className='desktopMenuImg'/>
            Contact Me
         </button>

         <FaBars className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
         <div ref={navMenuRef} className={`navMenu ${showMenu ? 'open' : ''}`}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} > Home </Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Clients </Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Portfolio </Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Clients </Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Contact </Link>
         </div>

      </nav>
  )
}

export default Navbar