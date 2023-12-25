import { createUseStyles } from 'react-jss';
import {
  buttonRadiusLg,
  screenMd,
  screenSm,
} from '../../../constants/styles.constatnts';

export const buttonStyles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.buttons.main,
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    '&$outlined': {
      borderRadius: buttonRadiusLg,
      border: `1px solid ${theme.palette.border.secondary}`,
      maxWidth: 128,
      height: 48,
      width: '100%',
      fontSize: 18,
      padding: '12px 16px',
      lineHeight: '1.16',
      color: theme.palette.text.quaternary,

      '&:hover': {
        border: `1px solid ${theme.palette.accent.hover}`,
        color: theme.palette.accent.hover,
      },
    },
    '&$primary': {
      background: theme.palette.buttons.secondary,
      color: theme.palette.text.main,
    },
    '&$text': {
      fontWeight: 500,
      color: theme.palette.text.quaternary,
      padding: 0,
      width: 'auto',
      backgroundColor: 'transparent',
    },
    '&$icon': {
      backgroundColor: 'transparent',
      width: 'auto',
    },
    '&$counter': {
      width: 30,
      height: 30,
      border: `1px solid ${theme.palette.border.secondary}`,
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
