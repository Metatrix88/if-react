import React from 'react';

import loadingImg from '../../images/loading1.gif';

import './Loader.scss';

export const Loader = () => {
  return (
    <div className="loader">
      <img className="loader__img" src={loadingImg} alt="loading..." />
    </div>
  );
};
