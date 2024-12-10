import React from "react";

interface Props {
  header: string;
  description: string;
  color: number;
}

const Card: React.FC<Props> = ({ header, description, color }) => {
  const backgroundColor = `hsl(${color}, 97%, 77%)`;
  const headerColor = `hsl(${color}, 97%, 15%)`;
  const descriptionColor = `hsl(${color}, 97%, 25%)`;

  return (
    <div style={{ backgroundColor }} className="rounded-[1.25rem] p-5">
      <h3 className="font-bold" style={{ color: headerColor }}>
        {header}
      </h3>
      <p style={{ color: descriptionColor }}>{description}</p>
    </div>
  );
};

export default Card;
