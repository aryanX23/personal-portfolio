"use client";

import React from "react";
import { motion, Variants, Easing } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as Easing,
    },
  },
};

const Resume: React.FC = () => {
  const resumePath = "/resume.pdf"; // public/resume.pdf

  return (
    <motion.section
      id="resume"
      className="bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground px-4 py-20 sm:py-28 md:px-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-foreground dark:text-dark-foreground mb-12 text-center text-4xl font-bold sm:mb-16 sm:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Resume
        </motion.h2>
        <motion.div
          className="bg-card dark:bg-dark-card rounded-lg p-6 shadow-xl sm:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="aspect-[8.5/11] w-full overflow-hidden rounded-md">
            <iframe
              src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
              title="My Resume"
              className="h-full w-full"
              aria-label="Embedded Resume PDF"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              If you&apos;re having trouble viewing the embedded resume, you can
              download it directly.
            </p>
            <a
              href={resumePath}
              download="resume.pdf"
              className="bg-primary text-primary-foreground focus:ring-ring dark:bg-dark-primary dark:text-dark-primary-foreground dark:hover:bg-dark-primary/90 inline-block rounded-lg px-6 py-3 text-base font-medium shadow-md transition-transform duration-150 ease-in-out hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
