import { createSlice } from '@reduxjs/toolkit';
import {INITIAL_STATE} from '../../constants/initialState';


const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE.user,
  reducers: {
    setUser: (state, action) => ({ ...action.payload }),
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;