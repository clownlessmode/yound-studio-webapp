"use client";
import { ArrowUpLeft, ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";
import Video from "@/components/Video";
import Image from "next/image";
import { motion } from "framer-motion";

const examples = [
  {
    title: "Визитка для Тимура Хлебникова",
    image: "/apps/example1.png",
    link: "https://t.me/Khlebnikov_pro_bot",
  },
  {
    title: "Визитка для Молодой студии",
    image: "/apps/example2.png",
    link: "https://t.me/youngstudio_bot",
  },
  {
    title: "Интернет-магазин Радуга",
    image: "/apps/example3.png",
    link: "https://t.me/raduga_mich_bot",
  },
];

const nextLink = { title: "Перейти к чат-ботам и воронкам ", link: "bots" };

const Page = () => {
  return (
    <>
      <main className="pb-[40px] flex-1 overflow-y-auto h-full flex-grow px-[15px] w-full flex flex-col ">
        <section className="flex flex-row gap-[7.4px] items-center justify-between mt-[40px] ">
          <Link
            href={"/"}
            className="py-[10px] px-[14px] bg-white rounded-full my-2 top-1 right-3 backdrop-blur-lg flex items-center justify-center"
          >
            <ArrowUpLeft size={14} />
            <p className="font-medium text-[12px] leading-[14.14px] text-black">
              Назад
            </p>
          </Link>
          <h2 className="text-center font-semibold text-[14px]">
            Молодая студия
          </h2>
          <Link
            href={"/"}
            className="py-[10px] px-[14px] bg-white rounded-full my-2 top-1 right-3 backdrop-blur-lg flex items-center justify-center invisible"
          >
            <ArrowUpLeft size={14} />
            <p className="font-medium text-[12px] leading-[14.14px] text-black">
              Назад
            </p>
          </Link>
        </section>
        {/* Секция видео */}
        <Video src="/apps.webm" />
        <section className="bg-white rounded-[30px]  w-full py-[25px] font-semibold text-[24px] text-[#202022]">
          <h1 className="w-full text-center">Приложения и визитки</h1>
          <p className="font-medium text-[16px] text-[#202022] leading-[14.4px] w-full text-center mt-2">
            Примеры готовых работ
          </p>
          <div className="slider-container overflow-hidden w-full mt-[5px]">
            <motion.div
              className="slider flex gap-[4px]"
              drag="x"
              dragConstraints={{ left: -610, right: 0 }} // Ограничения для прокрутки
              whileTap={{ cursor: "grabbing" }}
            >
              {examples.map((item, index) => (
                <motion.a
                  href={item.link}
                  className={`bg-[#F1F1F9] rounded-full py-[15px] px-[25px] flex flex-row items-center justify-center gap-[10px] w-fit ${
                    index == 0 ? "ml-[25px]" : "ml-[10px]"
                  }`}
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="font-medium text-[16px] text-[#202022] leading-[12.6px] text-nowrap">
                    {item.title}
                  </p>
                  <Image
                    alt=""
                    src={item.image}
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
          <div className="text-container font-medium text-[16px] text-[#202022] leading-[19px] mt-6 px-[25px]">
            <p>
              Приложения в Telegram — это интерактивные страницы, которые
              открываются прямо внутри мессенджера. Пользователь взаимодействует
              с сервисами, платформами, сайтами не покидая Телеграм: не нужно
              что-то скачивать и куда-то переходить.
            </p>
            <p>
              Это удобный способ предоставить пользователям доступ к различным
              функциям и услугам: информационные страницы, запуск игр, создание
              интернет-магазинов или образовательных платформ.
            </p>
            <p>
              Представьте разнообразие приложений в App Store — все это теперь
              можно создать в Telegram, в одном месте.
            </p>
            <p>
              Понимаем, что сейчас сложно понять, что можно реализовать. Важно,
              чтобы созданное приложение было удобно использовать в Телеграме.
              Например, в приложении можно реализовать бронирование
              консультаций. Это удобно, если вы общаетесь с клиентом в
              мессенджере.
            </p>
          </div>
        </section>
        <Link
          href={nextLink.link}
          className="w-full items-center justify-center flex text-center mt-[25px] text-[#8A8D90] text-[16px] leading-[18.85px] font-medium"
        >
          {nextLink.title} <ArrowUpRight size={16} className="mt-[2px]" />
        </Link>
      </main>
      <ContactFooter />
    </>
  );
};

export default Page;
