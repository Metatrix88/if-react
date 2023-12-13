import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../constants/initialState';

const availableHotelsSlice = createSlice({
  name: 'availableHotels',
  initialState: INITIAL_STATE.availableHotels,
  reducers: {
    setAvailableHotels: (state, action) => ({ ...action.payload }),
  },
});

export const { setAvailableHotels } = availableHotelsSlice.actions;

export const availableHotelsReducer = availableHotelsSlice.reducer;
