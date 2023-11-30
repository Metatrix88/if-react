import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Sprite } from '../Sprite';
import {persistor, store} from '../../store';
import {Loader} from '../Loader';

export const SystemLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Sprite />
      <Provider store={store}>
        <PersistGate loading={<Loader/>} persistor={persistor}>
          <Outlet />
        </PersistGate>
      </Provider>
    </>
  );
};
