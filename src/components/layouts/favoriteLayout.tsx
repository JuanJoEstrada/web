import type { FC, ReactNode } from "react";

const FavoriteLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-start bg-[#f9fafb] min-h-[calc(100vh-70px)] py-10">
      {children}
    </main>
  );
};

export default FavoriteLayout;
