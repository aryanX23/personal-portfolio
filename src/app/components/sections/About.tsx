"use client";

import React from "react";
import { motion, Variants, Easing } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as Easing,
    },
  },
};

interface SkillProps {
  name: string;
  level: number; // e.g., 0-100 for percentage
}

const SkillBar: React.FC<SkillProps> = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-sky-300">{name}</span>
      <span className="text-sm font-medium text-sky-300">{level}%</span>
    </div>
    <div className="w-full bg-slate-700 rounded-full h-2.5">
      <motion.div
        className="bg-sky-500 h-2.5 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const About: React.FC = () => {
  const skills: SkillProps[] = [
    { name: "TypeScript", level: 90 },
    { name: "React / Next.js", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "UI/UX Design", level: 65 },
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-slate-800 text-white px-4 md:px-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-sky-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-sky-300 mb-4">My Background</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Hello! I'm a passionate software developer with a knack for creating elegant and efficient solutions. 
              My journey in tech started with a fascination for how websites work, which quickly evolved into a deep dive into web development.
              I thrive on learning new technologies and applying them to build impactful projects.
            </p>
            <p className="text-slate-300 leading-relaxed">
              When I'm not coding, I enjoy exploring new design trends, contributing to open-source projects, 
              and continuously honing my skills to stay at the forefront of web innovation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-sky-300 mb-6">My Skills</h3>
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
