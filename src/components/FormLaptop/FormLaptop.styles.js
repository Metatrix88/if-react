import { createUseStyles } from 'react-jss';
import {
  accentColor,
  buttonRadiusLg,
  buttonRadiusMd,
  generalWhiteColor,
  primaryColor,
  screenMd,
  screenSm,
  secondaryTextColor,
  textColor,
} from '../../constants/styles.constatnts';

export const formLaptopStyles = () => ({
  root: {
    display: 'none',
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16,
      fontSize: 16,
      lineHeight: 1.16,
      fontWeight: 500,
      padding: 12,
      backgroundColor: accentColor,
      border: `4px solid ${accentColor}`,
      marginBottom: 80,
    },
    wrapper: {
      width: '100%',
      background: generalWhiteColor,
      whiteSpace: 'normal',
      borderRadius: buttonRadiusMd,
    },
    wrapperFullWidth: {
      gridColumn: '1/3',
    },
    wrapperDestination: {
      display: 'flex',
    },
    buttonSearch: {
      margin: '14px 4px 14px 12px',
    },
    wrapperInputDestination: {
      position: 'relative',
      width: '100%',

      '& > label': {
        fontWeight: 500,
        fontSize: 18,
      },
    },
    wrapperInputDate: {
      position: 'relative',
      width: '100%',
    },
    wrapperProperties: {
      display: 'flex',
    },
    wrapperInputProperties: {
      position: 'relative',
      width: '100%',

      '&:nth-child(n + 2):before': {
        content: '""',
        position: 'absolute',
        top: 6,
        left: -8,
        height: 40,
        borderRight: `1px solid ${secondaryTextColor}`,
      },
    },
    label: {
      position: 'absolute',
      top: '25%',
      left: 12,
      transform: 'translateY(-50%)',
      transition: 'all 0.3s',
      pointerEvents: 'all',
      fontSize: 16,
      lineHeight: 1.16,
      fontWeight: 400,
    },
    input: {
      borderRadius: buttonRadiusLg,

      '&:focus ~ label, &:not(:focus):valid ~ label': {
        top: 16,
        color: textColor,
        opacity: 1,
      },
    },
    button: {
      gridColumn: '1/3',
      lineHeight: 1,
      padding: 14,
      border: `3px solid ${primaryColor}`,
      borderRadius: buttonRadiusLg,
      fontWeight: 500,
      fontSize: 22,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      fontSize: 15,
      gap: 8,
      padding: 4,
      marginBottom: 32,
    },
    buttonSearch: {
      margin: '16px 0 16px 12px',
    },
    wrapperInputDestination: {
      '& > label': {
        fontSize: 15,
      },
    },
    wrapperInputProperties: {
      '&:nth-child(n + 2):before': {
        top: 8,
        left: 0,
        height: 32,
      },
    },
    label: {
      left: 10,
      fontSize: 12,
    },
    input: {
      '&:focus ~ label, &:not(:focus):valid ~ label': {
        top: 14,
      },
    },
    button: {
      fontSize: 19,
    },
  },
  wrapper: {},
  wrapperFullWidth: {},
  wrapperDestination: {},
  buttonSearch: {},
  wrapperProperties: {},
  wrapperInputDestination: {},
  wrapperInputDate: {},
  wrapperInputProperties: {},
  input: {},
  label: {},
  button: {},
});

export const useFormLaptop = createUseStyles(formLaptopStyles, {
  name: 'FormLaptop',
});
