import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import { useButtonStyles } from './Button.styles';
import { useTheme } from 'react-jss';

export const Button = ({
  variant,
  color,
  type = 'button',
  className,
  children,
  ...props
}) => {
  const theme = useTheme();
  const classes = useButtonStyles({ theme });
  const colors = {
    [classes.primary]: color === 'primary',
  };

  const variants = {
    [classes.outlined]: variant === 'outlined',
    [classes.text]: variant === 'text',
    [classes.icon]: variant === 'icon',
    [classes.counter]: variant === 'counter',
  };

  return (
    <button
      className={classNames(classes.root, className, {
        ...colors,
        ...variants,
      })}
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
