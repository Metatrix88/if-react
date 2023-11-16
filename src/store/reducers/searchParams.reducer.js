import { INITIAL_STATE } from '../../constants/initialState';
import { FORM_DATA } from '../../constants/actionTypes';

export const searchParamsReducer = (
  state = INITIAL_STATE.searchParams,
  action,
) => {
  switch (action.type) {
    case FORM_DATA.setFormData:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
