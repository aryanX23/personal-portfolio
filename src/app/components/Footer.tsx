"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/aryanX23",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/aryan-rai-92b184228/",
    },
  ];

  return (
    <motion.footer
      className="border-border bg-background text-foreground dark:border-dark-border dark:bg-dark-background dark:text-dark-foreground border-t px-4 py-8 backdrop-blur-lg md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between text-center md:flex-row md:text-left">
        <p className="text-foreground/80 dark:text-dark-foreground/80 mb-4 text-sm md:mb-0">
          &copy; {currentYear} ARYAN RAI. All rights reserved.
        </p>
        <div className="flex space-x-5">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-foreground/70 hover:text-gradient-via dark:text-dark-foreground/70 dark:hover:text-gradient-via transition-colors duration-200"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
