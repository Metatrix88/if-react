import { createUseStyles } from 'react-jss';
import { screenMd, screenSm } from '../../constants/styles.constatnts';

export const headsetStyles = () => ({
  root: {
    width: '100%',
    maxWidth: 100,
    aspectRatio: '1/1',
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      maxWidth: 90,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      maxWidth: 70,
    },
  },
});

export const useHeadsetStyles = createUseStyles(headsetStyles, {
  name: 'Headset',
});
