import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { chooseMarket } from '../../slices/marketSlice';
import { WorldMapSVG } from '../../assets/svgs/WorldMapSVG';

export const WorldMap = () => {
	const country = useSelector((state) => state.market.country);
	const dispatch = useDispatch();

	const handleChangeServer = (value) => {
		dispatch(chooseMarket(value));
	};
	return (
		<MapOuter>
			<WorldMapSVG server={country} setServer={handleChangeServer} />
		</MapOuter>
	);
};

const MapOuter = styled.div`
	width: 100%;
	height: 120vh;
	overflow: hidden;
`;
