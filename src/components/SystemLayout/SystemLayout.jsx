import React, { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';

import { themeVariants } from '../../constants/themeVariants';

import { persistor } from '../../store';
import { setVariant } from '../../store/slices/themes.slice';

import { Sprite } from '../Sprite';
import { Loader } from '../Loader';

import { GlobalStyles } from '../../styles/Global';
import { darkTheme } from '../../styles/themes/darkTheme';
import { whiteTheme } from '../../styles/themes/whiteTheme';

export const SystemLayout = () => {
  const dispatch = useDispatch();

  const themeMode = useSelector((state) => state.themes.variant);
  const currentTheme =
    themeMode === themeVariants.whiteTheme ? whiteTheme : darkTheme;

  useEffect(() => {
    dispatch(setVariant(themeVariants.whiteTheme));
  }, []);

  return (
    <>
      <ScrollRestoration />
      <Sprite />
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyles>
            <Outlet />
          </GlobalStyles>
        </ThemeProvider>
      </PersistGate>
    </>
  );
};
