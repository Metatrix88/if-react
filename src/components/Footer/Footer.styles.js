import { createUseStyles } from 'react-jss';
import {
  accentColor,
  generalWhiteColor,
  primaryDarkColor,
  screenMd,
  screenSm,
  sectionPaddingTopBottomLg,
  sectionPaddingTopBottomMd,
  sectionPaddingTopBottomSm,
} from '../../constants/styles.constatnts';

export const footerStyles = () => ({
  root: {
    backgroundColor: primaryDarkColor,
    color: generalWhiteColor,
    paddingTop: sectionPaddingTopBottomLg,
    paddingBottom: sectionPaddingTopBottomLg,
  },
  logo: {
    display: 'none',
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -8,
    marginRight: -8,
    marginBottom: 40,
  },
  list: {
    width: '33.33%',
    paddingLeft: 8,
    paddingRight: 8,
  },
  item: {
    marginBottom: 24,
    lineHeight: 1.16,
  },
  title: {
    fontWeight: 500,
  },
  link: {
    color: generalWhiteColor,
    fontSize: 20,
    textDecoration: 'none',

    '&:hover, &:focus': {
      cursor: 'pointer',
      color: accentColor,
    },
  },
  copyright: {
    fontSize: 14,
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      paddingTop: sectionPaddingTopBottomMd,
      paddingBottom: sectionPaddingTopBottomMd,
    },
    logo: {
      display: 'block',
      maxWidth: 150,
      margin: '0 auto 56px',
      fill: generalWhiteColor,
    },
    right: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
    },
    left: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
    item: {
      display: 'none',

      '&:first-child': {
        display: 'block',
        textDecoration: 'underline',
        marginBottom: 0,
      },
    },
    copyright: {
      fontSize: 12,
      textAlign: 'center',
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      paddingTop: sectionPaddingTopBottomSm,
      paddingBottom: sectionPaddingTopBottomSm,
    },
    logo: {
      maxWidth: 98,
      marginBottom: 40,
    },
    icon: {
      width: 98,
      height: 19,
    },
    nav: {
      marginBottom: 32,
    },
    list: {
      fontSize: 15,
    },
    link: {
      fontSize: 15,
    },
  },

  icon: {},
  right: {},
  center: {},
  left: {},
});

export const useFooterStyles = createUseStyles(footerStyles, {
  name: 'Footer',
});
