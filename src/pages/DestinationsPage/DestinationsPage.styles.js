import { createUseStyles } from 'react-jss';
import {
  screenMd,
  screenSm,
  whiteThemeColorBlack,
} from '../../constants/styles.constatnts';

export const destinationsPageStyles = (theme) => ({
  root: {
    padding: '120px 16px',
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
  reviewer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 16,
  },
  reviewerName: {
    marginBottom: 8,
  },
  countryInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    maxWidth: 500,
    margin: '0 auto',
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

export const useReviewsPage = createUseStyles(destinationsPageStyles, {
  name: 'ReviewsPage',
});
