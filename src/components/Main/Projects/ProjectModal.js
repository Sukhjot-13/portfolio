"use client";
import React from "react";
import { useModal } from "@/Contexts/ModalContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

function ProjectModal({ project }) {
  const { hideModal } = useModal();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative w-[95vw] h-[90vh] md:w-[80vw] md:h-[85vh] 
                 bg-tertiary-bg/90 backdrop-blur-xl rounded-2xl 
                 shadow-2xl overflow-hidden flex flex-col border border-white/10"
    >
      {/* Header / Close Button */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={hideModal}
          className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
        >
          <IoClose size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <div className="flex flex-col lg:flex-row h-full">
            
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-64 lg:h-auto relative bg-black/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tertiary-bg via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col gap-6">
            
            {/* Title & Tag */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <span className="inline-block px-3 py-1 rounded-full bg-highlight-text/10 text-highlight-text text-sm font-medium border border-highlight-text/20">
                {project.tag}
              </span>
            </div>

            {/* Links */}
            <div className="flex gap-4">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-lg bg-highlight-text text-black font-semibold hover:bg-yellow-400 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-white transition-colors"
                    >
                        GitHub
                    </a>
                )}
            </div>

            {/* Tech Stack */}
            <div>
                <h3 className="text-lg font-bold text-gray-300 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                    {/* Parse frontend/backend strings to array if possible, or just split by comma */}
                    {project.frontend.split(',').map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-md bg-blue-500/20 text-blue-200 text-xs border border-blue-500/30">
                            {tech.trim()}
                        </span>
                    ))}
                    {project.backend && project.backend.split(',').map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-md bg-green-500/20 text-green-200 text-xs border border-green-500/30">
                            {tech.trim()}
                        </span>
                    ))}
                </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-bold text-gray-300 mb-2">About</h3>
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Features */}
            <div>
                <h3 className="text-lg font-bold text-gray-300 mb-2">Key Features</h3>
                <ul className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-highlight-text flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectModal;
