import { createUseStyles } from 'react-jss';
import {
  accentColor,
  buttonRadiusLg,
  generalWhiteColor,
  primaryColor,
  screenMd,
  screenSm,
  textColor,
} from '../../../constants/styles.constatnts';

export const buttonStyles = () => ({
  root: {
    display: 'flex',
    backgroundColor: generalWhiteColor,
    color: textColor,
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    '&$outlined': {
      borderRadius: buttonRadiusLg,
      border: `1px solid ${primaryColor}`,
      maxWidth: 128,
      height: 48,
      width: '100%',
      fontSize: 18,
      padding: '12px 16px',
      lineHeight: '1.16',
      color: primaryColor,

      '&:hover': {
        border: `1px solid ${accentColor}`,
        color: accentColor,
      },
    },
    '&$primary': {
      background: primaryColor,
      color: 'white',
    },
    '&$text': {
      fontWeight: 500,
      color: primaryColor,
      padding: 0,
      width: 'auto',
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
  [`@media (max-width: ${screenMd})`]: {
    root: {
      padding: '15px 16px',

      '&$icon': {
        padding: 0,
      },
    },
    icon: {},
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      padding: '5px 15px',

      '&$outlined': {
        maxWidth: 90,
        height: 42,
        fontSize: 16,
        padding: 8,
      },
    },
    outlined: {},
  },
  outlined: {},
  primary: {},
  icon: {},
  counter: {},
  text: {},
});

export const useButtonStyles = createUseStyles(buttonStyles, {
  name: 'Button',
});
