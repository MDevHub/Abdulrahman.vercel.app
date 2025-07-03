import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/images/Profile 2.png';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { id: 'intro', label: 'Home' },
  { id: 'skills', label: 'About' },
  { id: 'works', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

const mobileLinks = [
  { id: 'intro', label: 'Home' },
  { id: 'skills', label: 'About' },
  { id: 'resume', label: 'Resume', isExternal: true, href: 'https://docs.google.com/document/d/1ypZe_zwHp1FlfWae083jjPzwM4N6WZJfWbeaN0BGTmQ/edit?usp=sharing' },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navMenuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between h-20 px-6 md:px-12 transition-colors duration-300 ${
        isScrolled
          ? 'bg-gradient-to-tr from-gray-100 to-blue-100 bg-opacity-80 backdrop-blur-2xl shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className='logo-div w-10 flex'>
        <img src={logo} alt='Logo' className='w-full object-cover' />
      </div>

      {/* Desktop Nav */}
      <div className='hidden md:flex items-center gap-10'>
        {navLinks.map(({ id, label }) => (
          <Link
            key={id}
            activeClass='active'
            to={id}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className='cursor-pointer text-black underline-slide'
            onClick={() => setShowMenu(false)}
          >
            {label}
          </Link>
        ))}

        <a
          href='https://docs.google.com/document/d/1ypZe_zwHp1FlfWae083jjPzwM4N6WZJfWbeaN0BGTmQ/edit?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className='items-center px-8 py-2 border border-black text-black cursor-pointer font-serif relative overflow-hidden group'
        >
          <span className='relative z-10 transition-colors duration-300 group-hover:text-white flex items-center'>
            Resume
          </span>
          <span className='absolute top-0 right-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full -z-10'></span>
        </a>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        aria-label='Toggle menu'
        className='flex flex-col justify-center items-start w-8 h-6 gap-1 cursor-pointer md:hidden'
      >
        <span className='block w-full h-1 bg-black rounded'></span>
        <span className='block w-full h-1 bg-black rounded'></span>
        <span className='block w-4 h-1 bg-black rounded self-end'></span>
      </button>

      {/* Mobile Sidebar */}
      <div
        ref={navMenuRef}
        className={`fixed top-0 right-0 h-screen w-full sm:w-[70%] bg-black z-50 flex flex-col items-center p-4 transition-transform duration-300 ease-in-out md:hidden ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={() => setShowMenu(false)}
          className="self-end text-white mb-4"
        >
          <FaTimes size={28} />
        </button>

        {/* Blur background */}
        <div
          className="absolute inset-0 rounded-l-full bg-gray-700 opacity-20 blur-[100px] pointer-events-none"
          style={{ mixBlendMode: 'screen', filter: 'drop-shadow(0 0 30px rgba(100,100,100,0.15))' }}
        ></div>

        {/* Menu Links */}
        <div className="relative flex flex-col space-y-6 w-full max-w-[full] justify-center flex-grow">
          {mobileLinks.map(({ id, label, isExternal, href }, idx) =>
            isExternal ? (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 text-white  text-xl cursor-pointer font-serif border-b border-white/20 hover:text-gray-500 transition duration-300 fade-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {label}
              </a>
            ) : (
              <Link
                key={idx}
                activeClass="active"
                to={id}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setShowMenu(false)}
                className="w-full px-6 py-4 text-white text-xl cursor-pointer font-serif border-b border-white/20 hover:text-gray-500 transition duration-300 fade-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {label}
              </Link>
            )
          )}
        </div>

        <style>{`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-up {
            animation: fadeUp 0.4s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </div>
    </nav>
  );
};

export default Navbar;
