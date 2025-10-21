import { Input } from "../ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-[13px] text-[#717182]" />
        <Input
          type="text"
          placeholder="Search characters..."
          className="pl-12 h-12 rounded-[14px] w-[600px] "
        />
      </div>
    </div>
  );
};

export default Search;
