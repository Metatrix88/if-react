import {
  fontFamily,
  generalWhiteColor,
  lineHeight,
  primaryColor,
  screenMd,
  screenSm,
  textColor,
} from '../../constants/styles.constatnts';

export const typographyStyles = {
  body: {
    position: 'relative',
    background: generalWhiteColor,
    fontFamily: fontFamily.join(', '),
    fontStyle: 'normal',
    fontWeight: 400,
    color: textColor,
  },

  a: {
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: 24,
    color: primaryColor,
  },

  h2: {
    fontWeight: 500,
    fontSize: 40,
    lineHeight: lineHeight,
    textAlign: 'center',
  },
  h3: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: lineHeight,
  },
  h4: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: lineHeight,
    color: primaryColor,
  },

  //For mobile tablets:
  [`@media (max-width: ${screenSm})`]: {
    a: {
      fontSize: 20,
    },
    h2: {
      fontSize: 34,
    },
    h3: {
      fontSize: 20,
    },
    h4: {
      fontSize: 16,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenMd})`]: {
    a: {
      fontSize: 12,
    },
    h2: {
      fontSize: 28,
    },
    h3: {
      fontSize: 15,
    },
    h4: {
      fontSize: 15,
    },
  },
};
