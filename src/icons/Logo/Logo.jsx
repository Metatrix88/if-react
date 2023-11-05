import React from 'react';
import classNames from 'classnames';

import './Logo.scss';

export const Logo = ({ className }) => {
  return (
    <svg className={classNames('icon-logo', className)}>
      <use href="#logo" />
    </svg>
  );
};
