import React from "react";
import Underline from "@/lib/Underline/Underline";
import SwipeTransition from "@/lib/Transitions/SwipeTransition";
import WebDev from "@/lib/Svg/WebDev";
import MobileDev from "@/lib/Svg/MobileDev";
import Image from "next/image";
import avatar from "@/images/avatar.png";
import womanAvatar from "@/images/womanAvatar.png";
const skillsData = [
  {
    title: "Web Development",
    description:
      "I'm a skilled web developer with expertise in React, Node.js, and Next.js.",
    image: <WebDev />,
  },
  {
    title: "Mobile Development",
    description:
      "I'm a skilled mobile developer with expertise in React Native.",
    image: <MobileDev />,
  },
];

const testimonialsData = [
  {
    name: "Lucie Porter",
    position: "CEO, AJND.inc",
    testimonial:
      "Sukhjot led his team with great effectiveness, exhibiting remarkable leadership qualities. He made substantial contributions to the planning and research stages and was crucial in establishing the project's goals. His excellent problem-solving and technical capabilities were crucial in leading the team to a successful project conclusion. Sukhjot is a very committed and driven person who constantly went above and beyond. I have faith that he can make a significant contribution to any kind of organization.",
    image: womanAvatar,
  },
];

function About({ dirction }) {
  return (
    <SwipeTransition dirction={dirction}>
      <div className="p-5 lg:p-7">
        <h3 className="font-bold text-2xl text-primary-text  ">About Me</h3>
        <Underline />
        <section>
          <p className="text-primary-text mt-2">
            {`I'm Sukhjot Singh, a passionate full-stack developer specializing in the
            MERN stack. With expertise in crafting dynamic, user-friendly websites
            and applications, I'm dedicated to showcasing my skills and connecting
            with others through technology. From sleek frontend designs to robust
            backend functionalities, I thrive on bringing ideas to life. Explore my
            portfolio to see my proficiency in building custom web applications and
            optimizing user experiences.`}
          </p>
        </section>
        {/* what i'm doing sections start */}
        <section>
          <h4 className="font-bold text-xl text-primary-heading mt-10">{`What I'm Doing`}</h4>
          <div className="grid gap-5 sm:grid-cols-2 mt-4">
            {skillsData.map((skill) => (
              <div
                key={skill.title}
                className="bg-tertiary-bg rounded-xl p-5 flex flex-col justify-center items-center w-full sm:flex-row"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden mb-3 bg-black sm:mb-0 flex-shrink-0">
                  {/* <img
                    src={skill.image}
                    alt={skill.title}
                    className="object-cover w-full h-full"
                  /> */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#313131",
                      backgroundImage:
                        "radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0)",
                      backgroundSize: "30px 30px",
                      backgroundPosition: "-5px -5px",
                    }}
                  >
                    {skill.image}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 sm:ml-1">
                  <h5 className="text-primary-text font-bold text-xl text-center">
                    {skill.title}
                  </h5>
                  <p className="text-secondary-text text-center">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* testimonial section */}
        <section className="">
          <h5 className="font-bold text-xl text-primary-heading mt-10">
            Testimonials
          </h5>
          <div className="flex gap-5 overflow-x-auto scrollbar-thin pb-2">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-tertiary-bg p-5 flex-shrink-0 flex flex-col relative pt-12 mt-16 rounded-xl w-full lg:w-1/2"
              >
                <div className="absolute -top-10 -left-0.8 ">
                  <Image
                    src={testimonial.image}
                    alt="testimonial"
                    className="rounded-full w-[99px] h-[91px]"
                    width={140}
                    height={140}
                    // height={140}
                  />
                </div>
                <p className="text-primary-text font-bold ml-12">
                  {testimonial.name}
                </p>
                <p className="text-secondary-text">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SwipeTransition>
  );
}

export default About;
