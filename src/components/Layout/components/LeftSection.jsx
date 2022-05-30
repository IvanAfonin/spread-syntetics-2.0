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
				<USAFlagSVG isActive={country === SERVER_LOCATION.USA}
					handleChangeServer={handleChangeServer}/>
				<StyledEuropeanFlag isActive={country === SERVER_LOCATION.EUROPE}
					handleChangeServer={handleChangeServer}/>
			</FlagsContainer>
			<div className='select'>
				<SelectStyled>
					<OptionStyled onClick={() => handleChangeStrategy (STRATEGY.BOX)}>Box strategies</OptionStyled>
					<OptionStyled onClick={() => handleChangeStrategy (STRATEGY.STOCKANDOPTIONS)}>Stocks + options strategies</OptionStyled>
				</SelectStyled>
			</div>
			<Divider/>
		</LeftSectionStyled>
	);
};

const StyledEuropeanFlag = styled(EuropeanFlagSVG)`
	margin-top: 8px;
`;

const FlagsContainer = styled.div`
	margin-left: 32px;
	display: flex;
	flex-direction: column;	
`;

const LeftSectionStyled = styled.div`
    display: flex;
	align-items: center;
	margin-left: 36px;
`;

const SelectStyled = styled.select`
	margin-right: 32px;
    margin-left: 32px;
	font-weight: 400;
    background: #34395A;
    border-radius: 2px;
    color: #FFFFFF;
`;

const OptionStyled = styled.option`

    font-family: 'Ubuntu';
    font-style: normal;
    line-height: 24px;
    color: #FFFFFF;
`;