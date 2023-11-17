import React from 'react';
import classNames from 'classnames';

import '../../../styles/layout/flex.scss';

export const Card = ({ children, className }) => {
  return (
    <li className={classNames('col-lg-3 col-md-6 col-sm-3', className)}>
      {children}
    </li>
  );
};
