"use client";

import Link from "next/link";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive,
  onClick,
}) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .getElementById(href.substring(1))
      ?.scrollIntoView({ behavior: "smooth" });
    if (onClick) onClick();
  };

  return (
    <motion.li whileHover={{ y: -2 }} className="relative">
      <Link
        href={href}
        onClick={scrollToSection}
        className="text-muted-foreground hover:text-foreground data-[active=true]:text-foreground block px-3 py-2 text-sm font-medium transition-colors"
        data-active={isActive}
      >
        {label}
      </Link>
      {isActive && (
        <motion.div
          className="bg-primary absolute right-0 bottom-0.5 left-0 h-0.5"
          layoutId="underline"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.li>
  );
};

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-9 w-9" />;

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="hover:bg-accent relative flex h-9 w-9 items-center justify-center rounded-full transition-colors"
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          {theme === "dark" ? (
            <Sun className="text-primary h-5 w-5" />
          ) : (
            <Moon className="text-primary h-5 w-5" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
      setIsMobileMenuOpen(false);
    } else {
      setHidden(false);
    }
  });

  const navLinks = useMemo(
    () => [
      { id: "hero", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "about", label: "About" },
      { id: "resume", label: "Resume" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    for (const link of navLinks) {
      const section = document.getElementById(link.id);
      if (
        section &&
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        setActiveSection(section.id);
        break;
      }
    }
  }, [navLinks]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="bg-background/80 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md"
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-display text-foreground text-xl font-bold tracking-widest uppercase"
          >
            Aryan Rai.
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-x-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              href={`#${link.id}`}
              label={link.label}
              isActive={activeSection === link.id}
            />
          ))}
          <li className="ml-4">
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground relative z-10 ml-2 h-9 w-9"
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={isMobileMenuOpen ? "close" : "menu"}
                initial={{ rotate: 180, opacity: 0, y: -10 }}
                animate={{ rotate: 0, opacity: 1, y: 0 }}
                exit={{ rotate: -180, opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                transition: { staggerChildren: 0.07, delayChildren: 0.2 },
              },
              closed: {
                opacity: 0,
                height: 0,
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
            initial="closed"
            animate="open"
            exit="closed"
            className="bg-background/95 border-border absolute top-full right-0 left-0 border-t backdrop-blur-lg md:hidden"
          >
            <ul className="container mx-auto flex flex-col items-center px-4 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={`mobile-${link.id}`}
                  href={`#${link.id}`}
                  label={link.label}
                  isActive={activeSection === link.id}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
