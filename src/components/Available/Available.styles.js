import { createUseStyles } from 'react-jss';
import {
  screenMd,
  screenSm,
  sectionPaddingTopBottomLg,
  sectionPaddingTopBottomMd,
  sectionPaddingTopBottomSm,
  sectionTitleBottomLg,
  sectionTitleBottomMd,
  sectionTitleBottomSm,
} from '../../constants/styles.constatnts';

export const availableStyles = (theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.background.section,
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
      color: theme.palette.accent.hover,
    },
  },
  subtitle: {
    marginTop: 24,
    color: theme.palette.text.quinary,
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
    customNext: {
      right: 32,
    },
    customPrev: {
      left: 32,
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
    customNext: {
      right: 5,
      width: 35,
      height: 35,
    },
    customPrev: {
      left: 5,
      width: 35,
      height: 35,
    },
  },
  arrowIconNext: {},
});

export const useAvailableStyles = createUseStyles(availableStyles, {
  name: 'Available',
});
