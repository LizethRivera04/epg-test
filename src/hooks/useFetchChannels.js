import { useEffect, useMemo, useState } from "react";
import { dataApi } from "../api/data";

const useFetchChannels = () => {
  const [channels, setChannels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchDataList = useMemo(
    () => async () => {
      try {
        const data = await dataApi();
        setChannels(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data list:", error);
      }
    },
    []
  );

  useEffect(() => {
    if (channels.length === 0) {
      fetchDataList();
    }
  }, [fetchDataList]);

  return {
    channels,
    isLoading,
  };
};

export default useFetchChannels;
