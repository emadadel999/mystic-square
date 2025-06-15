import { Metadata } from 'next';
import React from 'react';
import '@/src/styles/main.scss';

export const metadata: Metadata = {
	title: 'Mystic Square',
	description: 'Fun mysterious puzzle game',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					type='image/png'
					href='/favicon-96x96.png'
					sizes='96x96'
				/>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<link rel='shortcut icon' href='/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<meta name='apple-mobile-web-app-title' content='M-Square' />
			</head>
			<body>
				<main className='app-container'>
					{children}
					{/* <footer className="footer">
              <a
                className="social-link"
                href="https://eabdelmaksoud.me"
                target="_blank"
              >
                <img
                  className="noselect"
                  src="/pp1.png"
                  height={40}
                  width={34}
                />
              </a>
          </footer> */}
				</main>
			</body>
		</html>
	);
}
