import { createUseStyles } from 'react-jss';

export const FlagDEStyles = () => ({
  root: {
    width: 16,
    height: 12,
  },
});

export const useFlagDEStyles = createUseStyles(FlagDEStyles, {
  name: 'FlagDE',
});
