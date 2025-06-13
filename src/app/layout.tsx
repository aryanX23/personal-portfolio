import type { Metadata, Viewport } from "next"; // Import Viewport
import { Manrope } from "next/font/google"; // Using Manrope font
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider"; // Import ThemeProvider
import PageTransitionWrapper from "./components/PageTransitionWrapper"; // Import the new wrapper

const manrope = Manrope({ // Changed from Inter to Manrope
  subsets: ["latin"],
  variable: "--font-manrope", // Define a CSS variable for the font
  weight: ['300', '400', '500', '600', '700'] // Specify available weights
});

export const metadata: Metadata = {
  title: "My Personal Portfolio",
  description: "A showcase of my projects and skills.",
};

// Define viewport settings including themeColor
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9FAFB" }, // Updated to match new light background
    { media: "(prefers-color-scheme: dark)", color: "#000000" },  // Updated to match new dark.background
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>{/* Use manrope variable */}<body className="antialiased font-sans bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
