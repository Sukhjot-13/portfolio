// import React from "react";
// import { FaRegEye } from "react-icons/fa";
// import { useModal } from "@/Contexts/ModalContext";
// import ProjectModal from "./ProjectModal";
// import Image from "next/image";

// function ProjectCard({ project }) {
//   const { showModal } = useModal();

//   const handleOpenModal = () => {
//     showModal(<ProjectModal project={project} />);
//   };
//   return (
//     <div>
//       <div className="relative group" onClick={handleOpenModal}>
//         <div className="w-full h-72 rounded-xl overflow-hidden mb-3 bg-black relative">
//           {/* <img
//             src={project.image}
//             alt={project.title}
//             className="cover w-full h-full transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
//           /> */}
//           <Image
//             src={project.image}
//             // layout="fill"
//             // objectFit="cover"
//             width="auto"
//             height="auto"
//             alt={project.title}
//             className="transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
//           />
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <FaRegEye className="text-white text-4xl" />
//           </div>
//         </div>
//         <h5 className="text-primary-heading font-bold text-xl text-center">
//           {project.title}
//         </h5>
//         <p className="text-primary-text text-center">{project.tag}</p>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;
import React from "react";
import { FaRegEye } from "react-icons/fa";
import { useModal } from "@/Contexts/ModalContext";
import ProjectModal from "./ProjectModal";
import Image from "next/image";

function ProjectCard({ project }) {
  const { showModal } = useModal();

  const handleOpenModal = () => {
    showModal(<ProjectModal project={project} />);
  };
  return (
    <div>
      <div className="relative group" onClick={handleOpenModal}>
        <div className="w-full h-72 rounded-xl overflow-hidden mb-3 bg-black relative">
          <Image
            src={project.image}
            width="auto"
            height="auto"
            alt={project.title}
            className="cover w-full h-full transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaRegEye className="text-white text-4xl" />
          </div>
        </div>
        <h5 className="text-primary-heading font-bold text-xl text-center">
          {project.title}
        </h5>
        <p className="text-primary-text text-center">{project.tag}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
