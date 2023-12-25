import { createUseStyles } from 'react-jss';
import { screenMd, screenSm } from '../../constants/styles.constatnts';

export const reviewerStyles = () => ({
  root: {
    width: 64,
    height: 64,
  },

  //For mobile tablets:
  [`@media (max-width: ${screenMd})`]: {
    root: {
      width: 40,
      height: 40,
    },
  },

  // For mobile phones:
  [`@media (max-width: ${screenSm})`]: {
    root: {
      width: 52,
      height: 52,
    },
  },
});

export const useReviewerStyles = createUseStyles(reviewerStyles, {
  name: 'Reviewer',
});
