import type { CharacterProps } from "@/hooks/useFetchCharacters";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseFavoriteProps {
  items: Record<string, CharacterProps>;
  toggleFavorite: (character: CharacterProps) => void;
  isFavorite: (characterId: string) => boolean;
  countFavorites: () => number;
  favoriteList: () => CharacterProps[];
}

const useFavorites = create<UseFavoriteProps>()(
  persist(
    (set, get) => ({
      items: {},
      toggleFavorite: (character) =>
        set((currentState) => {
          const copy = { ...currentState.items };

          if (copy[character.id]) {
            delete copy[character.id];
          } else {
            copy[character.id] = character;
          }

          return { items: copy };
        }),
      isFavorite: (characterId) => !!get().items[characterId],
      countFavorites: () => Object.keys(get().items).length,
      favoriteList: () => Object.values(get().items),
    }),
    { name: "favoriteStore" }
  )
);

export default useFavorites;
