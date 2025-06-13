import Header from "@/app/components/Header";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Contact from "@/app/components/sections/Contact";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-900">
      <Header />
      <div className="flex-grow">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
      {/* Optional: Footer can be added here or in layout.tsx */}
      <footer className="py-8 text-center text-slate-400 bg-slate-900 border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <p className="text-sm">
          Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </footer>
    </main>
  );
}
