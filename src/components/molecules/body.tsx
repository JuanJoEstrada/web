import { type ChangeEvent, type FC } from "react";
import Characters from "../organisms/characters";
import Search from "./search";
import type { FetchCharactersProps } from "@/hooks/useFetchCharacters";
import EmptyResult from "./emptyResult";
import LoadingCards from "./loadingCards";

interface BodyProps {
  value: string;
  data: FetchCharactersProps | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

const Body: FC<BodyProps> = ({ data, value, handleChange, isLoading }) => {
  const emptyResult = data?.characters.results.length === 0;

  return (
    <main className="flex flex-col items-center justify-center bg-[#f9fafb]">
      <Search value={value} handleChange={handleChange} />
      {isLoading && <LoadingCards />}
      {emptyResult && <EmptyResult />}
      {!emptyResult && <Characters data={data} />}
    </main>
  );
};

export default Body;
