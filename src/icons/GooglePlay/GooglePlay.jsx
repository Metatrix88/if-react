import React from 'react';
import classNames from 'classnames';

import './GooglePlay.scss';

export const GooglePlay = ({ className }) => {
  return (
    <svg className={classNames('icon-google', className)}>
      <use href="#google" />
    </svg>
  );
};
