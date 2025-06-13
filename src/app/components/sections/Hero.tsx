"use client";

import React from "react";
import { motion, Variants, Easing } from "framer-motion";

const Hero: React.FC = () => {
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2, // Faster start
        duration: 0.6,
        ease: "easeOut" as Easing,
      },
    },
  };

  const subheadingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5, // After heading
        duration: 0.6,
        ease: "easeOut" as Easing,
      },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8, // After subheading
        duration: 0.6,
        ease: "easeOut" as Easing,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground p-6 overflow-hidden"
    >
      <div className="z-10 relative max-w-3xl mx-auto"> {/* Max width for content */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-foreground dark:text-dark-foreground" // Adjusted sizes and margin
        >
          Modern Solutions for a Digital World.
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={subheadingVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10" // Adjusted sizes and margin
        >
          I build elegant and efficient web applications that drive results and delight users.
        </motion.p>

        <motion.button
          initial="hidden"
          animate="visible"
          variants={ctaVariants}
          whileHover={{ scale: 1.03, filter: "brightness(1.1)" }} // Subtle hover: slight scale and brightness
          whileTap={{ scale: 0.97 }}
          className="bg-brand-gradient text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-lg shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-dark-background focus:ring-gradient-to" // Added focus states for both themes
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Explore My Work
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
