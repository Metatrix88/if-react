import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './components/App';
import { AvailableContextProvider } from './contexts/Available.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AvailableContextProvider>
      <App />
    </AvailableContextProvider>
  </React.StrictMode>,
);
