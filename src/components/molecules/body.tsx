import { type ChangeEvent, type FC } from "react";
import Characters from "../organisms/characters";
import Search from "./search";
import type { FetchCharactersProps } from "@/hooks/useFetchCharacters";

interface BodyProps {
  value: string;
  data: FetchCharactersProps | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Body: FC<BodyProps> = ({ data, value, handleChange }) => {
  return (
    <main className="flex flex-col items-center justify-center bg-[#f9fafb]">
      <Search value={value} handleChange={handleChange} />
      <Characters data={data} />
    </main>
  );
};

export default Body;
