import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center gap-4 bg-[#f9fafb]">
      <Button variant="outline" size="sm" className="w-24 h-11">
        <ChevronLeft />
        Prev
      </Button>
      <div className="w-20 h-10 flex items-center justify-center">Page 1</div>
      <Button variant="outline" size="sm" className="w-24 h-11">
        Next
        <ChevronRight />
      </Button>
    </footer>
  );
};

export default Footer;
