import { createUseStyles } from 'react-jss';
import {
  accentColor,
  borderLightColor,
  buttonRadiusLg,
  generalWhiteColor, primaryColor,
  screenSm
} from '../../constants/styles.constatnts';

export const formDesktopStyles = () => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: 'minmax(150px, 1fr) minmax(150px, 300px) minmax(150px, 314px) minmax(150px, 192px)',
    position: 'relative',
    backgroundColor: 'white',
    fontSize: 18,
    border: `3px solid ${borderLightColor}`,
    borderRadius: buttonRadiusLg,
    gap: 0,
    marginBottom: 120,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  label: {
    position: 'absolute',
    top: '50%',
    left: 24,
    transform: 'translateY(-50%)',
    transition: 'all 0.3s',
    pointerEvents: 'auto',
  },
  input: {
    border: '3px solid transparent',
    borderRadius: buttonRadiusLg,
    marginTop: -2,
    marginBottom: -3,
    padding: '18px 16px',

    '&:hover, &:focus': {
      border: `3px solid ${accentColor}`,
      borderRadius: buttonRadiusLg,
    },
  },
  inputCity: {
    marginLeft: -3,

    '&:focus ~ label, &:not(:focus):valid ~ label': {
      top: -40,
      color: generalWhiteColor,
      opacity: 1,
    },
  },
  inputDate: {
    minWidth: 240,
    width: '100%',
  },
  focusDate: {
    top: -40,
    color: generalWhiteColor,
    opacity: 1,
  },
  visuallyHidden: {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(100%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
    margin: -1,
    border: 0,
    padding: 0,
  },
  button: {
    fontWeight: 500,
    fontSize: 24,
    marginLeft: 3,
    marginTop: -3,
    marginBottom: -3,
    border: `3px solid ${primaryColor}`,
    borderRadius: buttonRadiusLg,

    '&:hover, &:focus': {
      border: `3px solid ${accentColor}`,
    },
  },

  //For mobile tablets:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      display: 'none',
    },
  },
});

export const useFormDesktopStyles = createUseStyles(formDesktopStyles, {name: 'FormDesktop'});

