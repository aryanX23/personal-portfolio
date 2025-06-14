"use client";

import React from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
import { usePathname } from "next/navigation";

const pageVariants = {
	initial: {
		opacity: 0,
		y: 15,
	},
	in: {
		opacity: 1,
		y: 0,
	},
	out: {
		opacity: 0,
		y: -15,
	},
};

const pageTransition: Transition = {
	type: "tween",
	ease: "easeInOut",
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
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
