import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        setError("");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);

        if (error instanceof CanceledError) return;
        setError("Failed to fetch genres");
        setGenres([]);
        setIsLoading(false);
      });
    // .finally(() => {
    //   setIsLoading(false);
    // });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
