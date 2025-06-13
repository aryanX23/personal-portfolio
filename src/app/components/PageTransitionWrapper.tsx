"use client";

import React from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
import { usePathname } from "next/navigation";

const pageVariants = {
  initial: { opacity: 0, x: "-200px" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "200px" },
};

// If "anticipate" causes issues, we'll change it back to "easeOut"
const pageTransition: Transition = {
  type: "tween",
  ease: "anticipate", 
  duration: 0.5,
};

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

export default function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{ minHeight: 'inherit' }} // To ensure wrapper takes height if children are positioned absolutely during transition
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
