import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import {useImagesStyles} from './Images.styles';

export const Image = ({ imageUrl, name, className }) => {
  const classes = useImagesStyles();
  return (
    <img
      className={classNames(classes.root, className)}
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
