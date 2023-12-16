import { createUseStyles } from 'react-jss';

export const flagUAStyles = () => ({
  root: {
    width: 16,
    height: 12,
  },
});

export const useFlagUAStyles = createUseStyles(flagUAStyles, {
  name: 'FlagUA',
});
