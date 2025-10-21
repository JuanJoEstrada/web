import type { FC } from "react";
import { CardContent, Card as CardShadcn } from "../ui/card";
import type { CharacterProps } from "@/hooks/useFetchCharacters";
import { Heart } from "lucide-react";

const Card: FC<CharacterProps> = ({ image, name, species, status }) => {
  return (
    <CardShadcn className="block relative py-0 rounded-[14px]">
      <div className="absolute flex items-center justify-center top-2 right-3 rounded-full bg-white w-9 h-9">
        <Heart className="text-[#4A5565] h-5 w-5" />
      </div>
      <img src={image} className="object-cover rounded-t-[14px]" alt={name} />
      <CardContent className="py-4">
        <h2 className="font-bold text-18px">{name}</h2>
        <div className="flex items-center justify-center w-[60px] h-[22px] bg-[#ECEEF2] rounded-[8px] mt-3 mb-2.5">
          <div className="bg-[#00C950] rounded-full h-2 w-2 mr-2" />
          <div className="text-[12px] font-medium">{status}</div>
        </div>
        <p className="text-[#6A7282] text-[14px]">{species}</p>
      </CardContent>
    </CardShadcn>
  );
};

export default Card;
