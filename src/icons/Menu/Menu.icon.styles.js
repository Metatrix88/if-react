import { createUseStyles } from 'react-jss';
import {
  generalWhiteColor,
  screenMd,
  screenSm,
} from '../../constants/styles.constatnts';

export const menuIconStyles = () => ({
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

export const useMenuIconStyles = createUseStyles(menuIconStyles, {
  name: 'MenuIcon',
});
