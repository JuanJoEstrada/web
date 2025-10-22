import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import Header from "./components/molecules/header";
import useFetchCharacters from "./hooks/useFetchCharacters";
import useFavorites from "./store/favorites";
import FavoriteTab from "./components/organisms/favoriteTab";
import AllCharacterTab from "./components/organisms/allCharacterTab";

function App() {
  const [isFavoriteView, setIsFavoriteView] = useState(false);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);

  const favoriteItemsObj = useFavorites((state) => state.items);
  const favoriteItemsArray = useMemo(
    () => Object.values(favoriteItemsObj),
    [favoriteItemsObj]
  );

  const { data, debouncedSearch, loading } = useFetchCharacters(value, page);

  const emptyResult = data?.characters.results.length === 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleNextPage = () => setPage((prev) => prev + 1);

  const handlePrevPage = () => setPage((prev) => prev - 1);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  return (
    <div className="w-full min-h-dvh">
      <Header
        isFavoriteView={isFavoriteView}
        setIsFavoriteView={setIsFavoriteView}
      />
      {isFavoriteView ? (
        <FavoriteTab characters={favoriteItemsArray} />
      ) : (
        <AllCharacterTab
          value={value}
          data={data}
          loading={loading}
          page={page}
          emptyResult={emptyResult}
          handleChange={handleChange}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      )}
    </div>
  );
}

export default App;
