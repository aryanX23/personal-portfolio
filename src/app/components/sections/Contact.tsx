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

    // Placeholder for actual submission logic
    // console.log("Form data submitted:", formData); 
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); 

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.section
      id="contact"
      className="py-20 sm:py-28 bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground px-4 md:px-8" // Consistent padding
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container mx-auto max-w-xl"> {/* Slightly narrower for contact form */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground dark:text-dark-foreground" // Consistent heading
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
            className="bg-gradient-to-r from-gradient-from/20 via-gradient-via/20 to-gradient-to/20 border border-gradient-via/40 text-foreground dark:text-dark-foreground px-4 py-3 rounded-lg mb-6 text-center"
          >
            Thank you for your message! I&apos;ll get back to you soon.
          </motion.div>
        )}

        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/10 border border-red-400 text-red-700 dark:bg-red-700/30 dark:border-red-600 dark:text-red-200 px-4 py-3 rounded-lg mb-6 text-center"
          >
            {submitError}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1.5">
              Full Name
            </label>
            <motion.input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-md text-foreground dark:text-dark-foreground focus:ring-2 focus:ring-gradient-from focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Your Name"
              whileFocus={{ boxShadow: "0 0 0 2px rgba(117, 69, 249, 0.4)" }} // gradient-from with opacity
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1.5">
              Email Address
            </label>
            <motion.input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-md text-foreground dark:text-dark-foreground focus:ring-2 focus:ring-gradient-from focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="you@example.com"
              whileFocus={{ boxShadow: "0 0 0 2px rgba(117, 69, 249, 0.4)" }}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1.5">
              Message
            </label>
            <motion.textarea
              name="message"
              id="message"
              rows={5} // Slightly taller
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-md text-foreground dark:text-dark-foreground focus:ring-2 focus:ring-gradient-from focus:border-transparent transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Your message..."
              whileFocus={{ boxShadow: "0 0 0 2px rgba(117, 69, 249, 0.4)" }}
            />
          </div>
          <div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-brand-gradient text-white font-semibold py-3.5 px-6 rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-dark-background focus:ring-gradient-to"
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
