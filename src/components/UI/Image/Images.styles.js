import { createUseStyles } from 'react-jss';
import { screenSm } from '../../../constants/styles.constatnts';

export const imagesStyles = () => ({
  root: {
    display: 'block',
    maxWidth: 296,
    width: '100%',
    aspectRatio: '1/1',
  },

  //For mobile tablets:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      maxWidth: 328,
    },
  },
});

export const useImagesStyles = createUseStyles(imagesStyles, {
  name: 'Images',
});
