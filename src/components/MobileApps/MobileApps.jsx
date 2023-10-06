import React from 'react';
import classNames from 'classnames';

import { Link } from '../UI/Link';
import { GooglePlay, AppStore } from '../../icons';

import './MobileApps.scss';

export const MobileApps = ({ className }) => {
  return (
    <ul className={classNames('mobile-app', className)}>
      <li>
        <Link target="_blank" aria-label="Download the mobile app for android">
          <GooglePlay />
        </Link>
      </li>
      <li>
        <Link target="_blank" aria-label="Download the mobile app for android">
          <AppStore />
        </Link>
      </li>
    </ul>
  );
};
