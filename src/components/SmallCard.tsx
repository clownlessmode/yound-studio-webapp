import { ArrowUpRight } from "lucide-react";
import React from "react";
interface Props {
  variant: "primary" | "secondary";
  text: string;
}

const SmallCard = ({ variant, text }: Props) => {
  return (
    <div
      className="rounded-[1.5rem] px-6 py-5 font-medium flex flex-row justify-between"
      style={{
        backgroundColor: variant === "primary" ? "#202022" : "#FFFFFF",
        color: variant === "secondary" ? "#202022" : "#FFFFFF",
      }}
    >
      {text} <ArrowUpRight opacity={0.8} />
    </div>
  );
};

export default SmallCard;
