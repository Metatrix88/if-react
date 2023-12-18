import React from 'react';
import classNames from 'classnames';

import { useArrowStyles } from './Arrow.styles';

export const Arrow = ({ className }) => {
  const classes = useArrowStyles();
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#arrow2" />
    </svg>
  );
};
