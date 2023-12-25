import React from 'react';
import classNames from 'classnames';

import { useFlagUAStyles } from './FlagUSA.styles';

export const FlagUSA = ({ className }) => {
  const classes = useFlagUAStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#usa-flag" />
    </svg>
  );
};
