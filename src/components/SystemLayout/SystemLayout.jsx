import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';

import { persistor, store } from '../../store';

import { Sprite } from '../Sprite';
import { Loader } from '../Loader';

import { useGlobalStyles } from '../../styles/Global.styles';
import {darkTheme} from '../../styles/darkTheme';

export const SystemLayout = () => {
  useGlobalStyles();
  return (
    <>
      <ScrollRestoration />
      <Sprite />
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <ThemeProvider theme={darkTheme}>
            <Outlet />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
};
