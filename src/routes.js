import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { Login } from './pages/Login';
import { PATH } from './constants/path';
import React from 'react';
import { Tops } from './pages/Tops';
export const Routes = () => {
	return (
		<RouterRoutes>
			<Route path={PATH.HOME} element={<Login />} />
			<Route path={PATH.TOPS} element={<Tops />} />
		</RouterRoutes>
	);
};
