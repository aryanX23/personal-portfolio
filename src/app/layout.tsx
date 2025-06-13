import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a common, clean sans-serif font
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "My Personal Portfolio",
  description: "A showcase of my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
