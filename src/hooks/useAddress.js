import { useState, useEffect } from 'react';
import axios from 'axios';

const useAddress = (address) => {
  const [map, setMap] = useState([]);
  const API_KEY = 'f54a74e6722819d3cee03fc89771af24';
  const URL_API = `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${address}`;

  const getAddress = async () => {
    const response = await axios(URL_API);
    console.log(response);
    const arrayAddress = [
      response.data.data[0].latitude,
      response.data.data[0].longitude,
    ];
    setMap([response.data.data[0].latitude, response.data.data[0].longitude]);
  };
  useEffect(() => {
    getAddress();
  }, []);

  return map;
};

export default useAddress;
