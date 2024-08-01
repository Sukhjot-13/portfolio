// import React from "react";
// import { useModal } from "@/Contexts/ModalContext";
// import Image from "next/image";

// function ProjectModal({ project }) {
//   const { hideModal } = useModal();

//   return (
//     <div className=" text-lg bg-tertiary-bg relative p-4 mt-7 pt-7 w-[95vw] h-[90dvh] rounded-xl scrollbar-thin overflow-x-auto md:w-[70vw]">
//       <p
//         onClick={hideModal}
//         className="absolute top-0 right-0 p-4 text-highlight-text text-2xl cursor-pointer "
//       >
//         &#10008;
//       </p>
//       <div className="w-full my-8">
//         <div className="w-full flex flex-col md:flex-row md:justify-start ">
//           <div className="w-full h-64 rounded-xl overflow-hidden mb-3 md:w-72 md:h-72 bg-white">
//             <Image
//               src={project.image}
//               alt="project"
//               className="object-cover md:w-72 md:h-72"
//               width="500"
//               height="500"
//             />
//           </div>
//           <div className="md:text-left md:ml-4 md:flex md:justify-between md:flex-col ">
//             <h4 className="text-primary-heading font-bold text-4xl md:text-5xl ">
//               {project.title}
//             </h4>
//             <p className="text-primary-text text-xl md:text-2xl">
//               {project.tag}
//             </p>
//             <div className="mt-4">
//               <h5 className="font-bold text-lg text-primary-heading ">
//                 {" "}
//                 Technologies
//               </h5>
//               <div className="flex flex-row gap-2">
//                 <h6>
//                   <span className="text-primary-heading font-bold">
//                     Frontend:
//                   </span>
//                 </h6>
//                 <p className="text-primary-text ">{project.frontend}</p>
//               </div>
//               <div className="flex flex-row gap-2">
//                 <h6>
//                   <span className="text-primary-heading font-bold">
//                     Backend:
//                   </span>
//                 </h6>
//                 <p className="text-primary-text ">{project.backend}</p>
//               </div>
//             </div>
//             <div className="flex  my-4">
//               <a
//                 href={project.website}
//                 className="text-highlight-text underline"
//                 target="_blank"
//               >
//                 Go to Website
//               </a>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="texlt-left mb-5">
//             <h5 className="text-left text-2xl mb-2 text-primary-heading">
//               Description:
//             </h5>
//             <p className="text-primary-text">{project.description}</p>
//           </div>
//           <div>
//             <h5 className="text-left text-2xl text-primary-heading mb-2">
//               Key Features:
//             </h5>
//             <ul className="flex flex-col gap-1 text-left list-disc pl-5">
//               {project.features.map((feature) => (
//                 <li className="text-primary-text " key={feature}>
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectModal;
import React from "react";
import { useModal } from "@/Contexts/ModalContext";
import Image from "next/image";

function ProjectModal({ project }) {
  const { hideModal } = useModal();

  return (
    <div className="text-lg bg-tertiary-bg relative p-4 mt-7 pt-7 w-[95vw] h-[90dvh] rounded-xl scrollbar-thin overflow-x-auto md:w-[70vw]">
      <p
        onClick={hideModal}
        className="absolute top-0 right-0 p-4 text-highlight-text text-2xl cursor-pointer"
      >
        &#10008;
      </p>
      <div className="w-full my-8">
        <div className="w-full flex flex-col md:flex-row md:justify-start">
          <div className="w-full h-64 rounded-xl overflow-hidden mb-3 md:w-72 md:h-72 bg-white">
            <Image
              src={project.image}
              alt="project"
              className="object-cover md:w-72 md:h-72"
              width="500"
              height="500"
            />
          </div>
          <div className="md:text-left md:ml-4 md:flex md:justify-between md:flex-col">
            <h4 className="text-primary-heading font-bold text-4xl md:text-5xl">
              {project.title}
            </h4>
            <p className="text-primary-text text-xl md:text-2xl">
              {project.tag}
            </p>
            <div className="mt-4">
              <h5 className="font-bold text-lg text-primary-heading">
                Technologies
              </h5>
              <div className="flex flex-row gap-2">
                <h6>
                  <span className="text-primary-heading font-bold">
                    Frontend:
                  </span>
                </h6>
                <p className="text-primary-text">{project.frontend}</p>
              </div>
              <div className="flex flex-row gap-2">
                <h6>
                  <span className="text-primary-heading font-bold">
                    Backend:
                  </span>
                </h6>
                <p className="text-primary-text">{project.backend}</p>
              </div>
            </div>
            <div className="flex my-4 gap-4">
              <a
                href={project.website}
                className="text-highlight-text underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Website
              </a>
              <a
                href={project.github}
                className="text-highlight-text underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-left mb-5">
            <h5 className="text-left text-2xl mb-2 text-primary-heading">
              Description:
            </h5>
            <p className="text-primary-text">{project.description}</p>
          </div>
          <div>
            <h5 className="text-left text-2xl text-primary-heading mb-2">
              Key Features:
            </h5>
            <ul className="flex flex-col gap-1 text-left list-disc pl-5">
              {project.features.map((feature) => (
                <li className="text-primary-text" key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
