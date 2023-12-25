import { createUseStyles } from 'react-jss';
import { screenSm } from '../../constants/styles.constatnts';

export const arrowStyles = (theme) => ({
  root: {
    width: 7,
    height: 18,
    fill: 'transparent',
    stroke: theme.palette.text.secondary,
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      width: 5,
      height: 13,
    },
  },
});

export const useArrowStyles = createUseStyles(arrowStyles, {
  name: 'Arrow',
});
