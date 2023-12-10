import { createUseStyles } from 'react-jss';
import {
  generalWhiteColor,
  primaryColor,
  screenMd,
  screenSm,
  textColor,
} from '../../../constants/styles.constatnts';

export const buttonStyles = () => ({
  root: {
    backgroundColor: generalWhiteColor,
    color: textColor,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    '&$primary': {
      background: primaryColor,
      color: 'white',
    },
    '&$icon': {
      backgroundColor: 'transparent',
      width: 'auto',
    },
    '&$counter': {
      width: 30,
      height: 30,
      border: `1px solid ${primaryColor}`,
      fontSize: 18,
      fontWeight: 400,

      '&:disabled': {
        border: '1px solid rgba(206, 206, 206, 1)',
        color: 'rgba(206, 206, 206, 1)',
      },
    },
  },

  //For mobile tablets:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      padding: '15px 16px',

      '&$icon': {
        padding: 0,
      },
    },
    icon:{},
  },

  // For mobile phones:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      padding: '5px 15px',
    },
  },

  primary: {},
  icon: {},
  counter: {},
});

export const useButtonStyles = createUseStyles(buttonStyles, {
  name: 'Button',
});
