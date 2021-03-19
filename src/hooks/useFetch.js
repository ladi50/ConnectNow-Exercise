import { useCallback } from "react";

export const useFetch = () => {
  const fetchHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://public.connectnow.org.uk/applicant-test/",
        { headers: { "Content-Type": "application/json" } }
      );

      if (!response.ok) throw new Error("Fetch failed!");

      const res = await response.json();

      return res;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { fetchHandler };
};
