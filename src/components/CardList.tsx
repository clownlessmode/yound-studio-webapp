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
    header: (
      <>
        <svg
          width="19"
          height="21"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.16744 4.7216C8.32852 4.28629 8.94421 4.28629 9.10529 4.7216L10.8892 9.54249C10.9398 9.67935 11.0477 9.78725 11.1846 9.83789L16.0055 11.6218C16.4408 11.7829 16.4408 12.3986 16.0055 12.5596L11.1846 14.3435C11.0477 14.3942 10.9398 14.5021 10.8892 14.6389L9.10529 19.4598C8.94421 19.8951 8.32852 19.8951 8.16744 19.4598L6.38355 14.6389C6.33291 14.5021 6.225 14.3942 6.08814 14.3435L1.26725 12.5596C0.831943 12.3986 0.831944 11.7829 1.26725 11.6218L6.08814 9.83789C6.225 9.78725 6.33291 9.67935 6.38355 9.54249L8.16744 4.7216Z"
            fill="#202022"
          />
          <path
            d="M15.0766 1.26725C15.2376 0.831943 15.8533 0.831944 16.0144 1.26725L16.3987 2.30588C16.4494 2.44274 16.5573 2.55065 16.6941 2.60129L17.7328 2.98562C18.1681 3.1467 18.1681 3.76239 17.7328 3.92347L16.6941 4.3078C16.5573 4.35844 16.4494 4.46635 16.3987 4.60321L16.0144 5.64184C15.8533 6.07715 15.2376 6.07715 15.0766 5.64184L14.6922 4.60321C14.6416 4.46635 14.5337 4.35844 14.3968 4.3078L13.3582 3.92347C12.9229 3.76239 12.9229 3.1467 13.3582 2.98562L14.3968 2.60129C14.5337 2.55065 14.6416 2.44274 14.6922 2.30588L15.0766 1.26725Z"
            fill="#202022"
          />
        </svg>
        Искуственный интеллект
      </>
    ),
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
