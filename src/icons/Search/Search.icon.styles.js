import { createUseStyles } from 'react-jss';
import {
  screenSm,
  secondaryTextColor,
} from '../../constants/styles.constatnts';

export const searchIconStyles = () => ({
  root: {
    width: 25,
    aspectRatio: '1/1',
    fill: secondaryTextColor,
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      width: 16,
    },
  },
});

export const useSearchIconStyles = createUseStyles(searchIconStyles, {
  name: 'SearchIcon',
});
