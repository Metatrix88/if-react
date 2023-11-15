import { COUNTERS } from '../../constants/actionTypes';

export const updateCounters = (payload) => ({
  type: COUNTERS.changeCounters,
  payload,
});