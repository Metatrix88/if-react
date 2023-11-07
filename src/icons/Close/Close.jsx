import React from 'react';
import classNames from 'classnames';

import './Close.scss';

export const Close = ({ className }) => (
  <svg className={classNames('icon-close', className)}>
    <use href="#closeModal" />
  </svg>
);
