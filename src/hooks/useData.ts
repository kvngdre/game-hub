import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps: unknown[] = []) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    // Effect does not depend on isLoading state
    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { ...requestConfig, signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
        setError("");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);

        if (error instanceof CanceledError) return;
        setError("Failed to fetch data");
        setData([]);
        setIsLoading(false);
      });
    // .finally(() => {
    //   setIsLoading(false);
    // });

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);

  return { data, error, isLoading };
};

export default useData;
