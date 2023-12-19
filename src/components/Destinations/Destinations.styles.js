import { createUseStyles } from 'react-jss';
import {
  accentColor,
  borderLightColor,
  buttonRadiusLg,
  buttonRadiusMd,
  buttonRadiusSm,
  generalWhiteColor,
  primaryColor,
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
    '&:hover, &:focus': {
      backgroundColor: primaryColor,
      color: generalWhiteColor,
    },
  },
  activeButtons: {
    backgroundColor: primaryColor,
    color: generalWhiteColor,
  },
  wrapperCards: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -8,
    marginRight: -8,
    marginBottom: 28,
  },
  card: {
    width: '25%',
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 24,
  },
  wrapperImage: {
    display: 'flex',
    position: 'relative',

    '&:hover $image': {
      filter: 'brightness(40%)',
      backgroundColor: 'rgba(56, 56, 56, 40%)',
      boxShadow: 'inset 0 4px 70px rgba(56, 56, 56, 0.5)',
    },

    '&:hover $button, &:focus $button': {
      display: 'block',
    },
  },
  image: {
    marginBottom: 24,
  },
  button: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 400,
    fontSize: 18,
    display: 'none',
  },
  link: {
    fontSize: 24,
    fontWeight: 400,
    color: primaryColor,
    lineHeight: 1.16,

    '&:hover, &:focus': {
      color: accentColor,
    },
  },
  buttonIcon: {
    width: 50,
    margin: '0 auto',

    '&:hover $arrowIconHide, &:focus $arrowIconHide': {
      fill: accentColor,
    },
  },
  arrowIconHide: {
    transform: 'rotate(180deg)',
  },
  arrowIconShow: {
    transform: 'rotate(180deg)',
  },
  swiper: {
    display: 'none',
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
    wrapperCards: {
      marginBottom: 0,
    },
    card: {
      width: '50%',
      marginBottom: 16,
    },
    image: {
      marginBottom: 16,
    },
    link: {
      fontSize: 16,
    },
    buttonIcon: {
      padding: 0,
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
    swiper: {
      display: 'block',
    },
    wrapperCards: {
      display: 'none',
    },
    buttonIcon: {
      display: 'none',
    },
    image: {
      marginBottom: 16,
    },
    link: {
      fontSize: 12,
    },
  },
  hideName: {},
});

export const useDestinationsStyles = createUseStyles(destinationsStyles, {
  name: 'Destinations',
});
