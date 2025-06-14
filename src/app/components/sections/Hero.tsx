"use client";

import React from "react";
import { motion } from "framer-motion";

const AuroraBackground = () => {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="relative h-full w-full">
        <motion.div
          className="absolute top-0 left-0 h-96 w-96 rounded-full bg-purple-500/40 opacity-70 dark:bg-purple-400/30"
          style={{
            filter: "blur(60px)",
          }}
          animate={{
            x: ["0%", "50%", "20%", "80%", "0%"],
            y: ["0%", "60%", "40%", "80%", "0%"],
            rotate: [0, 180, 360, 180, 0],
            scale: [1, 1.2, 1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        <motion.div
          className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/40 opacity-70 dark:bg-blue-400/30"
          style={{
            filter: "blur(60px)",
          }}
          animate={{
            x: ["0%", "-50%", "-20%", "-80%", "0%"],
            y: ["0%", "-60%", "-40%", "-80%", "0%"],
            rotate: [0, -180, -360, -180, 0],
            scale: [1, 1.1, 1.2, 1, 1],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 5,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-pink-500/30 opacity-60 dark:bg-pink-400/20"
          style={{
            filter: "blur(70px)",
          }}
          animate={{
            x: ["-50%", "0%", "-50%"],
            y: ["-50%", "50%", "-50%"],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 2,
          }}
        />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-background text-foreground relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <AuroraBackground />

      <div className="z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-script text-foreground text-5xl italic sm:text-6xl md:text-7xl"
        >
          <span className="block">Code with Purpose.</span>
          <span className="mt-2 block">Build with Passion.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg md:text-xl"
        >
          A versatile software engineer with a passion for building what&apos;s
          next. I specialize in crafting high-performance, full-stack
          applications that bring innovative ideas to life, no matter the
          domain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
            className="focus:ring-primary focus:ring-offset-background bg-primary text-primary-foreground shadow-primary/30 hover:shadow-primary/40 dark:border-primary-foreground dark:text-primary-foreground dark:hover:bg-primary-foreground dark:hover:text-background rounded-full px-8 py-3 font-semibold shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none dark:border dark:bg-transparent"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
