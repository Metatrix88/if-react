import { updateAvailableHotels } from '../services/hotels';
import { urls } from '../constants/urls';

const cache = new Map();

export function fetchData(url, params) {
  const cacheKey = url + JSON.stringify(params);
  if (!cache.has(cacheKey)) {
    cache.set(cacheKey, getData(url, params));
  }
  return cache.get(cacheKey);
}

async function getData(url, params) {
  if (url === urls) {
    return await updateAvailableHotels(params);
  } else {
    throw Error('Not implemented');
  }
}

export const wrapPromise = (promise) => {
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      (result) => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      (reason) => {
        promise.status = 'rejected';
        promise.reason = reason;
      },
    );
    throw promise;
  }
};
