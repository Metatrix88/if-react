import { createSlice } from '@reduxjs/toolkit';
import {INITIAL_STATE} from '../../constants/initialState';

const updateCountersSlice = createSlice({
  name: 'updateCounters',
  initialState: INITIAL_STATE.updateCounters,
  reducers: {
    setUpdateCounters: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { setUpdateCounters } = updateCountersSlice.actions;

export const updateCountersReducer = updateCountersSlice.reducer;