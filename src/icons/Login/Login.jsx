import React from 'react';
import classNames from 'classnames';

import { useLoginIconStyles } from './Login.icon.styles';

export const Login = ({ className }) => {
  const classes = useLoginIconStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#login" />
    </svg>
  );
};
