import type { Metadata } from 'next';
import { MedievalSharp } from 'next/font/google';
import './globals.css';

const medievalSharp = MedievalSharp({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Zoran\'s DnD5 Tools',
  description: 'Personal DnD5 toolset'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={medievalSharp.className}>{children}</body>
    </html>
  );
}
