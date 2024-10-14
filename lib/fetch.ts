import { useState, useEffect, useCallback } from "react";

export const fetchAPI = async (url: string, options?: RequestInit) => {
  try {
    console.log("processing", url, options);
    const response = await fetch(url, options);
    console.log("process done");
    if (!response.ok) {
      new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(response);
    console.log(JSON.stringify(response));
    return await response.json();
  } catch (error) {
    console.log("process failed");
    console.error("Fetch error:", error);
    console.error("Fetch error:", JSON.stringify(error));
    throw error;
  }
};

export const useFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchAPI(url, options);
      setData(result.data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
