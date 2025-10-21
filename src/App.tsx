import { useEffect, useState, type ChangeEvent } from "react";
import Body from "./components/molecules/body";
import Footer from "./components/molecules/footer";
import Header from "./components/molecules/header";
import useFetchCharacters from "./hooks/useFetchCharacters";

function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);

  const { data, debouncedSearch } = useFetchCharacters(value, page);

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
      <Header />
      <Body value={value} data={data} handleChange={handleChange} />
      <Footer
        pageInfo={data?.characters.info}
        currentPage={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
}

export default App;
