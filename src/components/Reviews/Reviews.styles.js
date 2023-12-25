import { createUseStyles } from 'react-jss';
import {
  buttonRadiusLg,
  generalWhiteColor,
  screenMd,
  screenSm,
  sectionPaddingTopBottomLg,
  sectionPaddingTopBottomMd,
  sectionPaddingTopBottomSm,
  sectionTitleBottomLg,
  sectionTitleBottomMd,
  sectionTitleBottomSm,
  whiteThemeColorBlack,
} from '../../constants/styles.constatnts';

export const reviewsStyles = (theme) => ({
  root: {
    position: 'relative',
    paddingTop: sectionPaddingTopBottomLg,
    paddingBottom: sectionPaddingTopBottomLg,
  },
  titleLg: {
    marginBottom: sectionTitleBottomLg,
  },
  titleSm: {
    display: 'none',
  },
  slide: {
    backgroundColor: theme.palette.background.section,
  },
  link: {
    fontSize: 18,
  },
  wrapperImg: {
    position: 'relative',
  },
  image: {
    display: 'block',
    maxWidth: 400,
    width: '100%',
    aspectRatio: '1/1',
  },
  price: {
    position: 'absolute',
    height: 48,
    backgroundColor: 'rgba(56, 56, 56, 0.7)',
    color: theme.palette.text.main,
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    lineHeight: '1.16',
  },
  wrapperNameAndRating: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 8,
  },
  nameHotel: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 16,
  },
  wrapperRating: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    gap: 8,
  },
  rating: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: buttonRadiusLg,
    width: 48,
    height: 32,
    backgroundColor: theme.palette.background.quaternary,
    color: generalWhiteColor,
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: '1.4',
    fontWeight: 600,
  },
  countReviews: {
    fontSize: 14,
    color: theme.palette.text.quinary,
    textAlign: 'center',
  },
  reviewer: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  reviewerName: {
    marginBottom: 8,
    color: whiteThemeColorBlack,
  },
  countryInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  country: {
    color: theme.palette.text.quinary,
  },
  text: {
    color: whiteThemeColorBlack,
  },
  customNext: {
    position: 'absolute',
    backgroundColor: theme.palette.background.tertiary,
    top: '48%',
    right: 85,
    zIndex: 5,
    width: 40,
    height: 40,
    borderRadius: '50%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    transition: 'transform 0.3s ease',

    '&:hover': {
      transform: 'translateX(5px)',
      backgroundColor: theme.palette.accent.btn,
    },

    '&:hover $arrowIconNext': {
      stroke: theme.palette.accent.hover,
    },
  },
  customPrev: {
    position: 'absolute',
    backgroundColor: theme.palette.background.tertiary,
    top: '48%',
    left: 85,
    zIndex: 5,
    width: 40,
    height: 40,
    borderRadius: '50%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    transition: 'transform 0.3s ease',

    '&:hover': {
      transform: 'translateX(-5px)',
      backgroundColor: theme.palette.accent.btn,
    },

    '&:hover $arrowIconPrev': {
      stroke: theme.palette.accent.hover,
    },
  },
  arrowIconPrev: {
    transform: 'rotate(180deg)',
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      paddingTop: sectionPaddingTopBottomMd,
      paddingBottom: sectionPaddingTopBottomMd,
    },
    titleLg: {
      marginBottom: sectionTitleBottomMd,
    },
    customNext: {
      right: 35,
    },
    customPrev: {
      left: 35,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      backgroundColor: theme.palette.background.section,
      paddingTop: sectionPaddingTopBottomSm,
      paddingBottom: sectionPaddingTopBottomSm,
    },
    titleLg: {
      display: 'none',
    },
    titleSm: {
      display: 'block',
      marginBottom: sectionTitleBottomSm,
    },
    link: {
      fontSize: 15,
    },
    image: {
      maxWidth: 568,
      width: '100%',
      aspectRatio: '1/1',
    },
    price: {
      display: 'none',
    },
    content: {
      padding: '12px 0',
    },
    wrapperNameAndRating: {
      marginBottom: 12,
    },
    nameHotel: {
      fontSize: 15,
      marginBottom: 8,
    },
    wrapperRating: {
      gap: 4,
    },
    rating: {
      width: 40,
      height: 27,
    },
    countReviews: {
      fontSize: 12,
    },
    reviewer: {
      gap: 8,
    },
    reviewerName: {
      marginBottom: 4,
    },
    customNext: {
      top: '30%',
      right: 5,
    },
    customPrev: {
      top: '30%',
      left: 5,
    },
  },
  arrowIconNext: {},
});

export const useReviewsStyles = createUseStyles(reviewsStyles, {
  name: 'Reviews',
});
