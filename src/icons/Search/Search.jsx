import React from 'react';
import classNames from 'classnames';

import './Search.scss';

export const Search = ({className}) => {
  return (
    <svg className={classNames('search', className)}>
      <use href="#search"/>
    </svg>
  )
}