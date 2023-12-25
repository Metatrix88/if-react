import { createUseStyles } from 'react-jss';
import { primaryColor, screenSm } from '../../constants/styles.constatnts';

export const singUpStyles = () => ({
  root: {
    width: 50,
    height: 45,
    fill: primaryColor,
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      display: 'none',
    },
  },
});

export const useSingUpIconStyles = createUseStyles(singUpStyles, {
  name: 'SingUp',
});
