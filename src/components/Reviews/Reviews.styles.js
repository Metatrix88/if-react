import { createUseStyles } from 'react-jss';
import {
  bgColor,
  buttonRadiusLg,
  generalWhiteColor,
  primaryDarkColor,
  screenMd,
  screenSm,
  secondaryTextColor,
  sectionPaddingTopBottomLg,
  sectionPaddingTopBottomMd,
  sectionPaddingTopBottomSm,
  sectionTitleBottomLg,
  sectionTitleBottomMd,
  sectionTitleBottomSm,
} from '../../constants/styles.constatnts';

export const reviewsStyles = () => ({
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
    backgroundColor: bgColor,
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
    color: generalWhiteColor,
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
    backgroundColor: primaryDarkColor,
    color: generalWhiteColor,
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: '1.4',
    fontWeight: 600,
  },
  countReviews: {
    fontSize: 14,
    color: secondaryTextColor,
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
  },
  countryInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
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
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      backgroundColor: bgColor,
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
  },
});

export const useReviewsStyles = createUseStyles(reviewsStyles, {
  name: 'Reviews',
});
