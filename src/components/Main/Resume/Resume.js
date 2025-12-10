import React from "react";
import Timeline from "@/components/Timeline/Timeline";
import { SiBurgerking } from "react-icons/si";
import { FaRegHospital } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { FaSchool } from "react-icons/fa6";
import Underline from "@/lib/Underline/Underline";
import SwipeTransition from "@/lib/Transitions/SwipeTransition";
import Certifications from "@/components/Main/Resume/Certifications/Certifications";
import { FaShieldAlt, FaMedkit, FaRegLifeRing, FaStore } from "react-icons/fa";
import Slider from "@/lib/Slider/Slider";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiAuth0,
} from "react-icons/si";

function Resume({ direction }) {
  const experienceTimelineData = [
    {
      date: "February 2024 - November 2024",
      title: "Mobile Application Developer (Intern), IHP (Interact Health Pro)",
      description:
        "Executed the full mobile development lifecycle, translating complex UI/UX designs into functional, high-performance mobile applications. Developed and optimized both front-end (using React/Next.Js) and robust back-end components, including API development and secure database integration (MongoDB/MySQL). Applied project management principles to define objectives, assign tasks, and monitor progress, ensuring project deadlines were consistently met. Provided technical expertise in debugging complex code, troubleshooting programmatic issues, and generating detailed technical documentation for future reference.",
      icon: <FaMobileAlt />,
      iconColor: "bg-blue-500",
    },
    {
      date: "May 2023 - Present",
      title: "Assistant Store Manager, Burger King",
      description:
        "Directed and supervised crew members during shifts, ensuring efficient service delivery and adherence to corporate quality and sanitation standards. Enhanced customer satisfaction ratings by effectively mediating and resolving customer complaints with professionalism and promptness. Managed critical financial operations, overseeing cash registers, balancing cash drawers, and ensuring accurate reporting of all shift transactions. Cultivated a positive and collaborative work environment, encouraging teamwork and providing constructive feedback to motivate staff performance.",
      icon: <SiBurgerking />,
      iconColor: "bg-orange-500",
    },
    {
      date: "September 2022 - Present",
      title: "Assistant Team Leader, Dollarama",
      description:
        "Managed daily store operations, workflow scheduling, and delegation of tasks to ensure peak productivity and efficiency across the floor. Executed critical opening and closing procedures, including comprehensive cash reconciliation, bank deposits, and maintaining stringent store security protocols. Optimized inventory management by ensuring accurate merchandise stocking, visual organization, and full compliance with corporate merchandising standards. Resolved customer inquiries and complaints promptly and professionally while handling high-volume cash transactions and balancing tills.",
      icon: <FaStore />,
      iconColor: "bg-green-600",
    },
    {
      date: "November 2023 - April 2024",
      title: "Patient Transfer Attendant, Encore",
      description:
        "Coordinated complex patient transfers between facilities, prioritizing safe, timely, and compliant transportation logistics. Maintained clear and professional communication with healthcare providers, patients, and families to facilitate seamless operational transitions. Strictly adhered to patient confidentiality guidelines (HIPAA/PHI) throughout all transfer and documentation processes.",
      icon: <FaRegHospital />,
      iconColor: "bg-red-500",
    },
    {
      date: " ",
      title: "Mobile/Security Guard, G Force Security, iGuard360 and Jayo security",
      description:
        "Monitored and maintained secure environments for commercial establishments and banking premises through consistent patrolling and proactive risk assessment. Managed and responded immediately to emergency security calls for various institutions during both day and night shifts, ensuring prompt resolution. Conducted detailed vehicle patrols across designated large areas to ensure comprehensive safety and protection of assets. Demonstrated strong situational awareness and problem-solving skills in high-pressure scenarios.",
      icon: <FaShieldAlt />,
      iconColor: "bg-gray-700",
    },
  ];
  const educationTimelineData = [
    {
      date: "May 2023-Present",
      title: "Computer Programming (Georgian college)",
      description:
        "I am in the process of completing my computer programming diploma at Georgian college. I am currently learning web development and mobile app development.",
      icon: <IoIosSchool />,
      iconColor: "bg-red-500",
    },
    {
      date: "2020-2022",
      title: "High School (Apollo Public School)",
      description:
        "I completed my high school at Apollo Public School in 2020-2022. I graduated with 92% in my high school.",
      icon: <FaSchool />,
      iconColor: "bg-blue-500",
    },
  ];
  const license = [
    {
      title: "First responder certification from Red Cross",
      icon: <FaRegLifeRing className="text-highlight-text" />,
    },
    {
      title: "First aid certification",
      icon: <FaMedkit className="text-highlight-text" />,
    },
    {
      title: "Security guard certification",
      icon: <FaShieldAlt className="text-highlight-text" />,
    },
  ];
  const items = [
    {
      icon: <SiReact key="react" size={60} className="text-blue-500" />,
      bgColor: "bg-blue-100",
      title: "React",
    },
    {
      icon: <SiNextdotjs key="nextjs" size={60} className="text-black" />,
      bgColor: "bg-gray-200",
      title: "Next.js",
    },
    {
      icon: <SiHtml5 key="html5" size={60} className="text-red-500" />,
      bgColor: "bg-red-100",
      title: "HTML5",
    },
    {
      icon: <SiCss3 key="css3" size={60} className="text-blue-600" />,
      bgColor: "bg-blue-200",
      title: "CSS3",
    },
    {
      icon: (
        <SiJavascript key="javascript" size={60} className="text-yellow-500" />
      ),
      bgColor: "bg-yellow-100",
      title: "JavaScript",
    },
    {
      icon: <SiFirebase key="firebase" size={60} className="text-yellow-600" />,
      bgColor: "bg-yellow-200",
      title: "Firebase",
    },
    {
      icon: <SiAuth0 key="auth0" size={60} className="text-orange-500" />,
      bgColor: "bg-orange-100",
      title: "Auth0",
    },
  ];

  return (
    <SwipeTransition direction={direction}>
      <div className="p-5 lg:p-7">
        <h3 className="font-bold text-2xl text-primary-text  ">Resume</h3>
        <Underline />
        <div className="p-5 lg:p-7">
          <h3 className="mb-7 text-xl font-bold text-primary-heading ">
            Experience
          </h3>
          <Timeline timelineData={experienceTimelineData} />
        </div>
        <div className="p-5 lg:p-7">
          <h3 className="mb-7 text-xl text-primary-heading font-bold ">
            Education
          </h3>
          <Timeline timelineData={educationTimelineData} />
        </div>
        <div className="p-5 lg:p-7 ">
          <h3 className="mb-7 text-xl font-bold text-primary-heading ">
            Tech Stack
          </h3>
          <Slider items={items} reverse={false} width={100} height={100} />
        </div>
        <div className="p-5 pt-2 lg:p-7 lg:pt-2">
          <h3 className="mb-7 text-xl font-bold text-primary-heading ">
            Lisenses
          </h3>
          <Certifications certifications={license} />
        </div>
      </div>
    </SwipeTransition>
  );
}

export default Resume;
