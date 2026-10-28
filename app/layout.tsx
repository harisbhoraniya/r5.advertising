import React from 'react';
import type { Metadata } from 'next';
import '@fontsource/montserrat';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'NAEPL | N Gandhi Advance Engineering Pvt. Ltd. | Precision Engineering',
  description: 'ISO 9001:2015 certified manufacturer of precision engineered components, stainless steel cable ties, cable cleats, link boxes, CNC machined parts, and sheet metal press components.',
  icons: {
    icon: '/assets/logo_naepl.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="w-full min-h-screen flex flex-col bg-white font-sans">
        <Navbar />
        <div className="flex-1 w-full">
          {children}
        </div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
