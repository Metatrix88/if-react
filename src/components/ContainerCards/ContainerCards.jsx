import React from 'react';
import classNames from 'classnames';

import './ContainerCards.scss';

export const ContainerCards = ({ children, className }) => {
  return <ul className={classNames('row', className)}>{children}</ul>;
};
