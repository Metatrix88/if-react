import { createUseStyles } from 'react-jss';
import { screenMd, screenSm } from '../../constants/styles.constatnts';

export const containerStyles = () => ({
  container: {
    maxWidth: 1440,
    padding: '0 104px',
    width: '100%',
    margin: '0 auto',
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    container: {
      maxWidth: 764,
      padding: '0 54px',
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    container: {
      maxWidth: 688,
      padding: '0 16px',
    },
  },
});

export const useContainerStyles = createUseStyles(containerStyles, {
  name: 'Container',
});
