import { type ChangeEvent, type FC } from "react";
import Characters from "../organisms/characters";
import Search from "./search";
import type { FetchCharactersProps } from "@/hooks/useFetchCharacters";
import EmptyResult from "./emptyResult";
import LoadingCards from "./loadingCards";
import CharacterLayout from "../layouts/characterLayout";
import type { ErrorLike } from "@apollo/client";

interface BodyProps {
  value: string;
  data: FetchCharactersProps | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  error: ErrorLike | undefined;
}

const Body: FC<BodyProps> = ({
  data,
  value,
  handleChange,
  isLoading,
  error,
}) => {
  const emptyResult = data?.characters.results.length === 0;

  return (
    <CharacterLayout>
      <Search value={value} handleChange={handleChange} />
      {isLoading && <LoadingCards />}
      {emptyResult && <EmptyResult message="No Characters" />}
      {error && <EmptyResult message="Something went wrong" />}
      {!emptyResult && <Characters characters={data?.characters.results} />}
    </CharacterLayout>
  );
};

export default Body;
