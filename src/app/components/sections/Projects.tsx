"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  repoUrl,
  index,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-card dark:bg-dark-card border-border dark:border-dark-border group overflow-hidden rounded-lg border shadow-lg transition-all duration-300 ease-out"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill={true}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-foreground dark:text-dark-foreground mb-2 text-xl font-semibold">
          {title}
        </h3>
        <p className="mb-4 h-20 overflow-y-auto text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="dark:bg-dark-border rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="border-border dark:border-dark-border mt-auto flex space-x-4 border-t pt-4">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient-from hover:text-gradient-via font-medium transition-colors duration-200"
              whileHover={{ letterSpacing: "0.5px" }}
              whileTap={{ scale: 0.95 }}
            >
              View Live
            </motion.a>
          )}
          {repoUrl && (
            <motion.a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              whileHover={{ letterSpacing: "0.5px" }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub Repo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const placeholderProjects: Omit<ProjectCardProps, "index">[] = [
  {
    title: "NexusGear | An E-Commerce Website for Gaming Peripherals",
    description:
      "Built and deployed a secure, full-stack MERN storefront with Stripe integration, containerized via Docker and orchestrated on a high-availability Kubernetes cluster.",
    imageUrl: "/project1.png",
    tags: [
      "ReactJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe API",
      "Turborepo",
      "Docker",
      "Kubernetes",
    ],
    liveUrl: "https://nexusgear.aryan-rai.com/",
    repoUrl: "https://github.com/aryanX23/Nexus-Gear",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground px-4 py-20 sm:py-28 md:px-8"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-foreground dark:text-dark-foreground mb-16 text-center text-4xl font-bold sm:mb-20 sm:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {placeholderProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
