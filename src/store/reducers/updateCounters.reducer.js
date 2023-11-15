import { INITIAL_STATE } from '../../constants/initialState';
import { COUNTERS } from '../../constants/actionTypes';

export const updateCounters = (
  state = INITIAL_STATE.updateCounters,
  action,
) => {
  switch (action.type) {
    case COUNTERS.changeCounters:
      return { ...state, ...action.payload};
    default:
      return state;
  }
};
