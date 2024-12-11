"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactFooter = () => {
  return (
    <motion.a
      href="https://t.me/chendev1"
      initial={{ y: "100%" }} // Начальное положение снизу
      animate={{ y: "0%" }} // Анимация до позиции на экране
      transition={{ duration: 0.5, ease: "easeOut" }} // Длительность анимации
      className="text-center font-medium bg-[#202022] leading-[17px] bottom-0 w-full pt-[15px] pb-[25px] text-white px-4 text-[14px]"
    >
      Напишите Никите
      <br />
      чтобы задать вопрос
    </motion.a>
  );
};

export default ContactFooter;
