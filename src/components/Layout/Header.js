/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import { CenterSection } from './components/CenterSection';
import { LeftSection } from './components/LeftSection';
import { RightSection } from './components/RightSection';

export const Header = () => {
	return (
		<HeaderContainer>
			<LeftSection />
			<CenterSection />
			<RightSection />
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	margin: 0px 24px;
	background: #202542;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
	border-radius: 0px 0px 24px 24px;
`;
