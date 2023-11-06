import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

export const Button = (
  { variant, color, type = 'button', className, children, ...props }
) => {
  const colors = {
    primary: color === 'primary',
  };

  const variants = {
    outlined: variant === 'outlined',
    text: variant === 'text',
    icon: variant === 'icon',
    counter: variant === 'counter',
  };

  return (
    <button
      className={classNames('btn', className, { ...colors, ...variants })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: string,
  color: string,
  className: string,
};
