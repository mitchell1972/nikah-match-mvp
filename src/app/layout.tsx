import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'NikahMatch - Find Your Perfect Life Partner',
  description:
    'NikahMatch is a trusted matrimonial platform helping Muslim singles find their perfect life partner with verified profiles, privacy protection, and a respectful community.',
  keywords: 'nikah, matrimonial, muslim marriage, life partner, matchmaking',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
