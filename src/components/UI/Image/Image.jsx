import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import './Image.scss';

export const Image = ({ imageUrl, name, className }) => {
  return (
    <img
      className={classNames('images', className)}
      src={imageUrl}
      alt={name}
    />
  );
};

Image.prorTypes = {
  imageUrl: string,
  name: string,
  className: string,
};
