import { createSlice } from '@reduxjs/toolkit';
import {INITIAL_STATE} from '../../constants/initialState';

const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState: INITIAL_STATE.searchParams,
  reducers: {
    setFormData: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { setFormData } = searchParamsSlice.actions;

export const searchParamsReducer = searchParamsSlice.reducer;