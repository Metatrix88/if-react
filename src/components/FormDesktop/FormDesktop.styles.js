import { createUseStyles } from 'react-jss';
import { buttonRadiusLg, screenMd } from '../../constants/styles.constatnts';

export const formDesktopStyles = (theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns:
      'minmax(150px, 1fr) minmax(150px, 300px) minmax(150px, 314px) minmax(150px, 192px)',
    position: 'relative',
    backgroundColor: theme.palette.background.main,
    fontSize: 18,
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
    border: `3px solid ${theme.palette.border.main}`,
    borderRadius: buttonRadiusLg,
    padding: '18px 16px',
    color: theme.palette.text.tertiary,

    '&:hover, &:focus': {
      border: `3px solid ${theme.palette.accent.hover}`,
      borderRadius: buttonRadiusLg,
    },
    '&::placeholder': {
      color: 'red',
    },
  },
  inputCity: {

    '&:focus ~ label, &:not(:focus):valid ~ label': {
      top: -40,
      color: theme.palette.text.main,
      opacity: 1,
    },
  },
  inputDate: {
    minWidth: 240,
    width: '100%',
    backgroundColor: theme.palette.background.main,
  },
  inputCount: {
    color: theme.palette.text.tertiary,
  },
  focusDate: {
    top: -40,
    color: theme.palette.text.main,
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
    border: `3px solid ${theme.palette.buttons.secondary}`,
    borderRadius: buttonRadiusLg,

    '&:hover, &:focus': {
      border: `3px solid ${theme.palette.accent.hover}`,
    },
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      display: 'none',
    },
  },
});

export const useFormDesktopStyles = createUseStyles(formDesktopStyles, {
  name: 'FormDesktop',
});
