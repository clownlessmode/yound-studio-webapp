"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroText = () => {
  const lines = ["Делаем удобные", "сервисы для бизнеса", "в телеграме"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Задержка между появлением строк
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.h1
      className="text-center w-full font-bold leading-[90%] text-3xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, index) => (
        <motion.span key={index} className="block" variants={lineVariants}>
          {line}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default HeroText;
