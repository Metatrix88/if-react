import {createUseStyles} from 'react-jss';

// constants
import { screenMd, screenSm } from '../constants/styles.constatnts';

// styles
import { resetStyles } from './base/Reset.styles';
import { fontsStyles } from '../fonts/Fonts.styles';
import { typographyStyles } from './base/Typography.styles';

export const globalStyles = (theme) => ({
    '@global': {
      ...resetStyles,
      '@font-face': [
        ...fontsStyles.roboto400['@font-face'],
        ...fontsStyles.roboto500['@font-face'],
        ...fontsStyles.openSans600['@font-face'],
      ],
      ...typographyStyles(theme),

      '.swiper-wrapper': {
        paddingBottom: 16,
      },
      '.swiper-autoheight .swiper-wrapper': {
        alignItems: 'stretch',
      },
      '.swiper-button-prev, .swiper-button-next, .swiper-rtl': {
        top: '33%',
        color: '#af09d3',
      },
      '.swiper-pagination-bullets.swiper-pagination-horizontal': {
        bottom: -2,
      },
      '.swiper-pagination-bullet-active': {
        background: '#af09d3',
      },

      //For mobile tablets:
      [`@media (max-width: ${screenMd})`]: {
        '.swiper-button-prev:after, .swiper-button-next:after, .swiper-rtl': {
          fontSize: 35,
        },
      },
      '.swiper-button-prev': {},
      '.swiper-button-next': {},
      '.swiper-rtl': {},

      // For mobile phones:
      [`@media (max-width: ${screenSm})`]: {
        '.swiper-button-prev, .swiper-button-next': {
          top: '36%',
        },
      },
    },
    '.swiper-button-prev': {},
    '.swiper-button-next': {},
    '.swiper-rtl': {},
});

export const useGlobalStyles = createUseStyles(globalStyles, {
  name: 'GlobalStyles',
});