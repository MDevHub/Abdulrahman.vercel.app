	import React from 'react';
	import {
	FaReact,
	FaHeart,
	FaTwitter,
	FaLinkedin,
	FaGithub,
	} from 'react-icons/fa';

	const Footer = () => {
	return (
		<footer className="bg-black space-y-3 text-white px-2 sm:px-4 md:px-12 py-28 relative overflow-hidden min-h-[320px]">

			{/* Background blur circle */}
			<div className="relative z-10 mb-10">
			<div
				className="absolute left-1/2 top-1/2 w-[480px] h-[480px] bg-gray-700 opacity-20 blur-4xl rounded-full
				-translate-x-1/2 -translate-y-1/2 pointer-events-none z-0
				shadow-[0_0_80px_20px_rgba(100,100,100,0.15)]"
				style={{ mixBlendMode: 'screen' }}
			/>
			<h2 className="relative z-10 text-[18px] sm:text-3xl lg:text-4xl font-semibold max-w-3xl mx-auto px-4 text-center leading-snug">
				Let’s build something impactful together.
			</h2>
			</div>

			{/* Tech credit and icons stacked vertically */}
<div className="flex flex-col items-center gap-3 text-white/70 text-sm px-4">
  <p className="flex items-center gap-2 whitespace-nowrap">
    Built with <FaReact className="text-[#61dafb]" /> and <FaHeart className="text-red-500" /> fueled by creativity.
  </p>
  <div className="flex gap-6 sm:gap-8 text-lg sm:text-xl">
    <a
      href="https://twitter.com/Hard2kill_AO"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors duration-200"
      aria-label="Twitter"
    >
      <FaTwitter className="sm:text-lg text-base" />
    </a>
    <a
      href="https://www.linkedin.com/in/abdulrahman-musbaudeen-3a0127369"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors duration-200"
      aria-label="LinkedIn"
    >
      <FaLinkedin className="sm:text-lg text-base" />
    </a>
    <a
      href="https://github.com/MDevHub"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-colors duration-200"
      aria-label="GitHub"
    >
      <FaGithub className="sm:text-lg text-base" />
    </a>
  </div>
</div>



			{/* Bottom section - responsive grid */}
			<div className=" gap-6 md:gap-8 items-center text-white/70 text-sm text-center px-4 sm:px-0">
				<p className="break-words leading-relaxed">
					© 2025 Musbaudeen Abdul-Rahman.<br className="md:hidden" />
					All rights reserved.
				</p>
			</div>
		</footer>
	);
	};

	export default Footer;
