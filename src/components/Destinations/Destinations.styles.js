import { createUseStyles } from 'react-jss';
import {
  buttonRadiusLg,
  buttonRadiusMd,
  buttonRadiusSm,
  screenMd,
  screenSm,
  sectionPaddingTopBottomLg,
  sectionPaddingTopBottomMd,
  sectionPaddingTopBottomSm,
  sectionTitleBottomLg,
  sectionTitleBottomMd,
  sectionTitleBottomSm,
} from '../../constants/styles.constatnts';

export const destinationsStyles = (theme) => ({
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
    backgroundColor: theme.palette.background.secondary,
    maxWidth: 622,
    borderRadius: buttonRadiusLg,
    marginBottom: 64,
  },
  buttons: {
    borderRadius: 8,
    backgroundColor: 'transparent',
    color: theme.palette.text.secondary,
    height: 64,
    width: 192,
    fontSize: 24,
    fontWeight: 400,
    lineHeight: '1.16',

    '&:last-child': {
      flexGrow: 1,
    },
    '&:hover, &:focus': {
      backgroundColor: theme.palette.accent.btn,
      color: theme.palette.text.main,
    },
  },
  activeButtons: {
    backgroundColor: theme.palette.accent.btn,
    color: theme.palette.text.main,
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
    color: theme.palette.text.quaternary,
    lineHeight: 1.16,

    '&:hover, &:focus': {
      color: theme.palette.accent.hover,
    },
  },
  buttonShow: {
    backgroundColor: theme.palette.background.secondary,
    width: 40,
    height: 40,
    borderRadius: '50%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    transition: 'transform 0.3s ease',
    margin: '0 auto',

    '&:hover': {
      transform: 'translateY(5px)',
      backgroundColor: theme.palette.accent.btn,
    },

    '&:hover $arrowIconHide, &:hover $arrowIconShow': {
      stroke: theme.palette.accent.hover,
    },
  },
  arrowIconHide: {
    transform: 'rotate(270deg)',
  },
  arrowIconShow: {
    transform: 'rotate(90deg)',
  },
  swiper: {
    display: 'none',
  },
  customPrev: {
    display: 'none',
  },
  customNext: {
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
      border: `1px solid ${theme.palette.border.main}`,

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
    buttonShow: {
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
    buttonShow: {
      display: 'none',
    },
    image: {
      marginBottom: 16,
    },
    link: {
      fontSize: 12,
    },
    customNext: {
      display: 'flex',
      position: 'absolute',
      backgroundColor: theme.palette.background.tertiary,
      top: '55%',
      right: 5,
      zIndex: 5,
      width: 35,
      height: 35,
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
      display: 'flex',
      position: 'absolute',
      backgroundColor: theme.palette.background.tertiary,
      top: '55%',
      left: 5,
      zIndex: 5,
      width: 35,
      height: 35,
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
    arrowIconNext: {},
  },
  arrowIconPrev: {},
  arrowIconNext: {},
  hideName: {},
});

export const useDestinationsStyles = createUseStyles(destinationsStyles, {
  name: 'Destinations',
});
