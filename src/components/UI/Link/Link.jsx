import React from 'react';
import { string } from 'prop-types';
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

Link.propTypes = {
  variant: string,
  className: string,
  href: string,
};
