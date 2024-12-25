import Link from "next/link";
import React, { FC } from "react";
interface Props {
  title: string;
  description: string;
  link: string;
  image: string;
  color: string;
}
const WorkCard: FC<Props> = ({ title, description, link, image, color }) => {
  return (
    <Link
      href={link}
      style={{
        minHeight: "calc(100vw * 4/3 - 30px)",
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-white rounded-[30px] w-full py-[25px] font-semibold text-[24px] text-[#202022] h-full flex items-end"
    >
      <div
        className="mb-[10px] text-container font-medium text-[16px] leading-[19px] px-[25px] w-full"
        style={{ color: color }}
      >
        <h2 className="text-[18px] font-semibold w-full text-center leading-[120%] tracking-[-3%]">
          {title}
        </h2>
        <p className="w-full text-center text-[16px] leading-[120%] tracking-[-3%]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default WorkCard;
