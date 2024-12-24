import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  variant: "primary" | "secondary";
  text: string;
  index: number;
  link: string;
}

const SmallCard = ({ variant, text, index, link }: Props) => {
  return (
    <Link
      className={`rounded-[20px] px-[25px]  font-semibold text-[18px] flex flex-row justify-between items-center ${
        index != 3 ? "py-[20px]" : "py-[9px]"
      }`}
      style={{
        backgroundColor: variant === "primary" ? "#202022" : "#FFFFFF",
        color: variant === "secondary" ? "#202022" : "#FFFFFF",
      }}
      href={link}
    >
      {text}{" "}
      {index != 3 ? (
        <ArrowUpRight color="#D2D2D2" size={24} />
      ) : (
        <div className="relative w-11 h-11 -ml-[11px] z-10">
          <Image
            src="/team1.png"
            alt="Team member 3"
            fill
            className="rounded-full object-cover"
          />
        </div>
      )}
    </Link>
  );
};

export default SmallCard;
