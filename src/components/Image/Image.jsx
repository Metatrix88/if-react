import React from 'react';
import classNames from 'classnames';

import './Image.scss';

export const Image = ({imageUrl, name, className}) => {
  return (
    <img className={classNames("images", className)} src={imageUrl} alt={name} />
  )
}