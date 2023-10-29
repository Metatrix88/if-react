import React, { memo } from 'react';
import classNames from 'classnames';

export const Label = memo(({ children, className, htmlFor }) => {
  return (
    <label className={classNames(className)} htmlFor={htmlFor}>
      {children}
    </label>
  );
});

Label.displayName = 'Label';