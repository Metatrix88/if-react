import { authStatuses } from './authStatuses';
import { themeVariants } from './themeVariants';

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
    adultsQuantity: 1,
    roomsQuantity: 1,
    childrenQuantityAndAge: '',
  },
  availableHotels: {
    hotels: [],
  },
  themes: {
    variant: themeVariants.whiteTheme,
  },
};
