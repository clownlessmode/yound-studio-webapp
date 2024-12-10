"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactFooter = () => {
  return (
    <motion.div
      initial={{ y: "100%" }} // Начальное положение снизу
      animate={{ y: "0%" }} // Анимация до позиции на экране
      transition={{ duration: 0.5, ease: "easeOut" }} // Длительность анимации
      className="text-center font-semibold bg-[#202022] bottom-0 w-full py-4 text-white px-4"
    >
      Напишите Никите, чтобы задать вопрос
    </motion.div>
  );
};

export default ContactFooter;
