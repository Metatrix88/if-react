import { createUseStyles } from 'react-jss';

import { resetStyles } from './base/Reset.styles';
import { fontsStyles } from '../fonts/Fonts.styles';
import { typographyStyles } from './base/Typography.styles';

export const globalStyles = () => ({
  '@global': {
    ...resetStyles,
    '@font-face': fontsStyles['@font-face'],
    ...typographyStyles,
  },
});

export const useGlobalStyles = createUseStyles(globalStyles, {
  name: 'GlobalStyles'
});
