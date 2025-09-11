import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Inter,
  Sansita,
  Space_Grotesk,
  Roboto,
} from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// register the font
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

// for logo's font family
const sansita = Sansita({
  variable: '--font-sansita',
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  display: 'swap',
});

// roboto font
const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Trust Global Communications',
  description: 'Trust Global Communications',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${inter.variable} ${spaceGrotesk.variable} ${sansita.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          // defaultTheme="system"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="font-roboto mx-auto max-w-[1440px]">{children}</main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
