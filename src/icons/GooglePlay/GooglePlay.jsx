import React from 'react';
import classNames from 'classnames';

import { useGooglePlayIconStyles } from './GooglePlay.icon.styles';

export const GooglePlay = ({ className }) => {
  const classes = useGooglePlayIconStyles();

  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#google" />
    </svg>
  );
};
