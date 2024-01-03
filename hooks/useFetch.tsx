import { useState, useEffect } from "react";

function useFetch<T>(urlString: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch(urlString, {
          method: "GET",
        });
        const json = await response;
        console.log("nonso", { json });
        // setData(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("An error occured, kindly retry");
        setLoading(false);
      }
    };

    fetchApiData();
  }, [urlString]);

  return { data, loading, error };
}

export default useFetch;
