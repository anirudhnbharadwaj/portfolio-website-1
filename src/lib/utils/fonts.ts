import { Open_Sans, Ubuntu_Mono } from 'next/font/google';

const inter = Open_Sans({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: [
    '400', // Regular
    '500', // Medium
    '700', // Bold
  ],
});

const robotoMono = Ubuntu_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: [
    '400', // Regular
    '700', // Bold
  ],
});

const fontVariables = `${inter.variable} ${robotoMono.variable}`;

export default fontVariables;
