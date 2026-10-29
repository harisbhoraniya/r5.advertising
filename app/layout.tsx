import React from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'NAEPL | N Gandhi Advance Engineering Pvt. Ltd. | Precision Engineering',
  description: 'ISO 9001:2015 certified manufacturer of precision engineered components, stainless steel cable ties, cable cleats, link boxes, CNC machined parts, and sheet metal press components.',
  icons: {
    icon: '/assets/logo_naepl.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/hero_slides/slide_1_precision_cutting.webp"
          type="image/webp"
        />
      </head>
      <body className={`w-full min-h-screen flex flex-col bg-white ${montserrat.className}`}>
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
