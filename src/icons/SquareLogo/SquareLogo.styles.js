import { createUseStyles } from 'react-jss';
import { generalWhiteColor, screenSm } from '../../constants/styles.constatnts';

export const squareLogoStyles = () => ({
  root: {
    display: 'none',
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      display: 'block',
      width: 58,
      height: 11,
      fill: generalWhiteColor,
    },
  },
});

export const useSquareLogoIconStyles = createUseStyles(squareLogoStyles, {
  name: 'SquareLogo',
});
