import React from 'react';
import classNames from 'classnames';

import { useFlagUAStyles } from './FlagUA.styles';

export const FlagUA = ({ className }) => {
  const classes = useFlagUAStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#ua-flag" />
    </svg>
  );
};
