import type { FC, ReactNode } from "react";

const CharacterLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center bg-[#f9fafb]">
      {children}
    </main>
  );
};

export default CharacterLayout;
