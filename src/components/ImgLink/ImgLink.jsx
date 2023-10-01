import React from 'react';
import classNames from 'classnames';

import '../../styles/components/images.scss';
import '../../styles/components/link.scss';
import './ImgLink.scss';

export const ImgLink = ({ name, imageUrl, className, href = '#' }) => {
  return (
    <a
      className={classNames('link', className)}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <img className="images link__img" src={imageUrl} alt={name} />
      {name}
    </a>
  );
};
