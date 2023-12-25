import React from 'react';
import classNames from 'classnames';

import { useMenuIconStyles } from './Menu.icon.styles';

export const Menu = ({ className }) => {
  const classes = useMenuIconStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#menu" />
    </svg>
  );
};
