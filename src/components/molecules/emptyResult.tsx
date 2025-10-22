import type { FC } from "react";

const EmptyResult: FC<{ message: string }> = ({ message }) => {
  return (
    <section className="flex items-center min-h-[calc(100vh-208px)]">
      <h2 className="text-4xl">{message}</h2>
    </section>
  );
};

export default EmptyResult;
