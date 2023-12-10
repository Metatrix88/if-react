import { createUseStyles } from 'react-jss';

export const errorBoundaryStyles = () => ({
  root: {
    textAlign: 'center',
  },

  icon: {
    fontSize: 128,
    color: 'rgba(153, 153, 153, 0.5)',
  },

  message: {
    color: '#1c1c1c',
  },
});

export const useErrorBoundaryStyles = createUseStyles(errorBoundaryStyles, {
  name: 'ErrorBoundary',
});
