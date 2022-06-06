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
	margin-right: ${props => props.theme.spacing(5)}px;
	text-decoration: none;
	color: #FFFFFF;
	font-weight: 300;
	font-size: 20px;
	line-height: 32px;
	&.active{
		font-weight: 500;
		transition: 0.5s ease;
		box-shadow: 0 4px 0 0 ${props => props.theme.palette.secondary.main}
	}
	@media screen and (max-width: 1380px) {
		font-size: 16px;
		margin-right: ${props => props.theme.spacing(4)}px;
	}
`;
