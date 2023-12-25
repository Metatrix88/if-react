import React from 'react';
import classNames from 'classnames';
import { useCloseIconStyles } from './Close.icon.styles';

export const Close = ({ className }) => {
  const classes = useCloseIconStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#closeModal" />
    </svg>
  );
};
