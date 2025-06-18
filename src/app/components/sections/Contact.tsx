"use client";

import React, { useState } from "react";
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

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);
    setSubmitError(null);

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    const recipientEmail = "official@aryan-rai.com";
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.section
      id="contact"
      className="bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground px-4 py-20 sm:py-28 md:px-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container mx-auto max-w-xl">
        <motion.h2
          className="text-foreground dark:text-dark-foreground mb-12 text-center text-4xl font-bold sm:mb-16 sm:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="mb-6 rounded-lg border border-green-500/50 bg-green-500/10 px-4 py-3 text-center text-green-700 dark:border-green-500/70 dark:bg-green-500/20 dark:text-green-300"
          >
            Thank you for your message! I&apos;ll get back to you soon.
          </motion.div>
        )}

        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-lg border border-red-400 bg-red-500/10 px-4 py-3 text-center text-red-700 dark:border-red-600 dark:bg-red-700/30 dark:text-red-200"
          >
            {submitError}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="text-foreground/90 dark:text-dark-foreground/90 mb-1.5 block text-sm font-medium"
            >
              Full Name
            </label>
            <motion.input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-card dark:bg-dark-card border-border dark:border-dark-border text-foreground dark:text-dark-foreground placeholder-foreground/50 dark:placeholder-dark-foreground/50 w-full rounded-md border px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-gray-500"
              placeholder="Your Name"
              whileFocus={{ boxShadow: "0 0 0 2px rgba(107, 114, 128, 0.4)" }} // Neutral gray focus
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-foreground/90 dark:text-dark-foreground/90 mb-1.5 block text-sm font-medium"
            >
              Email Address
            </label>
            <motion.input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-card dark:bg-dark-card border-border dark:border-dark-border text-foreground dark:text-dark-foreground placeholder-foreground/50 dark:placeholder-dark-foreground/50 w-full rounded-md border px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-gray-500"
              placeholder="you@example.com"
              whileFocus={{ boxShadow: "0 0 0 2px rgba(107, 114, 128, 0.4)" }} // Neutral gray focus
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-foreground/90 dark:text-dark-foreground/90 mb-1.5 block text-sm font-medium"
            >
              Message
            </label>
            <motion.textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="bg-card dark:bg-dark-card border-border dark:border-dark-border text-foreground dark:text-dark-foreground placeholder-foreground/50 dark:placeholder-dark-foreground/50 w-full rounded-md border px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-gray-500"
              placeholder="Your message..."
              whileFocus={{ boxShadow: "0 0 0 2px rgba(107, 114, 128, 0.4)" }} // Neutral gray focus
            />
          </div>
          <div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-brand-gradient focus:ring-offset-background dark:focus:ring-offset-dark-background focus:ring-gradient-to w-full rounded-lg px-6 py-3.5 font-semibold shadow-md transition-all duration-200 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
