import { useSelector } from 'react-redux';
import { USAFlagSVG } from '../../assets/svgs/USAFlagSvg';
import { SERVER_LOCATION } from '../../constants/ServerLocation';
import { EuropeanFlagSVG } from '../../assets/svgs/EuropeanFlagSVG';
import styled from 'styled-components';
import React from 'react';

export const Header = () => {
	const country = useSelector((state) => state.market.country);
	return (
		<HeaderWrapper>
			<div>Choose your intrested region</div>
			<FlagsContainer>
				<USAFlagSVG isActive={country === SERVER_LOCATION.USA} />
				<EuropeanFlagSVG
					isActive={country === SERVER_LOCATION.EUROPE}
				/>
			</FlagsContainer>
		</HeaderWrapper>
	);
};

const FlagsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const HeaderWrapper = styled.div`
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	z-index: 2;
`;
