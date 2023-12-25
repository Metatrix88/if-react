import React from 'react';
import classNames from 'classnames';
import { useTheme } from 'react-jss';

import { useArrowStyles } from './Arrow.styles';

export const Arrow = ({ className }) => {
  const theme = useTheme();
  const classes = useArrowStyles({ theme });
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#arrow" />
    </svg>
  );
};
