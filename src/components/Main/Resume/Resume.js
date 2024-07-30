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
import { FaShieldAlt, FaMedkit, FaRegLifeRing } from "react-icons/fa";
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
      date: "May 2024-Present",
      title: "Mobile App Developer (Team lead)",
      description:
        "I am currently working as a team lead in a mobile app development team at IHP(Interact health pro). I am responsible for leading a team of developers, managing project timelines, and ensuring the quality of the app.",
      icon: <FaMobileAlt />,
      iconColor: "bg-blue-500",
    },
    {
      date: "January 2024-May 2024",
      title: "Patient Transfer ",
      description:
        "I was a patient transfer assistant, I was responsible for transferring patients from one hospital to another or to third party care centers.",
      icon: <FaRegHospital />,
      iconColor: "bg-red-500",
    },
    {
      date: "May 2023 - Present",
      title: "Burger King (Part-time)",
      description:
        "I am currently working as a part-time employee at Burger King. I am responsible for preparing and serving food, handling cash transactions, and providing excellent customer service.",
      icon: <SiBurgerking />,
      iconColor: "bg-blue-500",
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
      till: "2027",
      icon: <FaRegLifeRing className="text-highlight-text" />,
    },
    {
      title: "First aid certification",
      till: "2026",
      icon: <FaMedkit className="text-highlight-text" />,
    },
    {
      title: "Security guard certification",
      till: "2025",
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
