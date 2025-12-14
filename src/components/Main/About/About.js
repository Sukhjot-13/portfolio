import React from "react";
import Underline from "@/lib/Underline/Underline";
import SwipeTransition from "@/lib/Transitions/SwipeTransition";
import WebDev from "@/lib/Svg/WebDev";
import MobileDev from "@/lib/Svg/MobileDev";
import Testimonials from "@/components/Main/Testimonials/Testimonials";
import data from "@/data/data.json";

function About({ dirction }) {
  const { profile, whatImDoing, testimonials } = data;

  const getIcon = (type) => {
    switch (type) {
      case "WebDev":
        return <WebDev />;
      case "MobileDev":
        return <MobileDev />;
      default:
        return null;
    }
  };

  return (
    <SwipeTransition dirction={dirction}>
      <div className="p-5 lg:p-7">
        <h3 className="font-bold text-2xl text-primary-text  ">About Me</h3>
        <Underline />
        <section>
          <p className="text-primary-text mt-2 whitespace-pre-line">
            {profile.about}
          </p>
        </section>
        {/* what i'm doing sections start */}
        <section>
          <h4 className="font-bold text-xl text-primary-heading mt-10">{`What I'm Doing`}</h4>
          <div className="grid gap-5 sm:grid-cols-2 mt-4">
            {whatImDoing.map((skill) => (
              <div
                key={skill.title}
                className="bg-tertiary-bg rounded-xl p-5 flex flex-col justify-center items-center w-full sm:flex-row"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden mb-3 bg-black sm:mb-0 flex-shrink-0">
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
                    {getIcon(skill.iconType)}
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
          <Testimonials testimonials={testimonials} />
        </section>
      </div>
    </SwipeTransition>
  );
}

export default About;
