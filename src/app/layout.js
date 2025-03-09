import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jastipfully",
  description: "Jastipfully - Jasa Pengiriman Barang Online Terbaik",
  icons: {
    icon: [
      {
        url: '/assets/jastipfully.jpg',
        href: '/assets/jastipfully.jpg',
      },
    ],
    shortcut: '/assets/jastipfully.jpg',
    apple: '/assets/jastipfully.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
