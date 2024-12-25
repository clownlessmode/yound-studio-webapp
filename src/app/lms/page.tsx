"use client";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";
import Video from "@/components/Video";
import "swiper/css";
import { motion } from "framer-motion";
import Image from "next/image";

const nextLink = {
  title: "Перейти к видео-презентации: о нас",
  link: "aboutus",
};

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
        <Video src="/lms/video" />
        <section
          style={{
            background: "radial-gradient(circle, #CA9DFF 59%, #FFFFFF 100%)",
          }}
          className=" rounded-[30px] w-full py-[25px] font-semibold text-[24px] text-[#202022]"
        >
          <h1 className="w-full text-center flex justify-center items-center gap-1">
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
            <p>Искусственный интеллект</p>
          </h1>
          <p className="font-medium text-[16px] text-[#202022] leading-[14.4px] w-full text-center mt-2">
            Примеры готовых работ
          </p>
          <div className="w-full mt-[5px] px-[25px] items-center justify-center flex">
            <motion.div className="flex">
              <motion.div
                className="flex-shrink-0 mr-4 last:mr-0"
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={"https://t.me/sadranomBot"}
                  className="bg-[#FFFFFF] rounded-full py-[18px] px-[30px] flex items-center gap-[10px] w-fit whitespace-nowrap"
                >
                  <p className="font-medium text-[16px] text-[#202022] leading-[15.6px]">
                    @sadranomBot
                  </p>
                  <Image
                    alt=""
                    src={"/lms/sadranomBot.png"}
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className="text-container font-medium text-[16px] text-[#202022] leading-[19px] mt-6 px-[25px]">
            <p>
              Подключим самую инновационную модель AI, которая развенуто и
              вдумчиво ответит всем пользователям.
            </p>
            <p className="pb-5">
              Например, наш бот Сандроном решает любые школьные и вузовские
              задания за 1 минуту, благодаря глубокому анализу
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
