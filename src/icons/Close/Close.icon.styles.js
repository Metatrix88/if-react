import { createUseStyles } from 'react-jss';
import { screenMd } from '../../constants/styles.constatnts';

export const closeIconStyles = () => ({
  root: {
    fill: 'red',
    width: 30,
    aspectRatio: '1/1',
    backgroundColor: '#f3f0f0',
    borderRadius: '50%',
  },

  // For mobile phones:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      width: 24,
    },
  },
});

export const useCloseIconStyles = createUseStyles(closeIconStyles, {
  name: 'CloseIcon',
});
