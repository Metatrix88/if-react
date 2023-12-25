import React from 'react';
import classNames from 'classnames';

import { GooglePlay, AppStore } from '../../icons';

import { useMobileAppsStyles } from './MobileApps.styles';

export const MobileApps = ({ className }) => {
  const classes = useMobileAppsStyles();
  return (
    <ul className={classNames(classes.root, className)}>
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
