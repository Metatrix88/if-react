import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { PATH } from '../constants/paths';

// components
import { App } from '../components/App';
import { SystemLayout } from '../components/SystemLayout';
import { ErrorBoundary } from '../components/ErrorBoundary';

// pages
import { HotelPage } from '../pages/HotelPage';
import { Login } from '../pages/Login';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout />}>
      <Route errorElement={<ErrorBoundary />}>
        <Route path={PATH.login} element={<Login />} />
        <Route path={PATH.index} element={<App />} />
        <Route path="hotels/:hotelId" element={<HotelPage />} />
      </Route>
    </Route>,
  ),
);
