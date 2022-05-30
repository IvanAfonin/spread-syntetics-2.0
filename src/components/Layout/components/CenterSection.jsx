import React from 'react';
import { LINKS } from '../../../constants/Links';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Divider } from '../../../assets/svgs/Divider';

export const CenterSection = () => {
	return (
		<CenterSectionStyled>
			{LINKS.map((link) => (
				<StyledLink key={link.path} to={link.path}>{link.name}</StyledLink>
			))}
			<Divider/>
		</CenterSectionStyled>
	);
};

const CenterSectionStyled = styled.div`
	display: flex;
	align-items: center;
	margin-left: 32px;	
`;

const StyledLink = styled(NavLink)`
	margin-right: 40px;
	text-decoration: none;
	color: #FFFFFF;
	font-weight: 300;
	font-size: 20px;
	line-height: 32px;
	&.active{
		font-weight: 500;
		padding-bottom: 4px;
		transition: 0.5s ease;
		box-shadow: 0px 4px 0px 0px #546ee5
	}
	:hover {
		font-weight: 500;
		padding-bottom: 4px;
		transition: 0.5s ease;
		box-shadow: 0px 4px 0px 0px #546ee5
	}
`;
