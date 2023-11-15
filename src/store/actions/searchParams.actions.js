import { FORM_DATA } from '../../constants/actionTypes';

export const setFormData= (payload) => ({
  type: FORM_DATA.setFormData,
  payload,
});