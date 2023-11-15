import { authStatuses } from './authStatuses';

export const INITIAL_STATE = {
  auth: {
    status: authStatuses.loggedOut,
  },
  user: {
    email: null,
    id: null,
    name: null,
  },
  updateCounters: {
    adultsCounter: 1,
    childrenCounter: 0,
    childrenAge: [],
    roomsCounter: 1,
  },
  searchParams: {
    cityInput: '',
    dateStart: null,
    dateEnd: null,
    adultsCounter: 1,
    childrenCounter: 0,
    roomsCounter: 1,
    childrenAges: [],
  },
};
