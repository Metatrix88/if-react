import { createUseStyles } from 'react-jss';
import {
  buttonRadiusLg,
  buttonRadiusMd,
  buttonRadiusSm,
  screenMd,
  screenSm,
} from '../../constants/styles.constatnts';

export const headerStyles = (theme) => ({
  root: {
    display: 'grid',
    position: 'absolute',
    gridTemplateRows: 'auto',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginTop: 50,
    gap: 16,
    left: 0,
    right: 0,
  },
  logo: {
    marginBottom: 6,
    fill: theme.palette.icons.main,
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 48,
  },
  links: {
    paddingTop: 6,
    paddingBottom: 12,
  },
  list: {
    display: 'flex',
    gap: 24,
    alignItems: 'center',
  },
  link: {
    position: 'relative',
    color: theme.palette.text.main,
    lineHeight: 1.16,

    '&:after': {
      content: '""',
      position: 'absolute',
      left: 5,
      top: 40,
      width: 0,
      height: 4,
      backgroundColor: theme.palette.accent.hover,
      transition: 'width 0.3s ease-out',
    },
    '&:hover:after, &:focus:after': {
      width: '85%',
    },
  },
  wrapperButtonNight: {
    marginTop: 5,
    marginBottom: 11,
  },
  iconNight: {
    width: 30,
  },
  wrapperButtonLogin: {
    position: 'relative',
    marginBottom: 6,
  },
  wrapperButtonMenu: {
    display: 'none',
  },
  isLogin: {
    fill: theme.palette.text.main,
  },
  wrapperLogOut: {
    position: 'absolute',
    right: '-280%',
    color: theme.palette.text.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    top: 45,
    lineHeight: 1.16,
    fontSize: 13,
    width: 250,
  },
  buttonsLogOut: {
    maxWidth: 70,
    height: 30,
    fontSize: 16,
    padding: 0,
    borderRadius: buttonRadiusLg,

    '&:hover': {
      color: theme.palette.accent.hover,
    },
  },
  iconFocus: {
    '&:hover': {
      fill: theme.palette.accent.hover,
    },
  },
  buttonFocus: {
    '&:focus, &:focus-visible': {
      '& $iconFocus': {
        fill: theme.palette.accent.hover,
      },
    },
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      marginTop: 0,
      paddingTop: 12,
      paddingBottom: 12,
      alignItems: 'center',
    },
    logo: {
      margin: 0,
    },
    links: {
      display: 'none',
    },
    list: {
      gap: 16,
    },
    wrapperButtonNight: {
      margin: 0,
    },
    iconNight: {
      width: 24,
    },
    wrapperButtonLogin: {
      marginBottom: 0,
    },
    wrapperLogOut: {
      right: '-380%',
      gap: 4,
      top: 40,
      fontSize: 12,
      width: 250,
    },
    buttonsLogOut: {
      maxWidth: 70,
      height: 30,
      fontSize: 13,
      padding: 0,
      borderRadius: buttonRadiusMd,
    },
    wrapperButtonMenu: {
      display: 'block',
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    iconNight: {
      width: 16,
    },
    wrapperLogOut: {
      right: '-165%',
      top: 30,
      width: 100,
    },
    buttonsLogOut: {
      height: 16,
      borderRadius: buttonRadiusSm,
    },
  },
});

export const useHeaderStyles = createUseStyles(headerStyles, {
  name: 'Header',
});
