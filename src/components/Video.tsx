"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  src: string;
  posterSrc?: string;
}

const Video: React.FC<Props> = ({ src, posterSrc }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

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

  const calculateProgress = (clientX: number) => {
    if (timelineRef.current && videoRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      const time = (percentage / 100) * videoRef.current.duration;

      videoRef.current.currentTime = time;
      setProgress(percentage);
    }
  };

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isDragging.current = true;

    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;

    calculateProgress(clientX);

    // Pause video while dragging
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;

    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;

    calculateProgress(clientX);
  };

  const updateProgress = () => {
    if (videoRef.current) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  useEffect(() => {
    const currentVideo = videoRef.current;

    if (currentVideo) {
      currentVideo.addEventListener("timeupdate", updateProgress);
      currentVideo.addEventListener("ended", () => {
        setIsPlaying(false);
        setProgress(0);
      });
    }

    // Add event listeners for dragging
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("touchmove", handleDrag);
    document.addEventListener("touchend", stopDragging);

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener("timeupdate", updateProgress);
        currentVideo.removeEventListener("ended", () => {
          setIsPlaying(false);
          setProgress(0);
        });
      }

      // Remove event listeners
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("touchmove", handleDrag);
      document.removeEventListener("touchend", stopDragging);
    };
  }, []);

  return (
    <section
      onClick={handlePlayPause}
      className="bg-white relative mt-[19px] rounded-[30px] aspect-[3/4] w-full overflow-hidden min-h-[386px]"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-[30px]"
        loop
        playsInline
        src={src}
        poster={posterSrc ? posterSrc : "/placeholder.png"}
      >
        Ваш браузер не поддерживает воспроизведение видео.
      </video>

      {/* Временная шкала */}
      <div
        ref={timelineRef}
        onMouseDown={startDragging}
        onTouchStart={startDragging}
        className="absolute bottom-4 left-4 right-4 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer touch-none"
      >
        <div
          className="h-full bg-white/70 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Кнопка воспроизведения/паузы */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
              <rect x="4" y="3" width="3" height="10" rx="1.5" fill="#D9D9D9" />
              <rect x="9" y="3" width="3" height="10" rx="1.5" fill="#D9D9D9" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Video;
