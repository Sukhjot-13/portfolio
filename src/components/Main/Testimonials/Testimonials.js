import React from "react";
import Image from "next/image";

const Testimonials = ({ testimonials }) => {
  return (
    <div className="flex gap-5 overflow-x-auto scrollbar-thin pb-2">
      {testimonials.map((testimonial, index) => {
         const avatarSrc = testimonial.avatarType === "male" ? "/maleAvatar.jpg" : "/femaleAvatar.png";
         
         return (
            <div
              key={index}
              className="bg-tertiary-bg p-5 flex-shrink-0 flex flex-col relative pt-12 mt-16 rounded-xl w-full lg:w-1/2"
            >
              <div className="absolute -top-10 -left-0.8 bg-tertiary-bg rounded-full p-1">
                 <div className="w-[80px] h-[80px] overflow-hidden rounded-full border-2 border-highlight-text bg-white relative">
                    <Image 
                        src={avatarSrc} 
                        alt={testimonial.name} 
                        fill 
                        className="object-cover"
                    />
                 </div>
              </div>
              <p className="text-primary-text font-bold ml-12">
                {testimonial.name}
              </p>
               <p className="text-sm text-highlight-text ml-12 mb-2">
                {testimonial.position}
              </p>
              <p className="text-secondary-text text-sm italic">"{testimonial.testimonial}"</p>
            </div>
        )
      })}
    </div>
  );
};

export default Testimonials;
