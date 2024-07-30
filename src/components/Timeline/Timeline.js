// import React from "react";
// import { motion, useInView } from "framer-motion";

// const Timeline = ({ timelineData }) => {
//   return (
//     <div className="relative">
//       <div className="border-l-2 border-gray-200 ml-6">
//         {timelineData.map((event, index) => (
//           <TimelineItem key={index} event={event} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const TimelineItem = ({ event }) => {
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: 100 }}
//       animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
//       transition={{ duration: 0.6 }}
//       className="mb-8 flex items-center"
//     >
//       <div className="absolute left-1 w-10 h-10 flex items-center justify-center">
//         <div
//           className={`w-10 h-10 ${event.iconColor} rounded-full text-white flex items-center justify-center`}
//         >
//           {event.icon}
//         </div>
//       </div>
//       <div className="ml-12">
//         <h3 className="text-lg font-semibold">{event.title}</h3>
//         <time className="block mb-2 text-sm text-gray-400">{event.date}</time>
//         <p className="text-primary-text">{event.description}</p>
//       </div>
//     </motion.div>
//   );
// };

// export default Timeline;
import React from "react";
import { motion, useInView } from "framer-motion";

const Timeline = ({ timelineData }) => {
  return (
    <div className="relative">
      <div className="border-l-2 border-gray-200 ml-6">
        {timelineData.map((event, index) => (
          <TimelineItem key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ event }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
      transition={{ duration: 0.6 }}
      className="mb-8 flex items-center"
    >
      <motion.div
        className="absolute left-1 w-10 h-10 flex items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className={`w-10 h-10 ${event.iconColor} rounded-full text-white flex items-center justify-center`}
        >
          {event.icon}
        </div>
      </motion.div>
      <div className="ml-12">
        <h3 className="text-lg font-semibold text-primary-text">
          {event.title}
        </h3>
        <time className="block mb-2 text-sm text-highlight-text">
          {event.date}
        </time>
        <p className="text-secondary-text">{event.description}</p>
      </div>
    </motion.div>
  );
};

export default Timeline;
