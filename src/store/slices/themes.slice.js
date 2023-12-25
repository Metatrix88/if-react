import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../constants/initialState';

const themesSlice = createSlice({
  name: 'themes',
  initialState: INITIAL_STATE.themes,
  reducers: {
    setVariant: (state, action) => ({ ...state, variant: action.payload }),
  },
});

export const { setVariant } = themesSlice.actions;

export const themesReducer = themesSlice.reducer;
