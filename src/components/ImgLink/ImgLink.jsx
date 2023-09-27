import React from 'react';
import classNames from 'classnames';

import '../../styles/components/images.scss';
import '../../styles/components/link.scss';
import './ImgLink.scss';

export const ImgLink = ({ name, imageUrl, className }) => {
  return (
    <a className={classNames('link', className)} href="#" target="_blank">
      <img className="images link__img" src={imageUrl} alt={name} />
      {name}
    </a>
  );
};
