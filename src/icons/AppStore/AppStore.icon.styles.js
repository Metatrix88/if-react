import { createUseStyles } from 'react-jss';

export const appStoreIconStyles = () => ({
  root: {
    width: 120,
    height: 40,
  },
});

export const useAppStoreIconStyles = createUseStyles(appStoreIconStyles, {
  name: 'AppStoreIcon',
});
