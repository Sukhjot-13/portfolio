import React from "react";

const Certifications = ({ certifications }) => {
  return (
    <div className="">
      <div>
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="mb-4 p-4 border border-secondary-bg rounded-md bg-secondary-bg flex items-center"
          >
            <div className="text-3xl mr-4">{cert.icon}</div>
            <div>
              <h4 className="text-xl font-bold text-primary-heading">
                {cert.title}
              </h4>
              <p className="text-secondary-text">Valid until: {cert.till}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
