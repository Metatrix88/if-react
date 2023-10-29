import React from 'react';

import loadingImg from '../../images/loading.gif';

import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="loader">
      <img src={loadingImg} alt="loading..."/>
    </div>
  )
};