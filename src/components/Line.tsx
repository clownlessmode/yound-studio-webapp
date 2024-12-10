"use client";

import React from "react";
import { motion } from "framer-motion";

const Line = () => {
  return (
    <motion.div
      initial={{
        width: "0%",
        height: "1px",
        margin: "0 auto",
        backgroundColor: "#D9D9DC",
        borderRadius: "2px",
      }}
      animate={{
        width: "80%",
      }}
      transition={{
        duration: 1, // Время анимации в секундах
        ease: "easeInOut", // Плавность анимации
      }}
      className="bg-black h-1 mx-auto rounded"
    />
  );
};

export default Line;
