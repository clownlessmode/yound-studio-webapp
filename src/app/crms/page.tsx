"use client";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";
import Video from "@/components/Video";
import "swiper/css";
import { motion } from "framer-motion";

const nextLink = { title: "Перейти к CRM и управляемым базам", link: "lms" };

const Page = () => {
  return (
    <>
      <main className="pb-[40px] flex-1 overflow-y-auto h-full flex-grow px-[15px] w-full flex flex-col ">
        <section className="flex flex-row gap-[7.4px] items-center justify-between mt-[40px] ">
          <Link
            href={"/"}
            className="py-[12px] px-[16px] bg-white rounded-full my-2 top-1 right-3 backdrop-blur-lg flex items-center justify-center"
          >
            <ArrowUpLeft size={16} />
            <p className="font-medium text-[14px] leading-[16.14px] text-black">
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
        <Video src="/crms/video.webm" />
        <section className="relative bg-white rounded-[30px] w-full py-[25px] font-semibold text-[24px] text-[#202022]">
          <div className="absolute top-[-15px] flex justify-center w-full">
            <div className=" bg-[#8ECFFD]  py-[6px] px-[22px] rounded-full text-[#2C516B] text-[14px] font-medium">
              Сразу подключим CRM
            </div>
            <div className=" bg-[#8ECFFD] py-[6px] px-[22px] rounded-full text-[#2C516B] text-[14px] font-medium">
              за 1-2 дня
            </div>
          </div>
          <h1 className="w-full text-center">CRM и управляемые базы </h1>
          <p className="font-medium text-[16px] text-[#202022] leading-[14.4px] w-full text-center mt-2">
            Примеры готовых работ
          </p>
          <div className="w-full mt-[5px] px-[25px] items-center justify-center flex">
            <motion.div className="flex">
              <motion.div
                className="flex-shrink-0 mr-4 last:mr-0"
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-[#F1F1F9] rounded-full py-[20px] px-[60px] flex items-center gap-[10px] w-fit whitespace-nowrap">
                  <p className="font-medium text-[16px] text-[#C5C5CA] leading-[15.6px]">
                    Попробовать CRM 🔥
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="text-container font-medium text-[16px] text-[#202022] leading-[19px] mt-6 px-[25px]">
            <p>
              Изобрели систему, чтобы контролировать все процессы и доводить до
              сделки каждого клиента
            </p>
            <p>
              <span className="text-[16px] font-semibold leading-[19px]">
                Вот что умеет наша CRM: <br />
              </span>
              — фиксировать всех пользователей, которые попали в чат-бот или
              приложение;
            </p>
            <p>
              — редактировать карточку пользователя: менять данные и статус;
            </p>
            <p>
              — создавать и отправлять рассылки, собирать базы контактов и
              редактировать их;
            </p>
            <p>— общаться с каждым отдельным пользователем через чат-бот;</p>
            <p>— получать уведомления в сообщения о каждых новых изменениях.</p>
            <p className="pb-5">
              Можем реализовать любую другую функцию, которая поможет
              контролировать процессы
            </p>
          </div>
        </section>
        <Link
          href={nextLink.link}
          className="w-full items-center justify-center flex text-center mt-[25px] text-[#8A8D90] text-[16px] leading-[18.85px] font-medium"
        >
          Перейти к искусственному интеллекту{" "}
          <ArrowUpRight size={16} className="mt-[2px]" />
        </Link>
      </main>
      <ContactFooter />
    </>
  );
};

export default Page;
