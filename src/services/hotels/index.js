import axios from 'axios';

import { apiUrl, popularHotelsUrl } from '../constants';

export const getHotels = async () => {
  const { data: hotels } = await axios.get(popularHotelsUrl);

  return hotels;
};

export const updateAvailableHotels = async (queryParams) => {
  try{
    const { data: hotels } = await axios.get(apiUrl, {
      params: queryParams
    });

    return hotels;
  } catch (error) {
    console.error('Error fetching data:', error)
  }

};
