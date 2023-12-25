import React from 'react';
import { useRouteError } from 'react-router-dom';

import { Error } from '../../icons';

import { useErrorBoundaryStyles } from './ErrorBoundary.styles';

export const ErrorBoundary = () => {
  const classes = useErrorBoundaryStyles();
  const error = useRouteError();
  let message = 'Something went wrong';

  if (error.message === '204') {
    message = 'No data to display';
  }

  if (error.message === '404') {
    message = '404. Page not found';
  }

  return (
    <div className={classes.root}>
      <Error className={classes.icon} />
      <h3 className={classes.message}>{message}</h3>
    </div>
  );
};
