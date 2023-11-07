import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';

import {Loader} from './components/Loader';

import './index.scss';

import { router } from './routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<Loader />}
    />
  </React.StrictMode>,
);
