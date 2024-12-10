"use client";

import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X } from "lucide-react";

interface DrawerProps {
  trigger: ReactNode;
  children: ReactNode;
  media: ReactNode;
  height?: string;
}

const Drawer: React.FC<DrawerProps> = ({
  trigger,
  children,
  height = "h-[95%]",
  media,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y > 100) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div onClick={toggleDrawer}>{trigger}</div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleDrawer}
              className="fixed inset-0 bg-black/50 z-40"
            />

            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 300 }}
              dragElastic={0.7}
              onDragEnd={handleDragEnd}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={`fixed bottom-0 left-0 w-full ${height} px-4 z-50`}
            >
              <div className="bg-white rounded-t-2xl shadow-2xl h-full flex justify-center relative">
                <div className="w-12 h-1 bg-white rounded-full mx-auto my-2 top-2 absolute z-50 opacity-60 backdrop-blur-lg"></div>
                <div
                  className="w-6 h-6 bg-white/30 rounded-full my-2 top-1 right-3 absolute z-50 backdrop-blur-lg flex items-center justify-center"
                  onClick={toggleDrawer}
                >
                  <X size={20} color="white" />
                </div>

                <div className="flex flex-col">
                  <div className="rounded-t-2xl overflow-hidden h-[60%]">
                    {media}
                  </div>
                  <div className="-mt-5 bg-white rounded-[20px] p-4 flex flex-col gap-2">
                    {children}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Drawer;
