import type { FetchCharactersProps } from "@/hooks/useFetchCharacters";
import Card from "./card";
import type { FC } from "react";

interface CharactersProps {
  data: FetchCharactersProps | undefined;
}

const Characters: FC<CharactersProps> = ({ data }) => {
  const characters = data?.characters.results;

  return (
    <div className="grid grid-cols-3 gap-4">
      {characters?.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
};

export default Characters;
