import { authReducer } from './auth.slice';
import { userReducer } from './user.slice';
import { updateCountersReducer} from './updateCounters.slice';
import { searchParamsReducer } from './searchParams.slice';

export const rootReducer = {
  auth: authReducer,
  user: userReducer,
  updateCounters: updateCountersReducer,
  searchParams: searchParamsReducer,
};