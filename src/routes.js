import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { Login } from './pages/Login';
import { PATH } from './constants/path';
import { ProtectedRoutes } from './tools/ProtectedRoutes';
import { Tops } from './pages/Tops';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route exact path={PATH.HOME} element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path={PATH.TOPS} element={<Tops />} />
      </Route>
    </RouterRoutes>
  );
};
