import { createUseStyles } from 'react-jss';
import { screenMd, screenSm } from '../../constants/styles.constatnts';

export const nightIconStyles = (theme) => ({
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

export const useNightIconStyles = createUseStyles(nightIconStyles, {
  name: 'NightIcon',
});
