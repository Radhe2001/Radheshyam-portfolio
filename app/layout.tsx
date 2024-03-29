'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../provider/redux/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Provider store={store}>
			<html lang="en">
				<head>
					<link
						rel="icon"
						type="image/x-icon"
						href="/assets/R.png"
					></link>
					<meta
						name="description"
						content="This is Radheshyam portfolio"
					></meta>
					<meta
						name="keywords"
						content="portfolio, radhe, radheshyam, Radheshyam, Radhe"
					></meta>
					<title>Radheshyam Portfolio</title>
				</head>
				<body
					className="h-[100vh] w-[100vw] overflow-x-hidden"
					style={{ backgroundColor: '#191919' }}
				>
					<div className="sm:h-[20vh] md:h-[20vh] lg:h-[12vh] lg:mb-[5vh]">
						<Navbar />
					</div>
					<div className="h-[75vh] mb-[5vh]">{children}</div>
				</body>
			</html>
		</Provider>
	);
}
