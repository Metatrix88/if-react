import { createUseStyles } from 'react-jss';
import { screenMd, screenSm } from '../../constants/styles.constatnts';

export const arrowStyles = () => ({
  root: {
    width: 50,
    height: 50,
    fill: '#F3F3F4',
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      // width: 7,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      // width: 6,
    },
  },
});

export const useArrowStyles = createUseStyles(arrowStyles, {
  name: 'Arrow',
});
