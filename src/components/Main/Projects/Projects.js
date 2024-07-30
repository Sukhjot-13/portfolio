import React from "react";
import ProjectCard from "@/components/Main/Projects/ProjectCard";
import Underline from "@/lib/Underline/Underline";
import SwipeTransition from "@/lib/Transitions/SwipeTransition";
import urlShort from "@/images/urlShort.jpg";
const projects = [
  {
    title: "Url Shortner",
    tag: "Web Development",
    frontend: "Next.js, React, Tailwind CSS",
    backend: "Node.js, MongoDB",
    website: "https://sukhurl.netlify.app/",
    description:
      "Url Shortner is a web app that allows users to shorten their long URLs. Users can create an account, create a short URL, and share it with friends. This project was built using Next.js, React, Tailwind CSS, Node.js and MongoDB. The links expires after a fixed time period.",
    features: [
      "Fully responsive design",
      "Custom user authentication",
      "Real-time link count tracking",
      "Link Expiry",
    ],
    image: urlShort,
  },
  {
    title: "Ecommerce Website",
    tag: "Web Development",
    frontend: "React",
    backend: "Node.js, MongoDB",
    website: "https://sukhurl.netlify.app/",
    description:
      "Ecommerce website is a web app that allows users to buy products. Users can create an account, add products to cart, and checkout. This project was built using React, Tailwind CSS, Node.js, MongoDB.",
    features: [
      "Responsive design",
      "User authentication using firebase",
      "Payment Gateway Integration using stripe",
      "Real-time cart count tracking",
      "Real-time checkout",
    ],
    image: urlShort,
  },
  {
    title: "React native Ecommerce",
    tag: "Mobile Development",
    frontend: "React Native, Expo, Firebase, Stripe & tailwind CSS",
    backend: "Node.js, MongoDB",
    website: "https://sukhurl.netlify.app/",
    description:
      "Ecommerce mobile app is a mobile app that allows users to buy products. Users can create an account, add products to cart, and checkout. This project was built using React Native, Expo, Firebase, Stripe & tailwind CSS.",
    features: [
      "Responsive design",
      "User authentication using firebase",
      "Payment Gateway Integration using stripe",
      "Real-time cart count tracking",
      "Real-time checkout",
    ],
    image: urlShort,
  },
  {
    title: "Retro Website",
    tag: "Web Development",
    frontend: "HTML, CSS & JavaScript",
    backend: "",
    website: "https://sukhretro.netlify.app",
    description:
      "Retro website for Ford mustang 1980. This project was built using HTML, CSS & JavaScript. The website is responsive.",
    features: ["Responsive design", "Small Animations"],
    image: urlShort,
  },
];

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
