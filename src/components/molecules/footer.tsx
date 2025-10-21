import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import type { PageInfo } from "@/hooks/useFetchCharacters";
import type { FC } from "react";

interface FooterProps {
  pageInfo: PageInfo | undefined;
  currentPage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

const Footer: FC<FooterProps> = ({
  pageInfo,
  currentPage,
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <footer className="flex justify-center items-center gap-4 bg-[#f9fafb] py-10">
      <Button
        variant="outline"
        size="sm"
        className="w-24 h-11 cursor-pointer"
        disabled={!pageInfo?.prev}
        onClick={handlePrevPage}
      >
        <ChevronLeft />
        Prev
      </Button>
      <div className="w-20 h-10 flex items-center justify-center">
        Page {currentPage}
      </div>
      <Button
        variant="outline"
        size="sm"
        className="w-24 h-11 cursor-pointer"
        disabled={!pageInfo?.next}
        onClick={handleNextPage}
      >
        Next
        <ChevronRight />
      </Button>
    </footer>
  );
};

export default Footer;
