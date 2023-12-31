import { createUseStyles } from 'react-jss';
import {
  screenMd,
  screenSm,
  whiteThemeColorBlack,
} from '../../constants/styles.constatnts';

export const hotelPageStyles = (theme) => ({
  root: {
    padding: '150px 16px',
    textAlign: 'center',
    backgroundColor: theme.palette.background.pages,
  },
  title: {
    marginBottom: 50,
  },
  image: {
    margin: '0 auto 24px',
  },
  subtitle: {
    marginBottom: 24,
    fontSize: 32,
    color: theme.palette.text.quaternary,
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
    image: {
      marginBottom: 16,
    },
    subtitle: {
      marginBottom: 16,
      fontSize: 26,
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
    image: {
      marginBottom: 8,
    },
    subtitle: {
      marginBottom: 8,
      fontSize: 20,
    },
  },
});

export const useHotelPage = createUseStyles(hotelPageStyles, {
  name: 'HotelPage',
});
