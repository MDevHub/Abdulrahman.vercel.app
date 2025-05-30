import React, { useState, useEffect, useRef } from 'react'
import logo from '../../assets/images/logo.png'
import contactImg from '../../assets/images/contact.png'
import { Link } from 'react-scroll'
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
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between h-20 px-6 md:px-12 transition-colors duration-300 ${
        isScrolled ? 'bg-gradient-to-tr from-gray-400 to-gray-600 bg-opacity-80 backdrop-blur-2xl shadow-md' : 'bg-transparent'
      } text-lg`}
    >
      <div className='logo-div w-10 flex'>
        <img src={logo} alt="Logo" className='w-full object-cover' />
      </div>

      {/* Desktop menu with underline-slide */}
      <div className="hidden md:flex gap-10">
        <Link
          activeClass='active'
          to='intro'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer text-black underline-slide"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass='active'
          to='skills'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="cursor-pointer text-black underline-slide"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass='active'
          to='works'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="cursor-pointer text-black underline-slide"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
      </div>

      {/* Contact button updated to scroll */}
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="hidden md:flex items-center px-8 py-2 border border-black text-black cursor-pointer font-serif relative overflow-hidden group"
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center">
          Contact
        </span>
        <span className="absolute top-0 right-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full -z-10"></span>
      </Link>

      <FaBars className='mobMenu block md:hidden h-6 w-6 cursor-pointer text-black' onClick={() => setShowMenu(!showMenu)} />

      {/* Mobile menu */}
      <div
        ref={navMenuRef}
        className={`fixed top-0 right-0 h-screen w-64 sm:w-98 bg-gradient-to-tr from-slate-100 to-gray-300 backdrop-blur-xl shadow-lg z-50 flex flex-col items-start p-8 transition-transform duration-300 ease-in-out md:hidden ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        } space-y-4`}
      >
        {['intro', 'skills', 'works', 'contact'].map((section, idx) => {
          const label = section === 'intro' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1);
          return (
            <Link
              key={idx}
              activeClass='active'
              to={section}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="w-full px-6 py-4 text-gray-900 text-xl cursor-pointer font-serif border-b hover:text-black transition-colors duration-300 underline-slide"
              onClick={() => setShowMenu(false)}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  )
}

export default Navbar;
