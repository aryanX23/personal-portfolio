"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image"; // For placeholder images

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  index: number; // For stagger effect
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeInOut",
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
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        rotateX: 5,
        rotateY: -5,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)", // Subtle glow/shadow
      }}
      className="bg-slate-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 ease-out"
      style={{ perspective: "1000px" }} // Needed for 3D transform effect
    >
      <div className="relative w-full h-56">
        <Image src={imageUrl} alt={title} fill={true} className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-sky-400 mb-2">{title}</h3>
        <p className="text-slate-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-slate-700 text-sky-300 px-2 py-1 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors"
            >
              View Live
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-300 transition-colors"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const placeholderProjects: Omit<ProjectCardProps, "index">[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce website with modern features and a responsive design.",
    imageUrl: "/placeholder-project-1.svg", // Using local SVG
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool to boost productivity.",
    imageUrl: "/placeholder-project-2.svg", // Using local SVG
    tags: ["React", "Firebase", "Framer Motion"],
    liveUrl: "#",
  },
  {
    title: "Portfolio Website v1",
    description: "My previous personal portfolio built with vanilla HTML, CSS, and JS.",
    imageUrl: "/placeholder-project-3.svg", // Using local SVG
    tags: ["HTML", "CSS", "JavaScript"],
    repoUrl: "#",
  },
    {
    title: "AI Chatbot Interface",
    description: "A sleek and interactive UI for an AI-powered chatbot.",
    imageUrl: "/placeholder-project-4.svg", // Using local SVG
    tags: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white px-4 md:px-8"> {/* Changed bg-slate-850 to bg-slate-900 */}
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-sky-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
