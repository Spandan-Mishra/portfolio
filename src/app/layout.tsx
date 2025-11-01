import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "Spandan Mishra",
  description: "Spandan Mishra's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
