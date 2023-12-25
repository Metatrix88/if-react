import React from 'react';
import { useTheme } from 'react-jss';

// styles
import { useGlobalStyles } from './Global.styles';

export const GlobalStyles = ({ children }) => {
  const theme = useTheme();
  useGlobalStyles({ theme });
  return <>{children}</>;
};
