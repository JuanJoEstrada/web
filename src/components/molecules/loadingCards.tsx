import { Skeleton } from "../ui/skeleton";

const LoadingCards = () => {
  return (
    <div className="flex items-center min-h-[calc(100vh-198px)]">
      <Skeleton className="h-8 w-96 rounded-4xl" />
    </div>
  );
};

export default LoadingCards;
