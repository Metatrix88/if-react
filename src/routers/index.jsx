import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { PATH } from '../constants/paths';

// components
import { App } from '../components/App';
import {SystemLayout} from '../components/SystemLayout';

// pages
import { HotelPage } from '../pages/HotelPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SystemLayout/>}>
      <Route path={PATH.index} element={<App />}></Route>
      <Route path="hotels/:hotelId" element={<HotelPage />} />
    </Route>
  ),
);
