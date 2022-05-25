import React from 'react';
import styled from 'styled-components';
import { WorldMap } from '../../components/WorldMap';
import { Header } from './Header';
import { LoginModal } from './LoginModal';

export const Login = () => {
	return (
		<LoginWrapper>
			<Header />
			<WorldMap />
			<LoginModal />
		</LoginWrapper>
	);
};

const LoginWrapper = styled.div`
	height: 100%;
	width: 100%;
	min-height: 600px;
	position: absolute;
	overflow: hidden;
`;
