import { createUseStyles } from 'react-jss';

export const mobileAppsStyles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
  },
});

export const useMobileAppsStyles = createUseStyles(mobileAppsStyles, {name: 'MobileApps'});