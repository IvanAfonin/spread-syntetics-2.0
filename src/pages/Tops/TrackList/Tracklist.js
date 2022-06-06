import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Card } from '../../../components/ui/Card';
import { STRATEGY } from '../../../constants/Strategy';
import { TracklistRow } from './TrackListRow';

export const Tracklist = ({ title, data, tracklistType }) => {
  const strategy = useSelector((state) => state.market.strategy);
  return (
    <StyledCard>
      <TrackListTitle>{title}</TrackListTitle>
      <TrackListTopRow>
        <TrackListCell>№</TrackListCell>
        <TrackListCell>Stocks</TrackListCell>
        <TrackListCell
        // className={
        //   classes.tracklist__content_cell + ' ' + calculationType
        // }
        >
          Strike 1
        </TrackListCell>
        {strategy === STRATEGY.BOX && (
          <TrackListCell>Strike 2</TrackListCell>
        )}
        <TrackListCell
          isAlignedCenter={strategy === STRATEGY.STOCKANDOPTIONS}
        >
          Mark
        </TrackListCell>
      </TrackListTopRow>
      {data.map((row, index) => (
        <TracklistRow
          tracklistType={tracklistType}
          index={index}
          data={row}
          key={row + index}
        />
      ))}
    </StyledCard>
  );
};

const TrackListTitle = styled.p`
  font-size: 16px;
  height: 24px;
  line-height: 24px;
  margin-bottom: ${(props) => props.theme.spacing(2)}px;
`;

const TrackListCell = styled.div`
  font-size: 14px;
  text-align: ${(props) =>
    props.isAlignedCenter ? 'center' : 'left'};
  &:nth-child(1) {
    width: 24px;
  }
  &:nth-child(2) {
    width: 80px;
  }
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    width: 64px;
  }
  &:nth-child(5),
  &:nth-child(1) {
    text-align: center;
  }
  &.stocks.options.strategies {
    width: 144px;
  }
`;

const TrackListTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing(1)}px;
  :nth-child(1) {
    color: ${(props) => props.theme.palette.text.secondary};
    margin-bottom: ${(props) => props.theme.spacing(1.5)}px;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  :nth-child(2) {
    margin-left: ${(props) => props.theme.spacing(1)}px;
  }
`;
