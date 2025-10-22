import type { CharacterProps } from "@/hooks/useFetchCharacters";
import Card from "./card";
import type { FC } from "react";

interface CharactersComponentProps {
  characters: CharacterProps[] | undefined;
}

const CharactersComponent: FC<CharactersComponentProps> = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {characters?.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
};

export default CharactersComponent;
