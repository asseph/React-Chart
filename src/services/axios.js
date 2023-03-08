import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const axiosWithToken = async (endpoint, data, method = 'GET') => {
  const token = localStorage.getItem('tokenFIT') || '';

  if (method === 'GET') {
    return await axios.get(endpoint, {
      headers: {
        'x-token': token,
      },
    });
  } else {
    return await axios.request(endpoint, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token,
      },
      data,
    });
  }
};

const axiosWithOutToken = async (endpoint, data, method = 'GET') => {
  if (method === 'GET') {
    return await axios.get(endpoint);
  } else {
    return await axios.request(endpoint, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      data,
    });
  }
};

export { axiosWithToken, axiosWithOutToken };
