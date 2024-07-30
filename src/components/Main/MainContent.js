"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "@/components/Main/About/About";
import Resume from "@/components/Main/Resume/Resume";
import Projects from "@/components/Main/Projects/Projects";
import Contact from "@/components/Main/Contact/Contact";

function MainContent() {
  const [selectedSection, setSelectedSection] = useState("About");
  const [direction, setDirection] = useState("forward");

  const handleNavigation = (section) => {
    const currentIndex = sections.indexOf(selectedSection);
    const nextIndex = sections.indexOf(section);
    setDirection(nextIndex > currentIndex ? "forward" : "backward");
    setSelectedSection(section);
  };
  const sections = ["About", "Resume", "Projects", "Contact"];

  const renderSection = () => {
    switch (selectedSection) {
      case "About":
        return <About key="About" direction={direction} />;
      case "Resume":
        return <Resume key="Resume" direction={direction} />;
      case "Projects":
        return <Projects key="Projects" direction={direction} />;
      case "Contact":
        return <Contact key="Contact" direction={direction} />;
      default:
        return <About key="About" direction={direction} />;
    }
  };

  return (
    <div className="relative w-full lg:w-3/4 overflow-hidden">
      <motion.div
        initial={{ translateX: "200%", opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full bg-secondary-bg rounded-3xl p-3"
      >
        <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
        <nav className="hidden lg:flex absolute top-0 right-0 bg-tertiary-bg z-10 rounded-xl p-4 px-6">
          <ul className="flex justify-between gap-8">
            {sections.map((section) => (
              <li
                key={section}
                className={` ${
                  selectedSection === section
                    ? "font-bold text-highlight-text"
                    : "text-white"
                }`}
                onClick={() => {
                  handleNavigation(section);
                }}
              >
                {section}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
      <nav className="fixed bottom-0 left-0 w-screen p-5 bg-tertiary-bg z-10 rounded-xl lg:hidden">
        <ul className="flex justify-around">
          {sections.map((section) => (
            <li
              key={section}
              className={` ${
                selectedSection === section
                  ? "font-bold text-highlight-text"
                  : "text-white"
              }`}
              onClick={() => {
                handleNavigation(section);
              }}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MainContent;
