import React from 'react';
import classNames from 'classnames';

import './Image.scss';

export const Image = ({ url, name, className }) => {
  return (
    <img className={classNames('images', className)} src={url} alt={name} />
  );
};
