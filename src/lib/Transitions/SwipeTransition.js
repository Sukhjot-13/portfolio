import React from "react";
import { motion } from "framer-motion";

const SwipeTransition = ({ children, direction }) => {
  const variants = {
    enter: {
      translateX: direction === "forward" ? "100%" : "-100%",
      opacity: 0,
    },
    center: {
      translateX: 0,
      opacity: 1,
    },
    exit: {
      // translateX: direction === "forward" ? "-100%" : "100%",
      scale: 0.5,
      opacity: 0,
    },
  };
  return (
    <motion.div
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default SwipeTransition;
