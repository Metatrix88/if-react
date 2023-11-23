import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from './auth.slice';
import { userReducer } from './user.slice';
import { updateCountersReducer } from './updateCounters.slice';
import { searchParamsReducer } from './searchParams.slice';
import {availableHotelsReducer} from './availableHotels.slice';

const persistConfig = {
  key: 'root',
  storage,
}

export const rootReducer = persistReducer(persistConfig, combineReducers({
  auth: authReducer,
  user: userReducer,
  updateCounters: updateCountersReducer,
  searchParams: searchParamsReducer,
  availableHotels: availableHotelsReducer,
}));
