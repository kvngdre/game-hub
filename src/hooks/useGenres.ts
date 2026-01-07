import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

const useGenres = () => {
  const { data: genres, error, isLoading } = useData<Genre>("/genres");

  return { genres, error, isLoading };
};

export default useGenres;
