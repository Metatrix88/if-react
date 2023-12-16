import React from 'react';
import classNames from 'classnames';

import { useReviewerStyles } from './Reviewer.styles';

export const Reviewer = ({ className }) => {
  const classes = useReviewerStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#avatar" />
    </svg>
  );
};