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

interface SkillProps {
  name: string;
  level: number;
}

const SkillBar: React.FC<SkillProps> = ({ name, level }) => {
  return (
    <motion.div className="mb-5 p-1">
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
    </motion.div>
  );
};

const About: React.FC = () => {
  const skills: SkillProps[] = [
    { name: "TypeScript & JavaScript", level: 90 },
    { name: "React / Next.js", level: 88 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js & Express", level: 75 },
    { name: "UI/UX Principles", level: 70 },
    { name: "Framer Motion", level: 70 },
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
        <div className="grid items-start gap-12 md:grid-cols-5">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-foreground dark:text-dark-foreground mb-5 text-2xl font-semibold sm:text-3xl">
              My Journey in Tech
            </h3>
            <p className="mb-5 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
              Hello! I&apos;m a dedicated software developer with a strong
              passion for crafting intuitive and performant digital experiences.
              My fascination with technology began with a simple curiosity about
              how the web works, which quickly blossomed into a full-fledged
              pursuit of web development and software engineering.
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
          <motion.div
            className="md:col-span-2"
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
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
