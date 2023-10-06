import React from 'react';
import classNames from 'classnames';

import './Input.scss';

export const Input = ({ className, type = 'text', ...props }) => {
  return (
    <input className={classNames('input', className)} type={type} {...props} />
  );
};
