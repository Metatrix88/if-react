import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';
import {searchParamsReducer} from './searchParams.reducer';

export const rootReducer = {
  auth: authReducer,
  user: userReducer,
  searchParams: searchParamsReducer,
};
