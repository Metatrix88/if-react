import React from 'react';
import classNames from 'classnames';

import './AppStore.scss';

export const AppStore = ({className}) => {
  return (
    <svg className={classNames("icon-apple", className)} >
      <use href="#app" />
    </svg>
  )
}