import { Heart } from "lucide-react";

const EmptyFavorites = () => {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <Heart className="h-16 w-16 text-[#717182]" />
      <h2 className="font-medium text-[20px] my-4">No favorites yet</h2>
      <p className="text-[#717182]">
        Start adding characters to your favorites!
      </p>
    </div>
  );
};

export default EmptyFavorites;
