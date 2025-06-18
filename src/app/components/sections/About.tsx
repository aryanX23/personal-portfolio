"use client";

import React from "react";
import { motion, Variants, Easing } from "framer-motion";
import Image from "next/image";

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

interface SkillProps {
  name: string;
  level: number;
  details?: string[];
}

const SkillBar: React.FC<SkillProps> = ({ name, level, details }) => {
  return (
    <motion.div className="mb-6 p-1">
      <div className="mb-1.5 flex justify-between">
        <span className="text-foreground dark:text-dark-foreground text-base font-medium">
          {name}
        </span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div className="bg-border dark:bg-dark-border h-2 w-full rounded-full">
        <motion.div
          className="bg-brand-gradient h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.2, ease: "circOut" }}
        />
      </div>
      {details && details.length > 0 && (
        <div className="mt-3 pl-1">
          <ul className="list-inside list-disc space-y-1.5 text-sm text-gray-500 dark:text-gray-400">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

const About: React.FC = () => {
  const skills: SkillProps[] = [
    {
      name: "TypeScript & JavaScript",
      level: 90,
      details: [
        "Strong proficiency in modern JavaScript (ES6+)",
        "Extensive experience with TypeScript for type safety",
        "Asynchronous programming, Promises, Async/Await",
      ],
    },
    {
      name: "React / Next.js",
      level: 88,
      details: [
        "Component-based architecture",
        "State management (Context API, Redux, Zustand)",
        "Server-Side Rendering (SSR) and Static Site Generation (SSG) with Next.js",
        "React Hooks",
      ],
    },
    {
      name: "Tailwind CSS",
      level: 95,
      details: [
        "Utility-first CSS framework",
        "Responsive design implementation",
        "Customization and theming",
      ],
    },
    {
      name: "Node.js & Express",
      level: 75,
      details: [
        "Building RESTful APIs",
        "Middleware implementation",
        "Database integration (e.g., MongoDB, PostgreSQL)",
      ],
    },
    {
      name: "UI/UX Principles",
      level: 70,
      details: [
        "User-centered design thinking",
        "Wireframing and prototyping concepts",
        "Accessibility best practices (WCAG)",
      ],
    },
    {
      name: "Framer Motion",
      level: 70,
      details: [
        "Creating fluid animations and transitions",
        "Gesture handling",
        "Animating SVGs and complex layouts",
      ],
    },
  ];

  return (
    <motion.section
      id="about"
      className="bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground px-4 py-20 sm:py-28 md:px-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-foreground dark:text-dark-foreground mb-16 text-center text-4xl font-bold sm:mb-20 sm:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid items-start gap-12 lg:grid-cols-3">
          <div className="grid items-center gap-8 md:col-span-3 md:grid-cols-5 md:gap-12 lg:col-span-2">
            <motion.div
              className="flex justify-center md:col-span-2 md:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/placeholder-profile.png"
                alt="My Profile Picture"
                width={280}
                height={280}
                className="aspect-square rounded-xl object-cover shadow-xl"
                priority
              />
            </motion.div>

            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-foreground dark:text-dark-foreground mb-5 text-2xl font-semibold sm:text-3xl">
                My Journey in Tech
              </h3>
              <p className="mb-5 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                Hello! I&apos;m a dedicated software developer with a strong
                passion for crafting intuitive and performant digital
                experiences. My fascination with technology began with a simple
                curiosity about how the web works, which quickly blossomed into
                a full-fledged pursuit of web development and software
                engineering.
              </p>
              <p className="mb-5 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                I thrive in dynamic environments where I can continuously learn,
                adapt, and apply new technologies to solve complex problems and
                build impactful projects. My goal is to create software that not
                only functions flawlessly but also provides a delightful user
                experience.
              </p>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                Beyond coding, I&apos;m an avid explorer of emerging design
                trends, a contributor to open-source communities, and a lifelong
                learner committed to staying at the cutting edge of web
                innovation.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <h3 className="text-foreground dark:text-dark-foreground mb-7 text-2xl font-semibold sm:text-3xl">
              Core Skills
            </h3>
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                details={skill.details}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
