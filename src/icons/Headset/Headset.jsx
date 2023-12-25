import React from 'react';
import classNames from 'classnames';
import { useHeadsetStyles } from './Headset.styles';

export const Headset = ({ className }) => {
  const classes = useHeadsetStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#headset" />
    </svg>
  );
};
