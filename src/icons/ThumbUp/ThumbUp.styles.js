import { createUseStyles } from 'react-jss';
import { screenMd, screenSm } from '../../constants/styles.constatnts';

export const thumbUpStyles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 100,
    aspectRatio: '1/1',
    fill: theme.palette.icons.main,
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      maxWidth: 90,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      maxWidth: 70,
    },
  },
});

export const useThumbUpStyles = createUseStyles(thumbUpStyles, {
  name: 'ThumbUp',
});
