"use client";
import React, { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";
import { AnimatePresence, motion } from "framer-motion";

const Page = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <main className="pb-[40px] flex-1 overflow-y-auto h-full flex-grow px-[15px] w-full flex flex-col bg-[#f1f1f9]">
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

        {/* Секция видео */}
        <section
          onClick={handlePlayPause}
          className="bg-white relative mt-[19px] rounded-[30px] aspect-[3/4] w-full overflow-hidden min-h-[386px]"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-[30px]"
            loop
            playsInline
          >
            <source src="/test video.mp4" type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
          {/* Анимация Плей и Пауза */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handlePlayPause}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white bg-black bg-opacity-70 flex justify-center items-center rounded-full w-[40px] h-[40px]"
              >
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 4.26795C10.3333 5.03775 10.3333 6.96225 9 7.73205L3 11.1962C1.66667 11.966 0 11.0037 0 9.4641L0 2.5359C0 0.996296 1.66667 0.0340474 3 0.803848L9 4.26795Z"
                    fill="white"
                  />
                </svg>
              </motion.div>
            )}

            {isPlaying && (
              <motion.div
                onClick={handlePlayPause}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white bg-black bg-opacity-70 flex justify-center items-center rounded-full w-[40px] h-[40px]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="3"
                    width="3"
                    height="10"
                    rx="1.5"
                    fill="#D9D9D9"
                  />
                  <rect
                    x="9"
                    y="3"
                    width="3"
                    height="10"
                    rx="1.5"
                    fill="#D9D9D9"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section className="bg-white rounded-[30px]  w-full p-[25px] font-semibold text-[24px] text-[#202022]">
          <h1>CRM и управляемые базы</h1>
          <div className="h-[1px] w-full bg-[#d9d9dc] my-[15px] "></div>
          <p className="font-medium text-[16px] text-[#202022] leading-[19px]">
            Текст не предоставлен
          </p>
        </section>
      </main>
      <ContactFooter />
    </>
  );
};

export default Page;
