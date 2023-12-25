import React from 'react';
import classNames from 'classnames';

import { useFlagDEStyles } from './FlagDE.styles';

export const FlagDE = ({ className }) => {
  const classes = useFlagDEStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#de-flag" />
    </svg>
  );
};
