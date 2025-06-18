import Header from "@/app/components/Header";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Resume from "@/app/components/sections/Resume";
import Contact from "@/app/components/sections/Contact";
import Footer from "@/app/components/Footer";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow">
        <Hero />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
