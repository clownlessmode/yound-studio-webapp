"use client";

import React from "react";
import { motion } from "framer-motion";

const Line = () => {
  return (
    <motion.div
      initial={{
        width: "0px",
        height: "1px",
        margin: "0 auto",
        backgroundColor: "#D9D9DC",
        borderRadius: "2px",
      }}
      animate={{
        width: "228px",
      }}
      transition={{
        duration: 1, // Время анимации в секундах
        ease: "easeInOut", // Плавность анимации
      }}
      className="bg-[#D9D9DC] h-[1px] mx-auto rounded-full pt-[1px]"
    />
  );
};

export default Line;
