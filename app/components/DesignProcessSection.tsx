'use client';

import { Sparkles, Palette, Figma, Users } from 'lucide-react';

export default function DesignProcessSection() {
	const processes = [
		{
			icon: <Users className="w-8 h-8" />,
			title: 'Research & Empathy',
			description:
				'Understanding user needs through interviews, surveys, and competitive analysis to build empathy.',
			color: 'from-pink-400 to-rose-400',
		},
		{
			icon: <Palette className="w-8 h-8" />,
			title: 'Ideate & Design',
			description:
				'Creating wireframes, mockups, and high-fidelity designs that solve user problems beautifully.',
			color: 'from-purple-400 to-pink-400',
		},
		{
			icon: <Figma className="w-8 h-8" />,
			title: 'Prototype & Test',
			description:
				'Building interactive prototypes and conducting usability tests to validate design decisions.',
			color: 'from-rose-400 to-purple-400',
		},
	];

	return (
		<section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-4 border border-pink-200">
							<Sparkles className="w-4 h-4 text-purple-500" />
							<span className="text-sm font-medium text-gray-700">My Approach</span>
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
							Design Process
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							A human-centered approach to creating meaningful digital experiences.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{processes.map((process, index) => (
							<div key={index} className="group relative">
								<div className="bg-white rounded-3xl p-8 border-2 border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
									<div
										className={`w-16 h-16 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
									>
										{process.icon}
									</div>
									<h3 className="text-2xl font-bold text-gray-800 mb-4">{process.title}</h3>
									<p className="text-gray-600 leading-relaxed">{process.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
