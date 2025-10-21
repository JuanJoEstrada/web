import GET_CHARACTERS from "@/graphql/queries";
import { useQuery } from "@apollo/client/react";

export interface CharacterProps {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
}

interface FetchCharactersProps {
  characters: {
    info: {
      count: number;
      next: number;
      pages: number;
      prev: number;
    };
    results: CharacterProps[];
  };
}

const useFetchCharacters = () => {
  const { data, loading, error } =
    useQuery<FetchCharactersProps>(GET_CHARACTERS);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchCharacters;
