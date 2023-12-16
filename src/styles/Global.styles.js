import { createUseStyles } from 'react-jss';

import {screenMd} from '../constants/styles.constatnts';

import { resetStyles } from './base/Reset.styles';
import { fontsStyles } from '../fonts/Fonts.styles';
import { typographyStyles } from './base/Typography.styles';

export const globalStyles = () => ({
  '@global': {
    ...resetStyles,
    '@font-face': fontsStyles['@font-face'],
    ...typographyStyles,

    '.swiper-wrapper': {
      paddingBottom: 16,
    },
    '.swiper-autoheight .swiper-wrapper': {
      alignItems: 'stretch',
      },
    '.swiper-button-prev, .swiper-button-next, .swiper-rtl': {
      top: '30%',
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
    '.swiper-rtl': {},
  },
});

export const useGlobalStyles = createUseStyles(globalStyles, {
  name: 'GlobalStyles',
});
