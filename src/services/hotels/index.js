import axios from 'axios';

import { apiUrl, popularHotelsUrl } from '../constants';

export const getHotels = async () => {
  const { data: hotels } = await axios.get(popularHotelsUrl);

  return hotels;
};

export const searchHotel = async (str) => {
  const { data: hotels } = await axios.get(apiUrl, {
    params: {
      search: str,
    },
  });
  return hotels;
};
