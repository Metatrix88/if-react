import React from 'react';
import classNames from 'classnames';
import { useDevicesStyles } from './Devices.styles';

export const Devices = ({ className }) => {
  const classes = useDevicesStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#devices" />
    </svg>
  );
};
