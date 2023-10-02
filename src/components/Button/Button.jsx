import React from 'react';
import classNames from 'classnames';

import "./Button.scss";

export const Button =({color, className, children, ...props}, type = 'button') => {
  const colors = {
    primary: color === 'primary',
  }

  return (
    <button
      className={classNames('btn', className, {...colors})}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}