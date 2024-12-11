// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const HeroText = () => {
//   const lines = ["Делаем удобные", "сервисы для бизнеса", "в телеграме"];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, // Задержка между появлением строк
//       },
//     },
//   };

//   const lineVariants = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <motion.h1
//       className="text-center w-full font-semibold leading-[90%] tracking-[-2px] text-[35px] mt-[20.6px]"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       {lines.map((line, index) => (
//         <motion.span key={index} className="block" variants={lineVariants}>
//           {line}
//         </motion.span>
//       ))}
//     </motion.h1>
//   );
// };

// export default HeroText;
import React from "react";

const HeroText = () => {
  const lines = ["Делаем удобные", "сервисы для бизнеса", "в телеграме"];

  return (
    <h1 className="text-center w-full font-semibold leading-[90%] tracking-[-2px] text-[35px] mt-[20.6px]">
      {lines.map((line, index) => (
        <span key={index} className="block">
          {line}
        </span>
      ))}
    </h1>
  );
};

export default HeroText;
