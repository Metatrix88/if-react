import { createUseStyles } from 'react-jss';
import { screenMd, screenSm } from '../../constants/styles.constatnts';

export const logoIconStyles = () => ({
  root: {
    width: 205,
    height: 40,
  },

  //For mobile tablets:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      width: 150,
      height: 32,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      width: 122,
      height: 24,
    },
  },
});

export const useLogoIconStyles = createUseStyles(logoIconStyles, {
  name: 'LogoIcon',
});
