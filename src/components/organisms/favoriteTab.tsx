import type { CharacterProps } from "@/hooks/useFetchCharacters";
import FavoriteLayout from "../layouts/favoriteLayout";
import CharactersComponent from "./characters";
import type { FC } from "react";
import EmptyFavorites from "../molecules/emptyFavorites";

interface FavoriteTabProps {
  characters: CharacterProps[];
}

const FavoriteTab: FC<FavoriteTabProps> = ({ characters }) => {
  const isFavoriteEmpty = characters.length === 0;

  return (
    <FavoriteLayout>
      {isFavoriteEmpty ? (
        <EmptyFavorites />
      ) : (
        <CharactersComponent characters={characters} />
      )}
    </FavoriteLayout>
  );
};

export default FavoriteTab;
