import { createUseStyles } from 'react-jss';
import { screenMd, screenSm } from '../../constants/styles.constatnts';

export const loaderStyles = () => ({
  root: {
    textAlign: 'center',
  },
  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    images: {
      width: 150,
      height: 150,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    images: {
      width: 100,
      height: 100,
    },
  },
  images: {},
});

export const useLoaderStyles = createUseStyles(loaderStyles, {
  name: 'Loader',
});
