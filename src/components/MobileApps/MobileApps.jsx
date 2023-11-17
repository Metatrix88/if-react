import React from 'react';
import classNames from 'classnames';

import { GooglePlay, AppStore } from '../../icons';

import './MobileApps.scss';

export const MobileApps = ({ className }) => {
  return (
    <ul className={classNames('mobile-app', className)}>
      <li>
        <a
          href="#"
          target="_blank"
          aria-label="Download the mobile app for android"
        >
          <GooglePlay />
        </a>
      </li>
      <li>
        <a
          href="#"
          target="_blank"
          aria-label="Download the mobile app for android"
        >
          <AppStore />
        </a>
      </li>
    </ul>
  );
};
