import {
  fontFamily,
  lineHeight,
  screenMd,
  screenSm,
} from '../../constants/styles.constatnts';

export const typographyStyles = (theme) => ({
  body: {
    position: 'relative',
    background: theme.palette.primary.generalColor,
    fontFamily: fontFamily.join(', '),
    fontStyle: 'normal',
    fontWeight: 400,
    color: theme.palette.primary.textColor,
  },

  a: {
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: 24,
    color: theme.palette.primary.primaryColor,
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
    color: theme.palette.primary.primaryColor,
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
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
  [`@media (max-width: ${screenSm})`]: {
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
});
