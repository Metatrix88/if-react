import React, { memo } from 'react';
import classNames from 'classnames';

import './Input.scss';

export const Input = memo(({ className, type = 'text', ...props }) => {
  return (
    <input className={classNames('input', className)} type={type} {...props} />
  );
});

Input.displayName = 'Input';
