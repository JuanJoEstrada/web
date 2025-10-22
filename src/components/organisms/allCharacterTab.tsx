import type { ChangeEvent, FC } from "react";
import Body from "../molecules/body";
import Footer from "../molecules/footer";
import type { FetchCharactersProps } from "@/hooks/useFetchCharacters";
import type { ErrorLike } from "@apollo/client";

interface AllCharacterTabProps {
  value: string;
  data: FetchCharactersProps | undefined;
  loading: boolean;
  emptyResult: boolean;
  page: number;
  error: ErrorLike | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

const AllCharacterTab: FC<AllCharacterTabProps> = ({
  value,
  data,
  loading,
  emptyResult,
  page,
  error,
  handleChange,
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <>
      <Body
        value={value}
        data={data}
        isLoading={loading}
        handleChange={handleChange}
        error={error}
      />
      {!(emptyResult || loading || error) && (
        <Footer
          pageInfo={data?.characters.info}
          currentPage={page}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      )}
    </>
  );
};

export default AllCharacterTab;
