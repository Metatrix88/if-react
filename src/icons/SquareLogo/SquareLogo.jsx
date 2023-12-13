import React from 'react';
import { useSquareLogoIconStyles } from './SquareLogo.styles';

export const SquareLogo = () => {
  const classes = useSquareLogoIconStyles();
  return (
    <svg className={classes.root}>
      <use href="#square-logo" />
    </svg>
  );
};
