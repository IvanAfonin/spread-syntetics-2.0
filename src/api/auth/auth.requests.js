import { axiosInstance } from '../../tools/axios';

export const loginRequest = async (login, password) => {
  const response = await axiosInstance.post('/auth_service/auth', {
    email: login,
    password: password,
  });
  return response;
};

export const getAccountRequest = async (token) => {
  const response = await axiosInstance.get('/auth_service/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
