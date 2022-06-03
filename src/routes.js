import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { Tops } from './pages/Tops';
import { Login } from './pages/Login';
import { Dividends } from './pages/Dividends';
import { Dynamic } from './pages/Dynamic';
import { Stocks } from './pages/Stocks';

import { PATH } from './constants/path';
import { ProtectedRoutes } from './tools/ProtectedRoutes';
import { PublicRoutes } from './tools/PublicRoutes';
import { Layout } from './components/Layout';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route element={<PublicRoutes />}>
        <Route exact path={PATH.HOME} element={<Login />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}>
          <Route path={PATH.TOPS} element={<Tops />} />
          <Route path={PATH.DIVIDENDS} element={<Dividends />} />
          <Route path={PATH.DYNAMIC} element={<Dynamic />} />
          <Route path={PATH.STOCKS} element={<Stocks />} />
        </Route>
      </Route>
    </RouterRoutes>
  );
};
