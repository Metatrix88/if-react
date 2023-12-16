import { createUseStyles } from 'react-jss';
import {
  borderLightColor, buttonRadiusLg, buttonRadiusMd, buttonRadiusSm, generalWhiteColor, primaryColor,
  screenMd,
  screenSm,
  sectionPaddingTopBottomLg,
  sectionPaddingTopBottomMd,
  sectionPaddingTopBottomSm,
  sectionTitleBottomLg,
  sectionTitleBottomMd,
  sectionTitleBottomSm,
} from '../../constants/styles.constatnts';

export const destinationsStyles = () => ({
  root: {
    position: 'relative',
    paddingTop: sectionPaddingTopBottomLg,
    paddingBottom: sectionPaddingTopBottomLg,
  },
  title: {
    marginBottom: sectionTitleBottomLg,
  },
  wrapperButtons: {
    display: 'flex',
    width: '100%',
    maxWidth: 622,
    backgroundColor: borderLightColor,
    borderRadius: buttonRadiusLg,
    marginBottom: 64,
  },
  buttons: {
    borderRadius: 8,
    backgroundColor: 'inherit',
    height: 64,
    width: 192,
    fontSize: 24,
    fontWeight: 400,
    lineHeight: '1.16',

    '&:last-child': {
      flexGrow: 1,
    },
    '&:hover, &:focus, &:active': {
      backgroundColor: primaryColor,
      color: generalWhiteColor,
    },
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      position: 'relative',
      paddingTop: sectionPaddingTopBottomMd,
      paddingBottom: sectionPaddingTopBottomMd,
    },
    title: {
      marginBottom: sectionTitleBottomMd,
    },
    wrapperButtons: {
      maxWidth: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderRadius: buttonRadiusMd,
      marginBottom: 48,
    },
    hideName: {
      display: 'none',
    },
    buttons: {
      borderRadius: 6,
      height: 48,
      width: 150,
      fontSize: 22,
      border: `1px solid ${borderLightColor}`,

      '&:last-child': {
        flexGrow: 0,
      },
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      position: 'relative',
      paddingTop: sectionPaddingTopBottomSm,
      paddingBottom: sectionPaddingTopBottomSm,
    },
    title: {
      marginBottom: sectionTitleBottomSm,
    },
    wrapperButtons: {
      borderRadius: buttonRadiusSm,
      marginBottom: 24,
    },
    buttons: {
      borderRadius: 4,
      height: 32,
      width: 98,
      fontSize: 19,
    },
  },
  hideName: {},
});

export const useDestinationsStyles = createUseStyles(destinationsStyles, {
  name: 'Destinations',
});
