import React from 'react';
import classNames from 'classnames';

import './Link.scss';

export const Link = ({
  variant,
  className,
  children,
  href = '#',
  ...props
}) => {
  const variants = {
    text: variant === 'text',
    button: variant === 'button',
    card: variant === 'card',
  };
  return (
    <a
      className={classNames('link', className, { ...variants })}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
};
