"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import Drawer from "@/components/Drawer";
import Image from "next/image";
import Link from "next/link";
import { link } from "fs";
const cards = [
  {
    header: "Приложения и визитки",
    color: "#8ECFFD",
    descriptionColor: "#517792",
    description:
      "Создать информационную страницу. Запустить игру, или создать онлайн-магазин. Все откроется одной кнопкой в Телеграме",
    link: "/apps",
  },
  {
    header: "Чат боты и воронки",
    color: "#C5F3AB",
    descriptionColor: "#799C65",
    link: "/bots",
    description:
      "Автоматически продавать товары, отвечать на вопросы и прогревать клиентов. Бот — это ваш личный ассистент, который все умеет ",
  },
  {
    header: "🔥 CRM и управляемые базы",
    color: "#FFFFFF",
    descriptionColor: "#8A8D90",

    description:
      "Управлять базой контактов, отслеживать заявки и получать уведомления о любых изменения в личные сообщения ",
    link: "/crms",
  },
  {
    header: "Искуственный интеллект",
    color: "#BB74FF",
    descriptionColor: "#72449D",

    description:
      "Думает и принимает решения как человек, но не заменяет его. Подключим самую инновационную модель AI",
    link: "/lms",
  },
];
const CardList = () => {
  return (
    <motion.section
      className="flex flex-col mt-[40px] mb-[20px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.color}
          initial={{
            marginTop: index === 0 ? 0 : -110,
            opacity: 1,
          }}
          animate={{
            marginTop: index === 0 ? 0 : 5,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 1,
              type: "tween",
              ease: "easeInOut",
            },
          }}
        >
          <Link href={card.link}>
            <Card
              descriptionColor={card.descriptionColor}
              color={card.color}
              header={card.header}
              description={card.description}
            />
          </Link>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default CardList;
