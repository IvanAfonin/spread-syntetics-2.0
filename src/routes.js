import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { Login } from './pages/Login';
import { PATH } from './constants/path';
import React from 'react';

export const Routes = () => {
	return (
		<RouterRoutes>
			<Route path={PATH.HOME} element={<Login />} />
		</RouterRoutes>
	);
};
