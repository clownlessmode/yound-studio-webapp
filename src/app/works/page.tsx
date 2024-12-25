"use client";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";
import Video from "@/components/Video";
import "swiper/css";

const nextLink = { title: "Перейти к успешным работам", link: "works" };

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
        <h1 className="w-full text-center text-[24px] text-[#202022] font-semibold">
          Видео-презентация: о нас
        </h1>
        <Video src="/bots/video.webm" />
        <section className="bg-white rounded-[30px] w-full py-[25px] font-semibold text-[24px] text-[#202022]">
          <div className="text-container font-medium text-[16px] text-[#202022] leading-[19px] px-[25px]">
            <p>Привет! На связи Молодая студия.</p>
            <p>
              Мы хотим создавать полезные продукты в Телеграме. Миллионы
              пользователей заходят в мессенджер каждый день, давайте это
              использовать и придумаем что-то крутое!
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
