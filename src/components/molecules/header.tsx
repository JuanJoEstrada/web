import useFavorites from "@/store/favorites";
import type { FC } from "react";

interface HeaderProps {
  isFavoriteView: boolean;
  setIsFavoriteView: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ isFavoriteView, setIsFavoriteView }) => {
  const numberOfFavorites = useFavorites((state) => state.countFavorites());

  return (
    <header
      className={`
      flex flex-col md:flex-row items-center justify-between
      px-[47px] h-[150px] md:h-[70px] py-[40px] md:py-auto
      bg-[linear-gradient(90deg,#00B5CC1A_0%,#00B5CC0D_50%,#00B5CC00_100%)]
    `}
    >
      <h1 className="text-2xl font-bold">Rick & Morty Browser</h1>
      <nav className="flex items-center gap-1">
        <button
          onClick={() => setIsFavoriteView(false)}
          className={`${
            isFavoriteView ? "" : " bg-[#00B5CC] text-white"
          } px-4 py-3 text-[16px] rounded-[10px] cursor-pointer`}
        >
          All Characters
        </button>
        <button
          onClick={() => setIsFavoriteView(true)}
          className={`${
            isFavoriteView ? "bg-[#00B5CC] text-white" : ""
          } px-4 py-3 text-[16px] rounded-[10px] cursor-pointer flex`}
        >
          Favorites <div className="w-9">({numberOfFavorites})</div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
