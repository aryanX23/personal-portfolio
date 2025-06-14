import type { Metadata, Viewport } from "next";
// 1. Import Bodoni_Moda instead of Playfair_Display
import { Manrope, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import PageTransitionWrapper from "./components/PageTransitionWrapper";

// Your existing Manrope font setup
const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
	weight: ["300", "400", "500", "600", "700"],
});

// 2. Add the setup for the new Bodoni Moda font
const bordoni = Bodoni_Moda({
	subsets: ["latin"],
	variable: "--font-bordoni", // A new variable for the font
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Aryan Rai's Portfolio", // Updated title
	description: "A showcase of my projects and skills.",
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
		{ media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// 3. Add the new font variable to the <html> tag
		<html
			lang="en"
			className={`${manrope.variable} ${bordoni.variable}`}
			suppressHydrationWarning
		>
			<body className="antialiased font-sans bg-background text-foreground">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange={false}
				>
					<PageTransitionWrapper>{children}</PageTransitionWrapper>
				</ThemeProvider>
			</body>
		</html>
	);
}
