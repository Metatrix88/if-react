import axios from 'axios';

import { urls, popularHotelsUrl } from '../../constants/urls';

export const getHotels = async () => {
  const { data: hotels } = await axios.get(popularHotelsUrl);

  return hotels;
};

// Функция которая показывала лоадер
// const delay = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 3000);
//   });

export const updateAvailableHotels = async (params) => {
  try {
    const { data: hotels } = await axios.get(urls, {
      params: params,
    });

    return hotels;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchHotel = async (hotelId) => {
  try {
    const { data: hotel } = await axios.get(`${urls}/${hotelId}`);

    return hotel;
  } catch (error) {
    console.error('Error fetching hotel data:', error);
  }
};
