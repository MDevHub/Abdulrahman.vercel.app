import React from 'react';
import bg from '../../assets/images/image.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section
      id="intro"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Split colored backgrounds */}
      <div className="absolute inset-0 flex z-0">
        <div className="w-1/2 bg-gray-300"></div>
        <div className="w-1/2 bg-slate-100"></div>
      </div>

      {/* Main content with slower fade-in animation */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center px-6 text-center mt-[100px] animate-fadeIn">
        {/* Name and title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif text-black mb-4">
          Musbaudeen A.B<span className="text-black">.</span>
        </h1>

        {/* Tagline with font-sans */}
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-8 font-sans">
          I’m a <span className="text-black font-bold">Frontend Developer</span> who builds smooth, interactive user experiences with clean code and modern design. I build ideas you want on the web.
          Strategic driven solutions for the best user experience.
        </p>

        {/* Hire Me button */}
        <Link to="contact" smooth={true} offset={-70} duration={500}>
          <button
            className="group relative inline-flex items-center px-8 py-3 rounded-full border-2 border-black text-black font-medium cursor-pointer overflow-hidden transition-colors duration-300 ease-in-out
            hover:text-white focus:outline-none focus:ring-4 focus:ring-black/30"
          >
            <span className="relative z-10">Hire Me</span>

            {/* Sliding background */}
            <span
              className="absolute left-0 top-0 w-full h-full bg-black rounded-full
              -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
              aria-hidden="true"
            />
          </button>
        </Link>

        {/* Scroll-down arrow */}
        <div className="mt-12 flex justify-center">
          <Link
            to="skills"
            smooth={true}
            offset={-70}
            duration={500}
            aria-label="Scroll to skills"
            className="cursor-pointer"
          >
            <svg
              className="w-6 h-6 text-black animate-pulse-down"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Slower fade-in animation + pulseDown animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.4s ease-out forwards;
        }

        @keyframes pulseDown {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.6; transform: translateY(6px); }
        }
        .animate-pulse-down {
          animation: pulseDown 0.9s infinite;
        }
      `}</style>
    </section>
  );
};

export default Intro;
