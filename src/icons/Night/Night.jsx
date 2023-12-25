import React from 'react';
import classNames from 'classnames';
import { useTheme } from 'react-jss';

import { useNightIconStyles } from './Night.icon.styles';

export const Night = ({ className }) => {
  const theme = useTheme();
  const classes = useNightIconStyles({ theme });
  return (
    <svg className={classNames(classes.root, className)}>
      <use href="#night" />
    </svg>
  );
};
