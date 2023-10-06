import React from 'react';
import classNames from 'classnames';

import './Button.scss';

export const Button = (
  { variant, color, className, children, ...props },
  type = 'button',
) => {
  const colors = {
    primary: color === 'primary',
  };

  const variants = {
    outlined: variant === 'outlined',
    text: variant === 'text',
    icon: variant === 'icon',
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
