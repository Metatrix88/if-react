import React from 'react';
import classNames from 'classnames';

// styles
import './Container.scss';

export const Container = ({ children, className }) => {
  return (
    <section className={classNames('container', className)}>{children}</section>
  );
};
