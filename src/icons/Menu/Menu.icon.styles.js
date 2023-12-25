import { createUseStyles } from 'react-jss';
import { screenMd, screenSm } from '../../constants/styles.constatnts';

export const menuIconStyles = (theme) => ({
  root: {
    fill: theme.palette.icons.bgColor,
    width: 40,
    aspectRatio: '1/1',
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      width: 30,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      width: 24,
    },
  },
});

export const useMenuIconStyles = createUseStyles(menuIconStyles, {
  name: 'MenuIcon',
});
