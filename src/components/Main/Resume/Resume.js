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
import data from "@/data/data.json";

function Resume({ direction }) {
  const { resume } = data;
  
  const getIcon = (iconType, className = "") => {
     switch (iconType) {
        case "FaMobileAlt": return <FaMobileAlt className={className} />;
        case "SiBurgerking": return <SiBurgerking className={className} />;
        case "FaStore": return <FaStore className={className} />;
        case "FaRegHospital": return <FaRegHospital className={className} />;
        case "FaShieldAlt": return <FaShieldAlt className={className} />;
        case "IoIosSchool": return <IoIosSchool className={className} />;
        case "FaSchool": return <FaSchool className={className} />;
        case "FaRegLifeRing": return <FaRegLifeRing className={className} />;
        case "FaMedkit": return <FaMedkit className={className} />;
        case "SiReact": return <SiReact size={60} className={className} />;
        case "SiNextdotjs": return <SiNextdotjs size={60} className={className} />;
        case "SiHtml5": return <SiHtml5 size={60} className={className} />;
        case "SiCss3": return <SiCss3 size={60} className={className} />;
        case "SiJavascript": return <SiJavascript size={60} className={className} />;
        case "SiFirebase": return <SiFirebase size={60} className={className} />;
        case "SiAuth0": return <SiAuth0 size={60} className={className} />; 
        default: return null;
     }
  };

  const experienceTimelineData = resume.experience.map(item => ({
      ...item,
      icon: getIcon(item.iconType, item.iconColor)
  }));

  const educationTimelineData = resume.education.map(item => ({
      ...item,
      icon: getIcon(item.iconType, item.iconColor)
  }));

  const license = resume.licenses.map(item => ({
      ...item,
      icon: getIcon(item.iconType, "text-highlight-text")
  }));

  const items = resume.techStack.map(item => ({
      ...item,
      icon: getIcon(item.iconType, item.iconColor)
  }));


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
