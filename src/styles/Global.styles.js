import { createUseStyles } from 'react-jss';

// styles
import { resetStyles } from './base/Reset.styles';
import { fontsStyles } from '../assets/fonts/Fonts.styles';
import { typographyStyles } from './base/Typography.styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    '.swiper-button-disabled': {
      display: 'none',
    },
    '.swiper-pagination-bullets.swiper-pagination-horizontal': {
      bottom: -2,
    },
    '.swiper-pagination-bullet-active': {
      background: theme.palette.accent.hover,
    },
  },
});

export const useGlobalStyles = createUseStyles(globalStyles, {
  name: 'GlobalStyles',
});
