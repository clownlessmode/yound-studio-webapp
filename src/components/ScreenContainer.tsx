import React from "react";

interface Props {
  children: React.ReactNode;
}

const ScreenContainer = ({ children }: Props) => {
  return (
    <main className="bg-[##f1f1f9] flex-1 overflow-y-auto h-full flex-grow px-[15px] w-full flex flex-col">
      {children}
    </main>
  );
};

export default ScreenContainer;
