import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Nada Kamal - UI/UX Designer',
	description:
		'Welcome to my portfolio! I’m a creative UI/UX Designer passionate about crafting seamless digital experiences. I design intuitive interfaces that blend aesthetics with usability — turning ideas into engaging, human-centered designs.',
	keywords: [
		'UI/UX Designer',
		'User Experience',
		'User Interface',
		'Product Design',
		'Web Design',
		'Mobile Design',
		'Design Systems',
		'Wireframing',
		'Prototyping',
		'Figma',
		'Adobe XD',
		'Usability Testing',
		'Visual Design',
		'Interaction Design',
		'Nada Kamal',
	],
	authors: [{ name: 'Nada Kamal' }],
	creator: 'Nada Kamal',
	openGraph: {
		title: 'Nada Kamal - UI/UX Designer Portfolio',
		description:
			'Creative UI/UX Designer crafting delightful digital experiences through thoughtful, user-centered design.',
		url: 'https://your-portfolio-domain.com',
		siteName: 'Nada Kamal - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Nada Kamal - UI/UX Designer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Nada Kamal - UI/UX Designer',
		description:
			'Creative UI/UX Designer crafting delightful digital experiences through thoughtful, user-centered design.',
		creator: '@nadakamal',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}