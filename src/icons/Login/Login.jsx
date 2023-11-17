import React from 'react';
import classNames from 'classnames';

import './Login.scss';

export const Login = ({ className }) => {
  return (
    <svg className={classNames('icon-login', className)}>
      <use href="#login" />
    </svg>
  );
};
