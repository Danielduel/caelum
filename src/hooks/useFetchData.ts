import React from "react";

const useFetchData = <T, K extends any[]>(getUrl: (...urlArgs: K) => string) => {
  const [fetched, setFetched] = React.useState(false);
  const [data, setData] = React.useState<T | null>(null);

  const fetchData = React.useCallback(
    (...urlArgs: K) => {
      fetch(getUrl(...urlArgs))
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          setData(responseData);
          setFetched(true);
        });
    },
    [getUrl, setFetched, setData]
  );

  return [data, fetched, fetchData] as const;
};

export { useFetchData };
