import { Metadata } from 'next';
import React from 'react';
import "@/src/styles/main.scss";
import Footer from '@/src/components/footer';

export const metadata: Metadata = {
  title: 'Mystic Square',
  description: 'Fun mysterious puzzle game',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="manifest" href="/manifest.json" />
      </head> */}
      <body>
        <main className='app-container'>
            {children}
            <Footer />
          </main>
      </body>
    </html>
  );
}
