import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Tracklist } from './Tracklist';
import {
  TRACKLIST_TYPE_LONG,
  TRACKLIST_TYPE_SHORT,
} from '../../../constants/TrackLists';

export const TracklistSection = () => {
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
