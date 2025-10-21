import useFetchCharacters from "@/hooks/useFetchCharacters";
import Card from "./card";

const Characters = () => {
  const { data, loading, error } = useFetchCharacters();

  console.log(data?.characters);
  console.log(loading);
  console.log(error);

  const characters = data?.characters.results;

  return (
    <div className="grid grid-cols-3 gap-4">
      {characters?.map((character) => (
        <Card {...character} />
      ))}
    </div>
  );
};

export default Characters;
