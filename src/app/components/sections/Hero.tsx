"use client";

import React from "react";
import { motion } from "framer-motion";

const AuroraBackground = () => {
	return (
		<div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
			<div className="relative w-full h-full">
				<motion.div
					className="absolute top-0 left-0 w-96 h-96 bg-purple-500/40 dark:bg-purple-400/30 rounded-full opacity-70"
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
					className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/40 dark:bg-blue-400/30 rounded-full opacity-70"
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
					className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/30 dark:bg-pink-400/20 rounded-full opacity-60"
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
			className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden"
		>
			<AuroraBackground />

			<div className="container mx-auto px-4 text-center z-10">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
					className="text-5xl font-script italic text-foreground sm:text-6xl md:text-7xl"
				>
					<span className="block">Code with Purpose.</span>
					<span className="block mt-2">Build with Passion.</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
					className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl"
				>
					A versatile software engineer with a passion for building what&apos;s next.
					I specialize in crafting high-performance, full-stack applications
					that bring innovative ideas to life, no matter the domain.
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
						className="font-semibold py-3 px-8 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 dark:bg-transparent dark:border dark:border-primary-foreground dark:text-primary-foreground dark:hover:bg-primary-foreground dark:hover:text-background"
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
