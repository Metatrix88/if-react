import React from 'react';
import classNames from 'classnames';
import { useForumStyles } from './Forum.styles';

export const Forum = ({ className }) => {
  const classes = useForumStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#forum" />
    </svg>
  );
};
