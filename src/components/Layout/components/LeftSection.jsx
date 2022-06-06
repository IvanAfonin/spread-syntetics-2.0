import React from 'react';
import logoPNG from '../../../assets/images/logo.png';
import { USAFlagSVG } from '../../../assets/svgs/USAFlagSvg';
import { EuropeanFlagSVG } from '../../../assets/svgs/EuropeanFlagSVG';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { chooseMarket, chooseStrategy } from '../../../slices/marketSlice';
import { SERVER_LOCATION } from '../../../constants/ServerLocation';
import { STRATEGY } from '../../../constants/Strategy';
import { Divider } from '../../../assets/svgs/Divider';

export const LeftSection = () => {
	const country = useSelector((state) => state.market.country);
	const dispatch = useDispatch();

	const handleChangeServer = (value) => {
		dispatch(chooseMarket(value));
	};

	const handleChangeStrategy = (value) => {
		dispatch(chooseStrategy(value));
	};

	return (
		<LeftSectionStyled>
			<div className='logo'>
			    <img src={logoPNG} style={{width: 150}}/>
			</div>
			<FlagsContainer>
				<USAFlagStyled isActive={country === SERVER_LOCATION.USA}
					handleChangeServer={handleChangeServer}/>
				<StyledEuropeanFlag isActive={country === SERVER_LOCATION.EUROPE}
					handleChangeServer={handleChangeServer}/>
			</FlagsContainer>
				<SelectStyled>
					<OptionStyled onClick={() => handleChangeStrategy (STRATEGY.BOX)}>Box strategies</OptionStyled>
					<OptionStyled onClick={() => handleChangeStrategy (STRATEGY.STOCKANDOPTIONS)}>Stocks + Options strategies</OptionStyled>
				</SelectStyled>
			<Divider/>
		</LeftSectionStyled>
	);
};
const USAFlagStyled = styled(USAFlagSVG)`
	margin-bottom: 16px;	
`;

const StyledEuropeanFlag = styled(EuropeanFlagSVG)`
	margin-top: 8px;
`;

const FlagsContainer = styled.div`
	margin: 16px 32px;
	margin-top: 16px;
	margin-left: 32px;
	display: flex;
	flex-direction: column;	
`;

const LeftSectionStyled = styled.div`
    display: flex;
	align-items: center;
`;

const SelectStyled = styled.select`
	font-family: 'Ubuntu';
	margin-right: 32px;
	font-size: 16px;
	line-height: 24px;
    background: #34395A;
    border-radius: 2px;
    color: #FFFFFF;
	border: none;
	outline: none;
	padding: 4px 8px;
`;

const OptionStyled = styled.option`
	font-weight: 300;
	font-size: 16px;
    font-family: 'Ubuntu';
    font-style: normal;
    line-height: 24px;
    color: #FFFFFF;
	outline: none;
	border: 1px solid transparent;
	padding: 4px 8px;
`;
