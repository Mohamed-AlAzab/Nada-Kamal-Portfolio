'use client';

import { Sparkles, ArrowRight } from 'lucide-react';

export default function HeroSection() {
	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
			{/* Floating shapes */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
				<div
					className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"
					style={{ animationDelay: '2s' }}
				></div>
				<div
					className="absolute -bottom-8 left-1/3 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"
					style={{ animationDelay: '4s' }}
				></div>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 border border-pink-200">
						<Sparkles className="w-4 h-4 text-pink-500" />
						<span className="text-sm font-medium text-gray-700">UI/UX Designer</span>
					</div>

					<h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
						Hi, I'm <span className="text-pink-600">Nada Kamal</span>
					</h2>

					<h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
						Crafting Delightful
						<br />
						User Experiences
					</h1>

					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						Transforming complex ideas into intuitive, beautiful interfaces that users love.
						Let's create something amazing together.
					</p>

					<div className="flex flex-wrap gap-4 justify-center">
						<a
							href="https://www.behance.net/nadaeshra"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
						>
							See My Work
							<ArrowRight className="w-5 h-5" />
						</a>

						<a
							href="/NadaKamal-Resume.pdf"
							// download
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 bg-white text-gray-700 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-pink-200 inline-flex items-center justify-center"
						>
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
