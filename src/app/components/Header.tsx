"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { useTheme } from "next-themes"; // Import useTheme

// A simple sun and moon icon for the toggle
const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		{...props}
	>
		<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 7.758a.75.75 0 001.06-1.06L5.634 5.106a.75.75 0 00-1.06 1.06L6.166 7.758z" />
	</svg>
);

const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		{...props}
	>
		<path
			fillRule="evenodd"
			d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.51 1.713-6.636 4.362-8.467a.75.75 0 01.819.162z"
			clipRule="evenodd"
		/>
	</svg>
);

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface NavLinkProps {
	href: string;
	label: string;
	onClick?: () => void; // Add onClick for closing mobile menu
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => { // Added onClick to props
	const scrollToSection = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault();
		const sectionId = href.substring(1); // Remove '#'
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
		if (onClick) { // Call onClick if provided (for closing mobile menu)
			onClick();
		}
	};

	return (
		<motion.div
			whileHover={{ y: -2, scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className="inline-block"
		>
			<Link
				href={href}
				onClick={scrollToSection}
				className="px-3 py-2 text-foreground dark:text-dark-foreground hover:text-gray-600 dark:hover:text-gray-400 transition-colors block w-full text-center md:inline-block md:w-auto"
			>
				{label}
			</Link>
		</motion.div>
	);
};

const Header: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// useEffect to set mounted state
	useEffect(() => {
		setMounted(true);
	}, []);

	// Removed isScrolled state and useEffect for scroll handling

	const navLinks: NavLinkProps[] = [
		{ href: "#hero", label: "Home" },
		{ href: "#projects", label: "Projects" },
		{ href: "#about", label: "About" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/30 backdrop-blur-lg border-b border-black/10 dark:border-white/10" // Glassmorphic effect for both themes
		>
			<nav className="container mx-auto px-6 py-4 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold text-foreground dark:text-dark-foreground">
					My Portfolio
				</Link>
				<div className="hidden md:flex items-center space-x-4">
					{navLinks.map((link) => (
						<NavLink key={link.href} href={link.href} label={link.label} />
					))}
					{/* Theme Toggle Button */}
					{mounted && (
						<motion.button
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="p-2 rounded-md text-foreground dark:text-dark-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none" // Adjusted hover for glassmorphism
							aria-label="Toggle theme"
							whileHover={{ scale: 1.1, rotate: theme === "dark" ? 15 : -15 }}
							whileTap={{ scale: 0.9 }}
						>
							{theme === "dark" ? (
								<SunIcon className="w-5 h-5 text-yellow-400" />
							) : (
								<MoonIcon className="w-5 h-5 text-slate-400" />
							)}
						</motion.button>
					)}
				</div>
				{/* Mobile menu button */}
				<div className="md:hidden">
					<motion.button
            onClick={toggleMobileMenu}
            className="text-foreground dark:text-dark-foreground focus:outline-none p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen} // Add aria-expanded
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
						{isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
					</motion.button>
				</div>
			</nav>

			{/* Mobile Menu Panel */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="md:hidden absolute top-full left-0 right-0 bg-white/90 dark:bg-black/50 backdrop-blur-md shadow-lg py-4 border-t border-black/10 dark:border-white/10" // Glassmorphic mobile menu for both themes
            // Ensure this panel is below the main header content if header has a solid bg when scrolled
            style={{ zIndex: 40 }} // Lower z-index than header's z-50
					>
						<div className="container mx-auto px-6 flex flex-col items-center space-y-4">
							{navLinks.map((link) => (
								<NavLink
									key={`mobile-${link.href}`}
									href={link.href}
									label={link.label}
									onClick={toggleMobileMenu} // Close menu on link click
								/>
							))}
              {/* Optional: Mobile theme toggle can be added here too, ensure styling matches */}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Header;
