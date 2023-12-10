import React from 'react';
import classNames from 'classnames';

// styles
import { useContainerStyles } from './Container.styles';

export const Container = ({ children, className }) => {
  const classes = useContainerStyles();
  return (
    <section className={classNames(classes.container, className)}>{children}</section>
  );
};
