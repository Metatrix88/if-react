import { createUseStyles } from 'react-jss';
import {accentColor, generalWhiteColor, primaryColor, screenMd, screenSm} from '../../constants/styles.constatnts';

export const headerStyles = () => ({
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
    fill: primaryColor,
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
    color: generalWhiteColor,
    lineHeight: 1.16,

    '&:after': {
      content: '""',
      position: 'absolute',
      left: 5,
      top: 40,
      width: 0,
      height: 4,
      backgroundColor: accentColor,
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
    marginBottom: 6,
  },
  wrapperButtonMenu: {
    display: 'none',
  },
  isLogin: {
    fill: accentColor,
  },
  wrapperButtonLogout: {
    width: 80,
    marginLeft: '79.5%',
    marginTop: '5%',
  },
  buttonLogout: {
    backgroundColor: 'yellowgreen',
    padding: 6,
    borderRadius: 6,
  },
  iconFocus: {
    '&:hover': {
      fill: accentColor,
    },
  },
  buttonFocus: {
    '&:focus, &:focus-visible': {
      '& $iconFocus': {
        fill: accentColor,
      },
    },
  },

  //For mobile tablets:
  [`@media (max-width: ${screenSm})`]: {
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
    wrapperButtonMenu: {
      display: 'block',
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenMd})`]: {
    iconNight: {
      width: 16,
    },
  },
});

export const useHeaderStyles = createUseStyles(headerStyles, {name: 'Header'});
