import React from 'react';
import classNames from 'classnames';

import './Menu.scss';

export const Menu = ({ className }) => {
  return (
    <svg className={classNames('icon-menu', className)}>
      <use href="#menu" />
    </svg>
  );
};