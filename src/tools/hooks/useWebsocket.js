import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { WEBSOCKETMESSAGES } from '../../constants/WebsocketMessages';
import { LOCALSTORAGEKEYS } from '../../constants/LocalStorageKeys';
import { setPing } from '../../slices/authSlice';

const ws = new WebSocket(process.env.REACT_APP_BACKEND_WS_API);
const pingWS = new WebSocket(
  process.env.REACT_APP_BACKEND_WS_PING_API
);

export const useWebsockets = () => {
  const dispatch = useDispatch();
  const [currentPing, setCurrentPing] = useState(0);

  const initPingWS = useCallback(() => {
    let previousDate = '';
    pingWS.onopen = () => {
      previousDate = new Date().getTime();
      pingWS.send(WEBSOCKETMESSAGES.CHECKPING);
    };

    pingWS.onmessage = () => {
      const currentDate = new Date().getTime();
      setCurrentPing(currentDate - previousDate);
      previousDate = currentDate;
      pingWS.send(WEBSOCKETMESSAGES.CHECKPING);
    };
  }, []);

  const initWS = useCallback(() => {
    ws.onopen = () => {
      ws.send(localStorage.getItem(LOCALSTORAGEKEYS.AUTH));
    };
  }, []);

  useEffect(() => {
    dispatch(setPing(currentPing));
  }, [currentPing]);

  return { initWS, initPingWS };
};

export const sendWSMessage = (message) => {
  ws.send(JSON.stringify(message));
};
