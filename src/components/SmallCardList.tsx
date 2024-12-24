"use client";

import React from "react";
import { motion } from "framer-motion";
import SmallCard from "./SmallCard";

// Карточки
const cards = [
  {
    text: "Видео презентация: о нас",
    link: "#",
  },
  {
    text: "Успешные работы",
    link: "#",
  },
  {
    text: "Телеграм канал студии",
    link: "#",
  },
  {
    text: "Задать вопрос Никите",
    link: "https://t.me/chendev1",
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
    <motion.section className="flex flex-col gap-2 mt-[20px]" initial="hidden">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.5,
          }}
        >
          <SmallCard
            link={card.link}
            index={index}
            variant={index < cards.length - 1 ? "secondary" : "primary"}
            text={card.text}
          />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default SmallCardList;
