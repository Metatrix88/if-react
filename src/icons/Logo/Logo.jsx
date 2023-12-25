import React from 'react';
import classNames from 'classnames';

import { useLogoIconStyles } from './Logo.icon.styles';

export const Logo = ({ className }) => {
  const classes = useLogoIconStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#logo" />
    </svg>
  );
};
