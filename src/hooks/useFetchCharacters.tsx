import GET_CHARACTERS from "@/graphql/queries";
import { useQuery } from "@apollo/client/react";
import useDebounce from "./useDebounce";

export interface PageInfo {
  count: number;
  next: number;
  pages: number;
  prev: number;
}

export interface CharacterProps {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
}

export interface FetchCharactersProps {
  characters: {
    info: PageInfo;
    results: CharacterProps[];
  };
}

const useFetchCharacters = (search: string, page: number) => {
  const debouncedSearch = useDebounce(search);

  const { data, loading, error } = useQuery<FetchCharactersProps>(
    GET_CHARACTERS,
    {
      variables: { page, name: debouncedSearch || null },
    }
  );

  return {
    data,
    loading,
    error,
    debouncedSearch,
  };
};

export default useFetchCharacters;
