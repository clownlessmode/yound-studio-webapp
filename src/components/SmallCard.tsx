import { ArrowUpRight } from "lucide-react";
import React from "react";
interface Props {
  variant: "primary" | "secondary";
  text: string;
}

const SmallCard = ({ variant, text }: Props) => {
  return (
    <div
      className="rounded-[20px] px-[25px] py-[20px] font-semibold text-[18px] flex flex-row justify-between"
      style={{
        backgroundColor: variant === "primary" ? "#202022" : "#FFFFFF",
        color: variant === "secondary" ? "#202022" : "#FFFFFF",
      }}
    >
      {text} <ArrowUpRight color="#D2D2D2" size={24} />
    </div>
  );
};

export default SmallCard;
