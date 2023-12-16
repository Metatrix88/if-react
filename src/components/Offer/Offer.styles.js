import { createUseStyles } from 'react-jss';
import {
  accentColor,
  screenMd,
  screenSm,
  sectionPaddingTopBottomLg,
  sectionPaddingTopBottomMd, sectionPaddingTopBottomSm, sectionTitleBottomLg, sectionTitleBottomMd, sectionTitleBottomSm
} from '../../constants/styles.constatnts';

export const offerStyles = () => ({
  root: {
    paddingTop: sectionPaddingTopBottomLg,
    paddingBottom: sectionPaddingTopBottomLg,
  },
  title: {
    position: 'relative',
    marginBottom: sectionTitleBottomLg,

    '&:after': {
      content: '""',
      position: 'absolute',
      width: 100,
      height: 4,
      left: '50%',
      bottom: -24,
      transform: 'translate(-50%)',
      backgroundColor: accentColor,
    },
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -8,
    marginRight: -8,
  },
  card: {
    width: '25%',
    textAlign: 'center',
    marginBottom: 32,
    paddingLeft: 8,
    paddingRight: 8,
  },
  image: {
    marginBottom: 48,
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      paddingTop: sectionPaddingTopBottomMd,
      paddingBottom: sectionPaddingTopBottomMd,
    },
    title: {
      marginBottom: sectionTitleBottomMd,

      '&:after': {
        display: 'none',
      },
    },
    list: {
      marginBottom: -32,
    },
    image: {
      marginBottom: 32,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      paddingTop: sectionPaddingTopBottomSm,
      paddingBottom: sectionPaddingTopBottomSm,
    },
    title: {
      marginBottom: sectionTitleBottomSm,
    },
    list: {
      marginBottom: 0,
    },
    card: {
      width: '100%',
      marginBottom: 32,

      '&:last-child': {
        marginBottom: 0,
      },
    },
    image: {
      marginBottom: 16,
    },
  },
});

export const useOfferStyles = createUseStyles(offerStyles, {
  name: 'Offer',
});
