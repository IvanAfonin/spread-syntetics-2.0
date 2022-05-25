import { useDispatch, useSelector } from 'react-redux';
import { USAFlagSVG } from '../../assets/svgs/USAFlagSvg';
import { SERVER_LOCATION } from '../../constants/ServerLocation';
import { EuropeanFlagSVG } from '../../assets/svgs/EuropeanFlagSVG';
import styled from 'styled-components';
import React from 'react';
import { chooseMarket } from '../../slices/marketSlice';
import logo from '../../assets/images/logo.png';

export const Header = () => {
	const country = useSelector((state) => state.market.country);
	const dispatch = useDispatch();

	const handleChangeServer = (value) => {
		dispatch(chooseMarket(value));
	};

	return (
		<HeaderWrapper>
			<img style={{ width: 150 }} src={logo} alt="logo" />
			<TopText>Choose your intrested region</TopText>
			<FlagsContainer>
				<USAFlagSVG
					isActive={country === SERVER_LOCATION.USA}
					handleChangeServer={handleChangeServer}
				/>
				<EuropeanFlagSVG
					isActive={country === SERVER_LOCATION.EUROPE}
					handleChangeServer={handleChangeServer}
				/>
			</FlagsContainer>
		</HeaderWrapper>
	);
};

const TopText = styled.p`
	font-size: 24px;
	margin: 16px 0;
	text-align: center;
	line-height: 32px;
`;

const FlagsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	z-index: 2;
	margin-top: 16px;
`;
