import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ReactModal from 'react-modal';

import { Loader } from './components/Loader';

import { router } from './routers';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactModal.setAppElement('#root');

root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loader />} />
  </React.StrictMode>,
);
