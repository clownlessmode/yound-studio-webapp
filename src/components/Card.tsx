import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Props {
  header: string;
  description: string;
  color: string;
  descriptionColor: string;
}

const Card: React.FC<Props> = ({
  header,
  description,
  color,
  descriptionColor,
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="rounded-[20px] px-[25px] pt-[20px] pb-[40px] relative"
    >
      <h3 className="font-semibold text-[18px]" style={{ color: "#202022" }}>
        {header}
      </h3>
      <p
        className="mt-[10px] text-[16px] font-medium whitespace-pre-wrap leading-[19px]"
        style={{ color: descriptionColor }}
      >
        {description}
      </p>
      <ArrowUpRight
        size={24}
        className="absolute right-[24px] top-[24px]"
        color={descriptionColor}
      />
    </div>
  );
};

export default Card;
