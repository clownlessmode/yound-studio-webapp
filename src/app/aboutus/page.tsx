"use client";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";
import Video from "@/components/Video";
import "swiper/css";
import { motion } from "framer-motion";

const nextLink = { title: "Перейти к CRM и управляемым базам", link: "crms" };

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
        <Video src="/bots/video.webm" />
        <section className="bg-white rounded-[30px] w-full py-[25px] font-semibold text-[24px] text-[#202022]">
          <h1 className="w-full text-center">Чат боты и воронки</h1>
          <p className="font-medium text-[16px] text-[#202022] leading-[14.4px] w-full text-center mt-2">
            Примеры готовых работ
          </p>
          <div className="w-full mt-[5px] px-[25px] items-center justify-center flex">
            <motion.div className="flex">
              <motion.div
                className="flex-shrink-0 mr-4 last:mr-0"
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-[#F1F1F9] rounded-full py-[15px] px-[25px] flex items-center gap-[10px] w-fit whitespace-nowrap">
                  <p className="font-medium text-[16px] text-[#C5C5CA] leading-[15.6px]">
                    В работе...
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="text-container font-medium text-[16px] text-[#202022] leading-[19px] mt-6 px-[25px]">
            <p>
              Чат-боты — это заранее подготовленные сценарии, которые отвечают
              на вопросы клиента и помогают им решать задачи. Например,
              оформлять заказы, уведомлять о новостях или рассказывать об
              услугах, товарах. Бот в Telegram — удобный способ оставаться с
              клиентом на связи круглосуточно.
            </p>
            <span className="relative">
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
              >
                <path
                  d="M8.16744 4.7216C8.32852 4.28629 8.94421 4.28629 9.10529 4.7216L10.8892 9.54249C10.9398 9.67935 11.0477 9.78725 11.1846 9.83789L16.0055 11.6218C16.4408 11.7829 16.4408 12.3986 16.0055 12.5596L11.1846 14.3435C11.0477 14.3942 10.9398 14.5021 10.8892 14.6389L9.10529 19.4598C8.94421 19.8951 8.32852 19.8951 8.16744 19.4598L6.38355 14.6389C6.33291 14.5021 6.225 14.3942 6.08814 14.3435L1.26725 12.5596C0.831943 12.3986 0.831944 11.7829 1.26725 11.6218L6.08814 9.83789C6.225 9.78725 6.33291 9.67935 6.38355 9.54249L8.16744 4.7216Z"
                  fill="#BB74FF"
                />
                <path
                  d="M15.0765 1.26725C15.2376 0.831943 15.8533 0.831944 16.0144 1.26725L16.3987 2.30588C16.4494 2.44274 16.5573 2.55065 16.6941 2.60129L17.7328 2.98562C18.1681 3.1467 18.1681 3.76239 17.7327 3.92347L16.6941 4.3078C16.5573 4.35844 16.4494 4.46635 16.3987 4.60321L16.0144 5.64184C15.8533 6.07715 15.2376 6.07715 15.0765 5.64184L14.6922 4.60321C14.6416 4.46635 14.5337 4.35844 14.3968 4.3078L13.3582 3.92347C12.9229 3.76239 12.9229 3.1467 13.3582 2.98562L14.3968 2.60129C14.5337 2.55065 14.6416 2.44274 14.6922 2.30588L15.0765 1.26725Z"
                  fill="#BB74FF"
                />
              </svg>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Отлично будет, если к чат-боту
                подключить искусственный интеллект. Это тоже умеем!
              </p>
            </span>

            <p>Вот, чем полезен бот:</p>
            <p>
              <span className="text-[16px] font-semibold leading-[19px]">
                Лидогенерация
                <br />
              </span>
              Чат-бот собирает контакты пользователей, чтобы бизнес мог
              воздействовать на лиды через Телеграм или другие каналы.
            </p>
            <p>
              <span className="text-[16px] font-semibold leading-[19px]">
                Маркетинговый прогрев
                <br />
              </span>
              Процесс постепенного вовлечения и подготовки потенциальных
              клиентов к покупке продукта или услуги с помощью
              автоматизированной коммуникации.
            </p>
            <p>
              <span className="text-[16px] font-semibold leading-[19px]">
                Консультирование <br />
              </span>
              Запуск чат-бота поддержки станет отличной возможностью разгрузить
              надоедливые и частые вопросы, особенно для компаний с большой
              клиентской базой.
            </p>
            <p>
              <span className="text-[16px] font-semibold leading-[19px]">
                Оформление заказов <br />
              </span>
              Бот поможет сформировать любой заказ, принять оплату и уведомить
              вас об успешной продаже
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
