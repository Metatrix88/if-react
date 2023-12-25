import React from 'react';
import classNames from 'classnames';
import { useThumbUpStyles } from './ThumbUp.styles';

export const ThumbUp = ({ className }) => {
  const classes = useThumbUpStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#thumb-up" />
    </svg>
  );
};
