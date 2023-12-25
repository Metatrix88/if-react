import { createUseStyles } from 'react-jss';

export const googlePlayIconStyles = () => ({
  root: {
    width: 135,
    height: 40,
  },
});

export const useGooglePlayIconStyles = createUseStyles(googlePlayIconStyles, {
  name: 'GooglePlayIcon',
});
