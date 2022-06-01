import { loginRequest } from './auth.requests';
import { setUser } from '../../slices/authSlice';
import { LOCALSTORAGEKEYS } from '../../constants/LocalStorageKeys';

export const loginThunk = (login, password) => {
  return async (dispatch) => {
    const response = await loginRequest(login, password);
    dispatch(setUser(response.user));
    localStorage.setItem(LOCALSTORAGEKEYS.AUTH, response.token);
  };
};
