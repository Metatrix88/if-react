import React from 'react';
import classNames from 'classnames';

import './Night.scss';

export const Night = ({ className }) => {
  return (
    <svg className={classNames('icon-night', className)}>
      <use href="#night" />
    </svg>
  );
};
