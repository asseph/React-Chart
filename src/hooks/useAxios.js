import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const useAxios = axiosParams => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const axiosData = async params => {
    try {
      const { data } = await axios.request(params);
      setResponse(data);
    } catch (err) {
      setError(err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  };

  useEffect(() => {
    axiosData(axiosParams);
  }, []); // eslint-disable-line

  return [response, error, loading];
};
