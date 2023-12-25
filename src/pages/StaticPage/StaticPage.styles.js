import { createUseStyles } from 'react-jss';
import {screenMd, screenSm, whiteThemeColorBlack} from '../../constants/styles.constatnts';

export const staticPageStyles = (theme) => ({
  root: {
    padding: '150px 16px',
    textAlign: 'center',
    backgroundColor: theme.palette.background.pages,
  },
  title: {
    marginBottom: 50,
    fontSize: 32,
  },
  text: {
    marginBottom: 16,
    color: whiteThemeColorBlack,
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      padding: '55px 16px',
    },
    title: {
      marginBottom: 40,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      padding: '45px 16px',
    },
    title: {
      marginBottom: 32,
    },
  },
});

export const useStaticPage = createUseStyles(staticPageStyles, {
  name: 'StaticPage',
});
