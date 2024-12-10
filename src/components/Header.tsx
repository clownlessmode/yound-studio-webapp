"use client";
import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <motion.h2
        className="text-center w-full font-bold"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Молодая студия
      </motion.h2>

      <div className="flex flex-row">
        <motion.div
          className="bg-gray-700 w-11 h-11 rounded-full z-30"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        />
        <motion.div
          className="bg-gray-800 w-11 h-11 rounded-full -ml-4 z-20"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        />
        <motion.div
          className="bg-gray-900 w-11 h-11 rounded-full -ml-4 z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default Header;
