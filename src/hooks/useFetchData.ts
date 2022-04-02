import React from "react";

const useFetchData = <T>(url: string) => {
  const [fetched, setFetched] = React.useState(false);
  const [data, setData] = React.useState<T | null>(null);

  const fetchData = React.useCallback(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setFetched(true);
      });
  }, [url, setFetched, setData]);

  return [data, fetched, fetchData] as const;
};

export { useFetchData };
