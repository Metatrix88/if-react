import React from 'react';
import classNames from 'classnames';

import { useNightIconStyles } from './Night.icon.styles';

export const Night = ({ className }) => {
  const classes = useNightIconStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#night" />
    </svg>
  );
};
