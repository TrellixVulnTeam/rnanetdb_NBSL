import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const useFetch = (uri) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getdata = useCallback(async () => {
    const response = await axios.get(uri);
    setData(response.data);
    setLoading(false);
  }, [uri]);

  useEffect(() => {
    getdata();
  }, [uri, getdata]);

  return { loading, data };
};
