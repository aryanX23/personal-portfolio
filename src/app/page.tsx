import Header from "@/app/components/Header";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Contact from "@/app/components/sections/Contact";
import Footer from "@/app/components/Footer"; // Import the new Footer component
import React from "react";
// motion and Transition imports are no longer needed here if pageVariants and pageTransition are removed

export default function Home() {
  return (
    <main
      className="flex flex-col min-h-screen" // Removed bg-slate-900
    >
      <Header />
      <div className="flex-grow">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
      <Footer /> {/* Use the new Footer component */}
    </main>
  );
}
