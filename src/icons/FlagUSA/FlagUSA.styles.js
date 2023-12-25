import { createUseStyles } from 'react-jss';

export const flagUSAStyles = () => ({
  root: {
    width: 16,
    height: 12,
  },
});

export const useFlagUAStyles = createUseStyles(flagUSAStyles, {
  name: 'FlagUSA',
});
