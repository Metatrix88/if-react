import { createUseStyles } from 'react-jss';
import {
  screenMd,
  screenSm,
} from '../../../constants/styles.constatnts';

export const inputStyles = (theme) => ({
  root: {
    width: '100%',
    background: 'transparent',

    '&:placeholder': {
      fontSize: 18,
      color: theme.palette.text.tertiary,
    },
    '&:placeholder-shown': {
      textOverflow: 'ellipsis',
    },
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      padding: '28px 12px 6px',
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      padding: '24px 8px 6px',
    },
  },
});

export const useInputStyles = createUseStyles(inputStyles, { name: 'Input' });
