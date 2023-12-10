import React, { memo } from 'react';
import classNames from 'classnames';

import { useInputStyles } from './Input.styles';

export const Input = memo(({ className, type = 'text', ...props }) => {
  const classes = useInputStyles();
  return (
    <input
      className={classNames(classes.root, className)}
      type={type}
      {...props}
    />
  );
});

Input.displayName = 'Input';
