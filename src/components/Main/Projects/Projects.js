import React from "react";
import ProjectCard from "@/components/Main/Projects/ProjectCard";
import Underline from "@/lib/Underline/Underline";
import SwipeTransition from "@/lib/Transitions/SwipeTransition";
import data from "@/data/data.json";
const projects = data.projects;


function Projects({ direction }) {
  return (
    <SwipeTransition direction={direction}>
      <div className="p-5 lg:p-7">
        <h3 className="font-bold text-2xl text-primary-text  ">Projects</h3>
        <Underline />
        <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3 mt-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </SwipeTransition>
  );
}

export default Projects;
