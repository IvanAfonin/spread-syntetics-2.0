import { getAccountRequest, loginRequest } from './auth.requests';
import { setUser } from '../../slices/authSlice';
import { LOCALSTORAGEKEYS } from '../../constants/LocalStorageKeys';

export const loginThunk = (login, password) => {
  return async (dispatch) => {
    const response = await loginRequest(login, password);
    dispatch(setUser(response.data.user));
    localStorage.setItem(LOCALSTORAGEKEYS.AUTH, response.data.token);
  };
};

export const getAccountThunk = (token) => {
  return async (dispatch) => {
    const response = await getAccountRequest(token);
    dispatch(setUser(response.data.user));
  };
};
