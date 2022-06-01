import React from 'react';
import styled from 'styled-components';
import iconJPG from '../../../assets/images/Vanish.jpg';
import { ClientPingSVG } from '../../../assets/svgs/ServerPing';

export const RightSection = () => {
	return (
		<RightSectionStyled>
			<div>
				<NameContainerStyled>
					<Greeting>Hello,</Greeting>
					<NameStyled>John</NameStyled>
				</NameContainerStyled>
				<div>
					<SettingsStyled>Settings</SettingsStyled>
				</div>
			</div>
			<div>
				<IconStyled src={iconJPG}/>
			</div>
			<PingContainer>
				<ClientPingSVG/>
				<PingText>200 ms</PingText>
			</PingContainer>
		</RightSectionStyled>
	);
};
const PingText = styled.p`
	font-weight: 300;
	font-size: 12px;
	line-height: 16px;
	margin: 0 0 0 8px;	
`;

const PingContainer = styled.div`
	display: flex;
`;

const SettingsStyled = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	margin: 0;
	text-align: right;
	text-decoration: underline;
`;

const NameStyled = styled.p`
	font-size: 18px;
	font-weight: 400;
	color: #546EE5;
	margin: 0;
`;

const Greeting = styled.p`
	font-size: 18px;
	font-weight: 300;
	margin: 0 4px 0 0;
`;

const NameContainerStyled = styled.div`
	display: flex;
`;

const RightSectionStyled = styled.div`
    display: flex;
	align-items: center;
	margin-left: 36px;
`;

const IconStyled = styled.img`
width: 48px;
height: 48px;
border-radius: 50px;
margin-left: 16px;
margin-right: 24px;
`;
