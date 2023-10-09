import axios from 'axios';

import { popularHotelsUrl } from '../constants';

export const getHotels = async () => {
  const { data: hotels } = await axios.get(popularHotelsUrl);

  return hotels;
};
