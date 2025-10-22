import type { ChangeEvent, FC } from "react";
import { Input } from "../ui/input";
import { Search as SearchIcon } from "lucide-react";

interface SearchProps {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = ({ value, handleChange }) => {
  return (
    <div className="flex justify-center w-full my-10">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-[13px] text-[#717182]" />
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search characters..."
          className="pl-12 h-12 rounded-[14px] lg:w-[600px] md:w-[300px]"
        />
      </div>
    </div>
  );
};

export default Search;
