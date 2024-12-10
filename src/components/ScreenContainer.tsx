import React from "react";

interface Props {
  children: React.ReactNode;
}

const ScreenContainer = ({ children }: Props) => {
  return (
    <main className="bg-[##f1f1f9] flex-1 overflow-y-auto h-full flex-grow p-4 w-full flex flex-col gap-6">
      {children}
    </main>
  );
};

export default ScreenContainer;
