import { createUseStyles } from 'react-jss';
import {
  accentColor,
  bgColor, screenMd,
  screenSm, secondaryTextColor,
  sectionPaddingTopBottomLg, sectionPaddingTopBottomMd,
  sectionPaddingTopBottomSm, sectionTitleBottomLg, sectionTitleBottomMd, sectionTitleBottomSm
} from '../../constants/styles.constatnts';

export const homesStyles = () => ({
  root: {
    position: 'relative',
    backgroundColor: bgColor,
    paddingTop: sectionPaddingTopBottomLg,
    paddingBottom: 104,
  },
  title: {
    marginBottom: sectionTitleBottomLg,
  },
  images: {
    marginBottom: 24,
  },
  link: {
    lineHeight: 1.16,

    '&:hover, &:focus': {
      color: accentColor,
    },
  },
  subtitle: {
    marginTop: 24,
    color: secondaryTextColor,
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      paddingTop: sectionPaddingTopBottomMd,
      paddingBottom: 64,
    },
    title: {
      marginBottom: sectionTitleBottomMd,
    },
    images: {
      marginBottom: 16,
    },
    subtitle: {
      marginTop: 16,
      fontSize: 20,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      paddingTop: sectionPaddingTopBottomSm,
      paddingBottom: 32,
    },
    title: {
      marginBottom: sectionTitleBottomSm,
    },
    images: {
      marginBottom: 8,
    },
    subtitle: {
      marginTop: 4,
      fontSize: 12,
    },
  },
});

export const useHomesStyles = createUseStyles(homesStyles, {name: 'Homes'});

