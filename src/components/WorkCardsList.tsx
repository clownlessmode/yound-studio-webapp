"use client";

import React from "react";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard";

const cards = [
  {
    title: "Визитка для Тимура Хлебникова",
    description: "Сделали информационную страницу",
    image: "/works/timur.webp",
    link: "https://t.me/Khlebnikov_pro_bot",
    color: "#000000",
    bgColor: "#FFFFFF",
  },
  {
    title: "CRM-система",
    description:
      "Система, чтобы отслеживать всех пользователей, отправлять рассылки и получать важные уведомления",
    image: "/works/crm.webp",
    link: "https://t.me/youndstudio_crm_example_bot",
    color: "#ffffff",
    bgColor: "#3076D8",
  },
  {
    title: "Магазин Радуга",
    description: "Полноценный интернет магазин от выбора товара и до оплаты",
    image: "/works/raduga.webp",
    link: "https://t.me/raduga_mich_bot",
    color: "#000000",
    bgColor: "#FFFFFF",
  },
  {
    title: "Садроном",
    description:
      "Искусственный интеллект решает сложные школьные и вузовские задания за 1 минуту",
    image: "/works/sadranom.webp",
    link: "https://t.me/sadranomBot",
    color: "#000000",
    bgColor: "#FFFFFF",
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

const WorkCardsList = () => {
  return (
    <motion.section
      className="flex flex-col gap-[5px] mt-[20px]"
      initial="hidden"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <WorkCard
            bgColor={card.bgColor}
            color={card.color}
            image={card.image}
            link={card.link}
            title={card.title}
            description={card.description}
          />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default WorkCardsList;
