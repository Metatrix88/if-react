import React from 'react';
import classNames from 'classnames';
import { useAppStoreIconStyles } from './AppStore.icon.styles';

export const AppStore = ({ className }) => {
  const classes = useAppStoreIconStyles();
  return (
    <svg className={classNames(classes.root, className)} >
      <use href="#app" />
    </svg>
  );
};
