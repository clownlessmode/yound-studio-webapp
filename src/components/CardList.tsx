"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const CardList = () => {
  const cards = [
    {
      header: "Приложения и визитки",
      color: 205,
      description:
        "Веб-визитки и приложения помогают бизнесу быть доступным онлайн, улучшая взаимодействие с клиентами и увеличивая удобство.",
    },
    {
      header: "Чат боты и воронки",
      color: 98,
      description:
        "Чат-боты помогают бизнесу автоматизировать общение с клиентами, ускоряя ответы и улучшая сервис.",
    },
    {
      header: "CRM и управляемые базы",
      color: 250,
      description:
        "CRM-системы помогают бизнесу эффективно управлять взаимоотношениями с клиентами, улучшая продажи и поддержку.",
    },
    {
      header: "Искуственный интеллект",
      color: 300,
      description:
        "Искусственный интеллект помогает бизнесу анализировать данные, автоматизировать процессы и предоставлять персонализированные решения.",
    },
  ];

  return (
    <motion.section
      className="flex flex-col"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }} // Быстрое появление
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.color}
          initial={{
            marginTop: index === 0 ? 0 : -110,
            opacity: 1,
          }}
          animate={{
            marginTop: index === 0 ? 0 : 8,
            opacity: 1,
            transition: {
              duration: 1, // Увеличил длительность до 1 секунды
              delay: 1, // Задержка в 1 секунду
              type: "tween", // Заменил spring на tween для более плавного движения
              ease: "easeInOut", // Добавил более мягкую кривую анимации
            },
          }}
        >
          <div
            style={{ backgroundColor: `hsl(${card.color}, 97%, 77%)` }}
            className="rounded-[1.25rem] p-5"
          >
            <h3 className="font-bold text-[#202022]">{card.header}</h3>
            <p>{card.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default CardList;
