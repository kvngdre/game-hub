import type { GameQuery } from "../App";
import useData from "./useData";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const {
    data: games,
    error,
    isLoading
  } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id
      }
    },
    [gameQuery]
  );

  return { games, error, isLoading };
};

export default useGames;
