import { createUseStyles } from 'react-jss';
import {primaryDarkColor, screenSm, secondaryTextColor} from '../../constants/styles.constatnts';

export const closeIconStyles = () => ({
  root: {
    fill: secondaryTextColor,
    width: 30,
    aspectRatio: '1/1',

    '&:hover': {
      fill: primaryDarkColor,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      width: 22,
    },
  },
});

export const useCloseIconStyles = createUseStyles(closeIconStyles, {
  name: 'CloseIcon',
});
