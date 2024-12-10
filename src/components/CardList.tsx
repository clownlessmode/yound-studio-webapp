"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import Drawer from "@/components/Drawer";
import Image from "next/image";
const cards = [
  {
    header: "Приложения и визитки",
    color: 205,
    description:
      "Веб-визитки и приложения помогают бизнесу быть доступным онлайн, улучшая взаимодействие с клиентами и увеличивая удобство.",
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
    color: 98,
    description:
      "Чат-боты помогают бизнесу автоматизировать общение с клиентами, ускоряя ответы и улучшая сервис.",
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
    header: "CRM и управляемые базы",
    color: 250,
    description:
      "CRM-системы помогают бизнесу эффективно управлять взаимоотношениями с клиентами, улучшая продажи и поддержку.",
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
    color: 300,
    description:
      "Искусственный интеллект помогает бизнесу анализировать данные, автоматизировать процессы и предоставлять персонализированные решения.",
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
      className="flex flex-col"
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
            marginTop: index === 0 ? 0 : 8,
            opacity: 1,
            transition: {
              duration: 1,
              delay: 1,
              type: "tween",
              ease: "easeInOut",
            },
          }}
        >
          <Drawer
            media={card.media}
            trigger={
              <Card
                color={card.color}
                header={card.header}
                description={card.description}
              />
            }
          >
            {card.сontent}
          </Drawer>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default CardList;
