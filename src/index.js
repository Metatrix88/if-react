import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ReactModal from 'react-modal';

import { Loader } from './components/Loader';

import { router } from './routers';
import { store } from './store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactModal.setAppElement('#root');

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} fallbackElement={<Loader />} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
