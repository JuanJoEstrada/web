import { type ChangeEvent, type FC } from "react";
import Characters from "../organisms/characters";
import Search from "./search";
import type { FetchCharactersProps } from "@/hooks/useFetchCharacters";
import EmptyResult from "./emptyResult";
import LoadingCards from "./loadingCards";
import CharacterLayout from "../layouts/characterLayout";


interface BodyProps {
  value: string;
  data: FetchCharactersProps | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

const Body: FC<BodyProps> = ({ data, value, handleChange, isLoading }) => {
  const emptyResult = data?.characters.results.length === 0;

  return (
    <CharacterLayout>
      <Search value={value} handleChange={handleChange} />
      {isLoading && <LoadingCards />}
      {emptyResult && <EmptyResult />}
      {!emptyResult && <Characters characters={data?.characters.results} />}
    </CharacterLayout>
  );
};

export default Body;
