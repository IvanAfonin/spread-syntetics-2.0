import React from 'react';
import { Header } from '../../pages/Login/Header';
import styled from 'styled-components';

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<MainWrapper>{children}</MainWrapper>
		</>
	);
};

const MainWrapper = styled.div`
	display: flex;
`;
