import React from 'react';
import { useSelector } from 'react-redux';
import { STRATEGY } from '../../../constants/Strategy';
import styled from 'styled-components';
import { TracklistInput } from './TrackListInput';

export const TracklistRow = ({ index, data, tracklistType }) => {
  const strategy = useSelector((state) => state.market.strategy);
  return (
    <TrackListRow>
      <TrackListCell>{index + 1}</TrackListCell>
      <TrackListCell>
        <TracklistInput
          placeholder="Stock"
          value={data.stock}
          index={index}
          tracklistType={tracklistType}
          changeableValue="stock"
        />
      </TrackListCell>
      <TrackListCell>
        <TracklistInput
          placeholder="0"
          value={data.strikeFirst}
          index={index}
          tracklistType={tracklistType}
          changeableValue="strikeFirst"
        />
      </TrackListCell>
      {strategy === STRATEGY.BOX && (
        <TrackListCell>
          <TracklistInput
            placeholder="0"
            value={data.strikeSecond}
            tracklistType={tracklistType}
            index={index}
            changeableValue="strikeSecond"
          />
        </TrackListCell>
      )}
      <TrackListCell>
        <Mark color={data.mark} />
      </TrackListCell>
    </TrackListRow>
  );
};

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

const TrackListRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing(1)}px;
  :nth-child(1) {
    color: ${(props) => props.theme.palette.text.secondary};
    margin-bottom: ${(props) => props.theme.spacing(1.5)}px;
  }
`;

const Mark = styled.div`
  width: ${(props) => props.theme.spacing(2)}px;
  height: ${(props) => props.theme.spacing(2)}px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: ${(props) => props.color};
`;
