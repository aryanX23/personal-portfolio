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
      className="bg-card dark:bg-dark-card rounded-lg overflow-hidden shadow-lg border border-border dark:border-dark-border transition-all duration-300 ease-out group"
    >
      <div className="relative w-full h-52 overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill={true} 
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground dark:text-dark-foreground mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 h-20 overflow-y-auto">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-100 dark:bg-dark-border text-gray-700 dark:text-gray-300 px-2.5 py-1 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 mt-auto pt-4 border-t border-border dark:border-dark-border">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient-from hover:text-gradient-via transition-colors duration-200 font-medium"
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
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 font-medium"
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
    title: "E-commerce Platform",
    description: "A full-stack e-commerce website with modern features, a responsive design, and integrated payment solutions for a seamless shopping experience.",
    imageUrl: "/placeholder-project-1.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool designed to boost team productivity with real-time updates and an intuitive user interface.",
    imageUrl: "/placeholder-project-2.svg",
    tags: ["React", "Firebase", "Framer Motion", "Node.js"],
    liveUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets, providing actionable insights through dynamic charts and graphs.",
    imageUrl: "/placeholder-project-3.svg",
    tags: ["D3.js", "React", "Python", "Flask"],
    repoUrl: "#",
  },
  {
    title: "AI Chatbot Interface",
    description: "A sleek and interactive UI for an AI-powered chatbot, focusing on user experience and natural language processing capabilities.",
    imageUrl: "/placeholder-project-4.svg",
    tags: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Dialogflow"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground px-4 md:px-8">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-16 sm:mb-20 text-foreground dark:text-dark-foreground"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {placeholderProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
