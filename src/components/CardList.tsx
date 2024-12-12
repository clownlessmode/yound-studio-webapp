"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import Drawer from "@/components/Drawer";
import Image from "next/image";
import Link from "next/link";
const cards = [
  {
    header: "Приложения и визитки",
    color: "#8ECFFD",
    descriptionColor: "#517792",
    description:
      "Создать информационную страницу. Запустить игру, или создать онлайн-магазин. Все откроется одной кнопкой в Телеграме",
    media: (
      <Image
        alt="media"
        src={"/app-test-image.png"}
        width={900}
        height={1200}
        className="w-full h-full object-cover"
      />
    ),
    сontent: (
      <>
        <h5>Приложения и визитки</h5>
        <h6>
          Такие приложения могут включать автоматизированные задачи, игры,
          интеграции с другими сервисами и платформами, и направлены на
          улучшение пользовательского опыта и функциональности Telegram
        </h6>
      </>
    ),
  },
  {
    header: "Чат боты и воронки",
    color: "#C5F3AB",
    descriptionColor: "#799C65",

    description:
      "Автоматически продавать товары, отвечать на вопросы и прогревать клиентов. Бот — это ваш личный ассистент, который все умеет ",
    media: (
      <Image
        alt="media"
        src={"/app-test-image.png"}
        width={900}
        height={1200}
        className="w-full h-full object-cover"
      />
    ),
    сontent: (
      <>
        <h5>Чат-боты и воронки продаж</h5>
        <h6>
          Автоматизация коммуникаций через telegram-ботов, создание эффективных
          воронок продаж, интеграция с CRM и аналитическими системами
        </h6>
      </>
    ),
  },
  {
    header: "🔥 CRM и управляемые базы",
    color: "#FFFFFF",
    descriptionColor: "#8A8D90",

    description:
      "Управлять базой контактов, отслеживать заявки и получать уведомления о любых изменения в личные сообщения ",
    media: (
      <Image
        alt="media"
        src={"/app-test-image.png"}
        width={900}
        height={1200}
        className="w-full h-full object-cover"
      />
    ),
    сontent: (
      <>
        <h5>CRM и базы данных</h5>
        <h6>
          Создание кастомных CRM-систем, интеграция баз данных, автоматизация
          учета клиентов, аналитика и отчетность
        </h6>
      </>
    ),
  },
  {
    header: "Искуственный интеллект",
    color: "#BB74FF",
    descriptionColor: "#72449D",

    description:
      "Думает и принимает решения как человек, но не заменяет его. Подключим самую инновационную модель AI",
    media: (
      <Image
        alt="media"
        src={"/app-test-image.png"}
        width={900}
        height={1200}
        className="w-full h-full object-cover"
      />
    ),
    сontent: (
      <>
        <h5>Решения на базе ИИ</h5>
        <h6>
          Разработка чат-ботов с ИИ, генерация контента, аналитические системы,
          персонализированные рекомендации
        </h6>
      </>
    ),
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
          <Link href={"/apps"}>
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
