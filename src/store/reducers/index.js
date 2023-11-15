import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';
import {updateCounters} from './updateCounters.reducer';
import { searchParamsReducer } from './searchParams.reducer';

export const rootReducer = {
  auth: authReducer,
  user: userReducer,
  updateCounters: updateCounters,
  searchParams: searchParamsReducer,
};
