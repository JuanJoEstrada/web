import Characters from "../organisms/characters";
import Search from "./search";

const Body = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-[#f9fafb]">
      <Search />
      <Characters />
    </main>
  );
};

export default Body;
