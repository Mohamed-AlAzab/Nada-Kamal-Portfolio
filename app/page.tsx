'use client';

import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import DesignProcessSection from './components/DesignProcessSection';

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen overflow-x-hidden">
			<HeroSection />
			<EducationSection />
			<DesignProcessSection />
			<ContactSection />
		</main>
	);
}
