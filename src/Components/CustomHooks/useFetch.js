import { useState, useCallback } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false),
    [fetchingError, setFetchingError] = useState(null);

  const fetchRequest = useCallback(async (requestConfig, applyData) => {

    setIsLoading(true);
    setFetchingError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });

      if (!response.ok) {
        throw new Error("Fetching request failed!");
      }
      const data = await response.json();

      if (applyData !== null) {
        applyData(data);
      }
    } catch (err) {
      setFetchingError(err.message);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    fetchingError,
    fetchRequest,
  };
};

export default useFetch;
