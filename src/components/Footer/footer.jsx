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
		<footer className="bg-black text-white px-2 md:px-6 py-28 text-center space-y-6 relative overflow-hidden min-h-[320px]">
		{/* Top Message with bigger gray blur and shadow */}
			<div className="relative z-20">
				<div
					className="absolute left-1/2 top-1/2 w-[450px] h-[450px] bg-gray-700 opacity-20 blur-4xl rounded-full 
					-translate-x-1/2 -translate-y-1/2 pointer-events-none z-30
					shadow-[0_0_60px_15px_rgba(100,100,100,0.15)]"
					style={{mixBlendMode: 'screen'}}
				/>
				<h2 className="relative text-[16px] sm:text-3xl lg:text-4xl font-semibold max-w-3xl mx-auto px-4">
					Let’s build something impactful together.
				</h2>
			</div>

			{/* Tech credit */}
			<p className="text-sm flex justify-center items-center gap-1 text-white/70 relative z-20">
				Built with <FaReact className="text-[#61dafb]" /> and{' '}
				<FaHeart className="text-red-500" /> fueled by creativity.
			</p>

			{/* Bottom Section - fixed inside footer at bottom with underline */}
			<div className="absolute bottom-0 left-0 w-full p-4 md:px-4 bg-black bg-opacity-80 backdrop-blur-sm z-20">
				<hr className="border-white/30 mb-4 " />
				<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
					<p>&#169; 2025 Musbaudeen Abdul-Rahman. <br className='md:hidden'/>All rights reserved.</p>
					<div className="flex gap-6 text-lg">
						<a
							href="https://twitter.com/Hard2kill_AO"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter className="text-white/75 hover:text-white transition" />
						</a>
						<a
							href="https://www.linkedin.com/in/abdulrahman-musbaudeen-3a0127369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="text-white/75 hover:text-white transition" />
						</a>
						<a
							href="https://github.com/MDevHub"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub className="text-white/75 hover:text-white transition" />
						</a>
					</div>
				</div>
			</div>
		</footer>
  );
};

export default Footer;
         
