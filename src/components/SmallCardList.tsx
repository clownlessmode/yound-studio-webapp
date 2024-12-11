"use client";

import React from "react";
import { motion } from "framer-motion";
import SmallCard from "./SmallCard";

// Карточки
const cards = [
  {
    text: "Видео презентация: о нас",
  },
  {
    text: "Успешные работы",
  },
  {
    text: "Телеграм канал студии",
  },
];

// Анимация
const cardAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const SmallCardList = () => {
  return (
    <motion.section
      className="flex flex-col gap-2 mt-[20px] mb-[86px]"
      initial="hidden"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false, // Можно анимировать при каждом входе в область видимости
            amount: 0.5, // Когда 50% элемента виден
          }}
        >
          <SmallCard
            variant={index > 0 ? "secondary" : "primary"}
            text={card.text}
          />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default SmallCardList;
