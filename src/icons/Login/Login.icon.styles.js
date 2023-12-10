import { createUseStyles } from 'react-jss';
import {
  generalWhiteColor,
  screenMd,
  screenSm,
} from '../../constants/styles.constatnts';

export const loginIconStyles = () => ({
  root: {
    fill: generalWhiteColor,
    width: 40,
    aspectRatio: '1/1',
  },

  //For mobile tablets:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      width: 30,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      width: 24,
    },
  },
});

export const useLoginIconStyles = createUseStyles(loginIconStyles, {
  name: 'LoginIcon',
});
