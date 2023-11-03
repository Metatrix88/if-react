import axios from 'axios';

import { apiUrl, popularHotelsUrl } from '../constants';

export const getHotels = async () => {
  const { data: hotels } = await axios.get(popularHotelsUrl);

  return hotels;
};

const delay = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });

export const updateAvailableHotels = async (params) => {
  try {
    await delay();
    const { data: hotels } = await axios.get(apiUrl, {
      params: params,
    });

    return hotels;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
