import React, { memo } from 'react';
import {string} from 'prop-types';
import classNames from 'classnames';

export const Label = memo(({ children, className, htmlFor }) => {
  return (
    <label className={classNames(className)} htmlFor={htmlFor}>
      {children}
    </label>
  );
});
Label.propTypes = {
  className: string,
  htmlFor: string,
}
Label.displayName = 'Label';
