import React from "react";
import { X } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

const page = () => {
  return (
    <>
      <main className="pb-[40px] flex-1 overflow-y-auto h-full flex-grow px-[15px] w-full flex flex-col bg-[#8ECFFD]">
        <section className="flex flex-row gap-[7.4px] items-center justify-between mt-[40px] ">
          <div
            className="w-6 h-6 bg-white/30 opacity-0 rounded-full my-2 top-1 right-3 backdrop-blur-lg flex items-center justify-center"
            // onClick={toggleDrawer}
          >
            <X size={20} color="white" />
          </div>
          <h2 className="text-center font-semibold text-[14px]">
            Молодая студия
          </h2>
          <Link
            href={"/"}
            className="w-6 h-6 bg-[#799DB6]/30 rounded-full my-2 top-1 right-3 backdrop-blur-lg flex items-center justify-center"
          >
            <X size={20} color="white" />
          </Link>
        </section>
        <section className="bg-white mt-[19px] rounded-[30px] aspect-[3/4] w-full overflow-hidden min-h-[386px]">
          <video
            className="w-full h-full object-cover rounded-[30px]"
            autoPlay
            loop
            // muted
            playsInline
          >
            <source src="/test video.mp4" type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        </section>
        <section className="bg-white rounded-[30px]  w-full p-[25px] font-semibold text-[24px] text-[#202022]">
          <h1>Приложения и визитки</h1>
          <div className="h-[1px] w-full bg-[#d9d9dc] my-[15px] "></div>
          <p className="font-medium text-[16px] text-[#202022] leading-[19px]">
            Здесь можно создать полноценное приложение. Например,
            онлайн-магазин, игру или сервис для клиентов. Все, что угодно.
            <br />
            Представьте, что вы в App Store или Google Play, вы устанавливаете
            любое приложение и пользуйетесь им. Теперь это не нужно, все
            доступно в внутри Телеграма.
          </p>
        </section>
      </main>
      <ContactFooter />
    </>
  );
};

export default page;