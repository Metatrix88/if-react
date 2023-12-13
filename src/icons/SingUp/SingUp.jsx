import React from 'react';
import { useSingUpIconStyles } from './SingUp.styles';

export const SingUpIcon = () => {
  const classes = useSingUpIconStyles();
  return (
    <svg className={classes.root}>
      <use href="#sing-up" />
    </svg>
  );
};
