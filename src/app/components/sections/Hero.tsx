"use client";

import React from "react";
import { motion, Variants, Easing } from "framer-motion";

const Hero: React.FC = () => {
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut" as Easing, // Explicitly cast or use a const
      },
    }),
  };

  const subheadingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.9, // After heading animations
        duration: 0.6,
        ease: "easeOut" as Easing, // Explicitly cast or use a const
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 relative overflow-hidden"
    >
      {/* Placeholder for Parallax Background Elements */}
      <motion.div
        className="absolute inset-0 z-0"
        // Example parallax - will need actual implementation
        // style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
      >
        {/* Add background shapes or images here for parallax */}
      </motion.div>

      <div className="z-10 text-center">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={subheadingVariants}
          className="text-xl md:text-2xl text-slate-300 mb-8"
        >
          Crafting digital experiences with code and creativity.
        </motion.p>

        {/* Placeholder for 3D Element */}
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 mx-auto my-8 bg-slate-700 rounded-lg flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
        >
          <p className="text-slate-400">3D Element Placeholder</p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        >
          View My Work
        </motion.button>
      </div>

      {/* Scroll Down Indicator (Optional) */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-slate-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5M4.5 12l7.5 7.5 7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
