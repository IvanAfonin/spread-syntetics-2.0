import React from 'react';
import { Tracklist } from './TrackList';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  TRACKLIST_TYPE_LONG,
  TRACKLIST_TYPE_SHORT,
} from '../../constants/TrackLists';

export const Tops = () => {
  const trackListShort = useSelector(
    (state) => state.tops.tracklists.short
  );
  const trackListLong = useSelector(
    (state) => state.tops.tracklists.long
  );

  return (
    <TrackListContainer>
      <Tracklist
        tracklistType={TRACKLIST_TYPE_SHORT}
        data={trackListShort}
        title="Short"
      />
      <Tracklist
        tracklistType={TRACKLIST_TYPE_LONG}
        data={trackListLong}
        title="Long"
      />
    </TrackListContainer>
  );
};

const TrackListContainer = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-between;
`;
